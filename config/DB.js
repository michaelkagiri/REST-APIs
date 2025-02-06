import mongoose, { connect } from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected🤷‍♂️");
    } catch (error) {
        console.error(error);
    }
};
export {connectDB};