import Appointment from "../model/appointment.js";

export const createSlot = async(req, res) => {
    try{
        const result = await Appointment.create(req.body);
        res.json({
            message : "slot Created",
            data : result
        });
    }
    catch(error){
        res.json({
            message : error.message
        });
    }
}

export const getschedule = async(req,res) => {
    try{
        const result = await Appointment.find({
            doctor : req.params.doctor,
            date : req.params.date
        });

        res.json({
            message : "schedule",
            data : result
        });
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}

export const bookApp = async(req, res) => {
    try{
        const result = await Appointment.findByIdAndUpdate(req.params.id, {
            patient : req.body.patient,
            illness : req.body.illness,
            status : "booked"
        },{new: true});

        res.json({
            message : "book done",
            data : result
        });
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}

export const getSlot = async(req, res) => {
    try{
        const result = await Appointment.find({
            doctor : req.params.doctor,
            date : req.params.date,
            status : "available"
        });

        res.json({
            message : "slot available",
            data: result
        });
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}

export const pHistory = async(req, res) => {
    try{
        const result = await Appointment.find({
            patient : req.params.patient
        }).populate('doctor');

        res.json({
            message : "patient history",
            data : result
        });
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}

export const cancelApp = async(req, res) => {
    try{
        const result = await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                status: "cancel"
            },
            {new: true}
        );

        res.json({
            message: "appointment cancelled",
            data: result
        });
    }
    catch(error){
        res.json({
            message: error.message
        });
    }
};

