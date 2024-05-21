import mongoose from "mongoose"

const hospitalSchema=new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {//keep pincode in string cause in some countries it contain alphabets too
    type: String,
    required: true,
  },
  speciallizedIn:[{  //it is an array that would include all this the hospital speciallize in 
    type:String
  }]
},{
  timestamps:true
})

export const Hospital=mongoose.model("Hospital",hospitalSchema)