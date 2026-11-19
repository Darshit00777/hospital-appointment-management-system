import mongoose, { mongo } from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        doctor : {
            type : mongoose.Schema.ObjectId,
            ref : "User",
            required : true
        },

        patient : {
            type : mongoose.Schema.ObjectId,
            ref : "User",
            default : null
        },

        date : {
            type : String,
            required : true
        },

        time : {
            type : String,
            required : true
        },

        illness : {
            type : String,
            default : ""
        },

        status : {
            type : String,
            enum : ["booked", "cancel", "available"],
            default : "available"
        }
    }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;