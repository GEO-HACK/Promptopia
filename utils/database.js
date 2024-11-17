import mongoose from "mongoose"


let isConnected = false // allow us to track the connection status
 

export const connectToDB = async  () =>  {
    mongoose.set('strictQuery', true ); //to avoid errors in the console
      

    if (isConnected){ 
        console.log(" mongoDb is connected ")
        return;
    }

    try  {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology:true, 
        })

        isConnected = true;

        console.log("MongoDb connected")

    }catch(error) {

        console.log(error); 

    }

}