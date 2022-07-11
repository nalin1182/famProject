const axios = require('axios')

exports.fetchData = async (req,res)=>{
    let query = req.query;
    console.log(query);
    let data = await axios.get(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=20&q=${query.q}&type=video&key=AIzaSyBO0Vh263N0un_NvSe36UF7blLhiXD9xqU`)
    let result = data.data;

    return res.json({data:result});
}