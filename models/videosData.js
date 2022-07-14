const mongoose = require('mongoose');
//schema for storing the Data
const videoSchema = new mongoose.Schema({
    publishedAt:{
        type:String,
    },
    channelId:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    channelTitle:{
        type:String,
    },
    liveBroadcastContent:{
        type:String,
    }
});

const Videos = mongoose.model('Videos',videoSchema);
module.exports = Videos;