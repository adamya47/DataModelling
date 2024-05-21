import mongoose from "mongoose"

const productSchema=new mongoose.Schema({

  name:{
  type:String,
  required:true
  },
  description:{
    type:String,
  required:true
  },
  productImage:{
    type:String //image hum third party pe upload karnege aur wahan se hume url mil jaega ,thats why string 
  }
  ,
  price:{
    type:Number,
    default:0
  },
  stock: {
    default: 0,
    type: Number,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },


},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)