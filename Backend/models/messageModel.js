import mongoose, { Mongoose } from "mongoose";

const messageModel = new Mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,  // get the id of usermodel so here we take the reference of it.
    ref: "User",
    required: true
  },
  receiverId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
  },
  // here message stored
  message:{
    type: String,
    required: true
  }
}, {timestamp: true});

export const Message = mongoose.model("Message", messageModel);