import { Product } from "../models/Product";
import bufferGenerate from "../utils/bufferGenerate";
import TryCatch from "../utils/TryCatch";
import cloudniary from "cloudinary";

export const createproduct= TryCatch(async(res,req)=>{
        if(req.user.role !=="admin")
            return res.status(403).json({
        message:"you are not a admin",
    });
const {title,description,category,price,stock}=req.body
const files = req.files
if(!files || files.length === 0) return res.status(400).json({
    message: "no files to upload",
})
const  imageUploadPromises = files.map(async(file)=>{
    const fileBuffer = bufferGenerate(file)

    const result = await cloudniary.v2.uploader.upload(fileBuffer.content)
    return{
        id:result.public_id,
        url:result.secure_url,
    };
})  ;
 const uploadedImage = await promise.all(imageUploadPromises)
 const product =  await Product.create({
    title,
    category,
    price,
    stock,
    images:uploadedImage,
 });
 res.status(201).json({
    message:"product created",
    product,
 })
});