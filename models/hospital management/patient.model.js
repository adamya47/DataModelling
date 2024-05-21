import mongoose from "mongoose"

const patientSchema=new mongoose.Schema({
  address:{
    type:String,
    required:true,
  },
  diagnosedWith:{
    type:String,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","Other"],
    required:true
  },
  age:{
    type:String,
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
  address:{
    type:String,
    required:true
  }

},{
  timestamps:true
})

export const Patient=mongoose.model("Hospital",patientSchema)