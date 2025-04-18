import mongoose  from "mongoose";

const connectdb = async () => {

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected");
    });
    await mongoose.connect(`${process.env.MONGO_URI}/MedEase`);

}

export default connectdb;


