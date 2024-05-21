import mongoose from "mongoose"

const doctorSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  }, Qualification:{
    type:String,
    required:true,
  }, 
  //so its an array of all the hospitals a doctor works at
  worksAt:[{
    type:mongoose.Schema.Types.ObjectId,
    req:"Hospital"
  }],
  experienceInYears:{
    type:Number,
    default:0
  },
  salary:{
    type:String,//as we could write 2,00,000 rupees
    required:true
  }

},{
  timestamps:true
})

export const Doctor=mongoose.model("Doctor",doctorSchema)