import jwt from 'jsonwebtoken'
const { JWT_SECRET_KEY } = process.env
import { createUser,getAllRecords } from '../service/db_operations'
import { validateRegesterReq } from '../validation/user.validation'

class loginRegisterClass {
    async register(req, res) {
        const { body } = req
        const { name, email, password } = body
        const validation = await validateRegesterReq(req.body)
        if (validation.length) {
            return res.json({
                status: "Failed!",
                error: validation
            })
        }
        const insertResult = await createUser({ name, email, password })
        const token = jwt.sign({ name, email, password }, JWT_SECRET_KEY)
        return res.json({
            userId: insertResult,
            token: token
        })
    }



    login(req, res) {
        try {
            const { token } = req.headers
            const verify = jwt.verify(token, JWT_SECRET_KEY)
            if (verify) {
                return res.json({ message: "loggin success" })
            } else {
                return res.json({ message: "login failed" })
            }
        } catch (error) {
            return res.json({ message: "Failed", "error": error })
        }

    }
    async getAllUsers(req,res){
        try {
            const data = await getAllRecords()
            console.log("data", data);
            return res.json({ message: "Success", "users": data })
        } catch (error) {
            return res.json({ message: "Failed", "error": error })
        }
    }
}




export default new loginRegisterClass()