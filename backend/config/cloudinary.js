import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDANERY_NAME,
        api_key:process.env.CLOUDANERY_API_KEY,
        api_secret:process.env.CLOUDANERY_SECREAT_KEY
    })
}

export default connectCloudinary; 