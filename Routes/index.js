import express from 'express';
import loginRegisterClass from '../controller/login.controller'
const router = express.Router()
const {BASE_URL} = process.env


router.post(`/${BASE_URL}/register`,loginRegisterClass.register)
router.post(`/${BASE_URL}/login`,loginRegisterClass.login)

router.get(`/${BASE_URL}/getAllUsers`, loginRegisterClass.getAllUsers)
module.exports = router