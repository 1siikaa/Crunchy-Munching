const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = "HaHa"
const bcrypt = require('bcryptjs')

const createUser = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10)
    let securePass = await bcrypt.hash(req.body.password, salt);
    let unique= await User.find({email:req.body.email})
    if(unique.length!==0){
         return res.json({message:"email already exist."})
    }

        await User.create({
            name: req.body.name,
            password: securePass,
            email: req.body.email,
            location: req.body.location
        }).then(user => {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true
            return res.json({ "success":true, authToken })
        })
            .catch(err => {
                console.log(err);
                return res.json({ error: "Please enter a unique value." })
            })
    }
            
    catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
}


const userLogin = async(req,res)=>{
    try{
        const { email, password } = req.body;
        
            let user = await User.findOne({ email });  
            if (!user) {
                return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
            }
    
            const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
            if (!pwdCompare) {
                return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            res.json({ "success":true, authToken })
    
    
        } catch (error) {
            console.error(error.message)
            res.send("Server Error")
        }
    }
    
    



module.exports.createUser=createUser
module.exports.userLogin=userLogin







