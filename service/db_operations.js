import models from '../models/index'

const userTbl = models.user

const createUser=async(params)=>{
    try {
        const queryRes =await userTbl.create(params)
        return queryRes.id
    } catch (error) {
        console.log("error");
        return null
    }
}

const getAllRecords = async ()=>{
    try {
        const queryRes =await userTbl.findAll({
            raw:true
        })
        console.log("queryRes",queryRes);
        return queryRes
    } catch (error) {
        console.log("error");
        return null
    }
}

export {createUser,getAllRecords}