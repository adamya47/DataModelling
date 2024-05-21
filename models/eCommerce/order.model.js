import mongoose from "mongoose"

const orderItemSchema=new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId, //yeh id mongoose khud de deta hai Product ko,we will learn ahead how to extract this 
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema=new mongoose.Schema({

  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  orderItems:[orderItemSchema]//in orderItems we needed product type and quantity of each product
                              //thats why we used array of orderItemSchema   [{}]
                              //we could also do like [{
                         //       orderId:{}
                      //        }]  but its just another way to do it
                      , 
  address: {
              type: String,
              required: true,
             },     
  
  status:{
    type:String,
    enum:["PENDING,CANCELLED,DELIVERED"],  //enum concept yeh ki yahi teen me se koi use kr sakte hai spelling everything has to be same
    default:"PENDING"
  },

},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema)