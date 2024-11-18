import { Schema, model, models } from "mongoose";

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true, // Ensures a unique index in the database
    required: [true, 'Email required!'],
  },
  username: {
    type: String,
    required: [true, "Username required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String, // Optional image field
    required: false, // You can add a `required: false` for clarity if it's optional
  },
});

// Create model if it does not exist
const User = models.User || model("User", UserSchema);

export default User;
