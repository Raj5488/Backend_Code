const signup = async (req, res, next)=>{
    const {name, email, password, confirmPassword} = req.body;
    console.log(name, email, password, confirmPassword);

    try{  
    const userInfo = userModel(req.body);
    const result = await userInfo.save();

    return res.status(200).json({
        success: true,
        data: result
    })
    }catch(e){
        if(e.code ===11000){
            return res.status(400).json({
                success: false,
                message: e.message
            })
        }

        return res.status(400).json({
            success: false,
            message: e.message
        })
    }

}

module.exports = {
    signup
}