import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "Email and password required" });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
           const token  = createToken(user._id);
           res.json({ success: true, token});
        }
        else{
            return res.json({success: false , message :"Invalid credentials"});
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message:error.message });
    }
}


const updateUser = async (req, res) => {
    try {
        const userId = req.userId; // Set by middleware
        const { name, email, password } = req.body;

        const updates = {};
        if (name) updates.name = name;
        if (email) updates.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updates.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true });

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};



const registerUser = async (req, res) => {
    try{
        const {name ,email ,password} = req.body;
        const exits  = await userModel.findOne({email});
        if(exits)
        {
            return res.json({ success: false, message: "User already exists" });
        }


        if(!validator.isEmail(email))
        {
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if(password.length<8)
        {
            return res.json({success:false , message:"Please enter a strong password"})
        }


        const salt  = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name ,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    }
    catch(error)
    {
        console.log(error)
        res.json({success:false , message:error.message})
    }

}

export { loginUser, registerUser, updateUser };
