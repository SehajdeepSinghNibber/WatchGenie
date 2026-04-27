import User from "../models/user.model.js";
import bycriptjs from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup= async (req,res)=>{
    try {
        // await res.send("Sign Up Route");
        const {email,password,username} = req.body;

        if(!email || !password || !username){
            return res.status(400).json({
                success:false,
                message:"All Field to be filled"
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success:false,
                message:"Invalid Email"
            })
        }

        if(password.length < 6){
            return res.status(400).json({
                success:false,
                message:"Password must be atleast 6 characters"
            })
        }

        const existingUserByEmail = await User.findOne({email:email})

        if(existingUserByEmail){
            return res.status(400).json({
                success:false,
                message:"Email already exists"
            })
        }

        const existingUserName = await User.findOne({username:username})

        if(existingUserName){
            return res.status(400).json({
                success:false,
                message:"username already exists"
            })
        }

        const salt =  await bycriptjs.genSalt(10)
        const hashedPassword = await bycriptjs.hash(password,salt)

        const ProfilePics = ["/avatar1.png","/avatar2.png","/avatar3.png"]

        const image = ProfilePics[Math.floor(Math.random()*ProfilePics.length)]

        // const newUser = new User({
        //     email: email,
        //     password: hashedPassword,
        //     username: username,
        //     image: image
        // })

        //since these fields were same they can be written as 

        const newUser = new User({
            email,
            password:hashedPassword,
            username,
            image
        });

        generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();

        return res.status(201).json({            success:true,
        message:"User Created!!",
        user:{
           ...newUser._doc,
            password:""
        }
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
};

export const logout= async (req,res)=>{
    await res.send("Logout Route");
};

export const login= async (req,res)=>{
    try {
        res.clearCookie("jwt-token");
        res.status(200).json({
            success:true,
            message:"Logout"
        })
    }
    catch (error) {
        console.log("Error in logout Controller", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
};