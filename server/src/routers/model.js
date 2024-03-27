const Data = ["Hello","world"];
const {sendSMS} = require('./sendsms');
function getAllData(req,res){
    return res.status(200).json(Data);
}
async function postAllData(req,res){
    try{
        const result = req.body;
        console.log(result);

        const sendmessage = await sendSMS(result);
        console.log('',sendmessage);
        
        return res.status(200).json({
            success:true,
            messsage:'contact saved successfully',
            ok:true
        });
    }catch(e){
        console.error('you got an error..',e);
    }
}

module.exports ={
    getAllData,
    postAllData
}