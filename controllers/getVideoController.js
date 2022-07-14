const axios = require('axios');
const Videos = require('../models/videosData');
const API_KEY = "AIzaSyAScDc5x-ZiWi1O-rtyBhD5-_0Mxc4Ip0c";

let flag = false;
let prevQuery = '';

//function which is running asynchronous calling youtube API after 10s interval
const fetchDataAsync = async (query)=>{
    
    flag = true;
    let nextPointer = '';
        
        let id = setInterval(async ()=>{

            try {
                let data = await axios.get(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=80&q=${query.q}&type=video&key=${API_KEY}&pageToken=${nextPointer}`);
                let result = data.data;
        
                nextPointer = result.nextPageToken;
                result.items.map((item)=>{
                    //storing the values in DB
                    try {
                        Videos.create({
                            publishedAt:item.snippet.publishedAt,
                            channelId:item.snippet.channelId,
                            title:item.snippet.title,
                            description:item.snippet.description||"",
                            channelTitle:item.snippet.channelTitle,
                            liveBroadcastContent:item.snippet.liveBroadcastContent                
                        });
                    } catch (error) {
                        console.log(error.message);
                    }
        
                })
            } catch (error) {
                clearInterval(id);
            }
    
        },10000);     
    
}

//controller function to get data sorted in reverse 
exports.fetchData = async(req,res)=>{
    
    if(req.query.q!=prevQuery){
        flag = false;
        prevQuery = req.query.q;
    }

    flag==false?fetchDataAsync(req.query):null;
s
    const TotalRecords = await Videos.find({});
    const pageNo = TotalRecords.length/20;
    let num = parseInt(req.query.pageNo); 
    
    if(num>pageNo&&pageNo!=0){
        return res.json({message:"Invalid pageNo"});
    }

    let data = await Videos.find({}).sort({publishedAt:-1}).skip((num*20)-20).limit(20);
    // await Videos.deleteMany({});
    return res.json({data:data});
}




