import mongoose from "mongoose"


let isConnected = false // allow us to track the connection status
 

export const connectToDB = async  () =>  {
    mongoose.set('strictQuery', true ); //to avoid errors in the console
      

    if (isConnected){ 
        console.log(" mongoDb has been connected while in the connected ")
        return;
    }

    try  {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;

        console.log("MongoDb connected")

    }catch(error) {

        console.log(error); 

    }

}