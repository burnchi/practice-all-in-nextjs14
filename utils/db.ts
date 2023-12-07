import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/all-in-one");
    } catch (error) {
        throw new Error("Connection failed!");
    }
};

export default connect;