import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },

        email:{
            type: String,
            required: true,
            unique: true
        },

        password:{
            type: String,
            required: true
        },
        
        role:{
            type: String,
            enum : ["admin","doctor","patient"],
            required: true
        },

        specialization : {
            type: String,
            default: ""
        }
    }
);

const User = mongoose.model("User", userSchema);
export default User;