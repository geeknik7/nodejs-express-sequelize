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
//async await function
// const getAllRecords = async ()=>{
//     try {
//         const queryRes =await userTbl.findAll({
//             raw:true
//         })
//         console.log("queryRes",queryRes);
//         return queryRes
//     } catch (error) {
//         console.log("error");
//         return null
//     }
// }

//promise function
const getAllRecords = ()=>{
    return new Promise(function (resolve, reject){
        userTbl.findAll({
            raw:true        
    }).then(queryRes=>{
        console.log("queryRes", queryRes);
        resolve(queryRes)
    }).catch(err=>{
        console.log("err", err);
        reject(err)
    })
})
}
export {createUser,getAllRecords}