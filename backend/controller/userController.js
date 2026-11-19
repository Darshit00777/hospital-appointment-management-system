import User from "../model/user.js";

export const create = async(req, res) => {
    try{
        const result = await User.create(req.body);
        res.json({
            message : "Register Successfully",
            data : result
        });
    }
    catch(error){
        res.json({
            message: error.message
        });
    }
}

export const login = async(req,res) => {
    try{
        const {email, password} = req.body;

        const result = await User.findOne({email, password});

        if(!result){
            return res.json({
                message : "Invaliad Email Or Password"
            });
        }

        res.json({
            message : "login successfully",
            data : result
        });
    }
    catch(error){
        res.json({
            message: error.message
        });
    }
}

export const getdoctors = async(req, res) => {
    try{
        const result  = await User.find({role : "doctor"});
        res.json({
            data : result
        })
    }
    catch(error){
        res.json({
            message: error.message
        });
    }
}

export const searchDoctor = async(req,res) => {
    try{
        const result = await User.find({
            name : req.params.name,
            role : "doctor"
        });

        res.json({
            massage : "doctor found",
            data : result
        });
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}