const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const chatModel=new Schema({
    chatName:{type:String,trim:true},
    isGroupChat:{type:Boolean, default:false},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
  },
  {
     timestamps:true,
  }
);

module.exports=mongoose.model("Chat",chatModel)
// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin