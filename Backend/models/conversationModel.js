import mongoose from "mongoose";

const conversationModel = new mongoose.Schema({
    participants :[{
      type: mongoose.Schema.Types.ObjectId, // create a reference.
      ref: "User"
    }],
    message:[{
      type: mongoose.Schema.Types.ObjectId,  // create a reference from Message.
      ref: "Message"
    }]
}, {timestamp: true});

export const conversation = mongoose.model("Conversation", conversationModel);