
import { connectToDB } from "@utils/database";

export const Post = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try{
        await connectToDB();
    }catch (error){
        console.log(error)
    }
}