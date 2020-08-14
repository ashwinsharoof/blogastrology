const express = require("express");
const app = express();
const router = express.Router();
const inforouter = require("./schema");
const user = require("./loginschema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const home = require('./homeschema');
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }))

router.post("/",async(req,res) => {
    const data = await new inforouter({
        email: req.body.email,
        contact: req.body.contact,
        details: req.body.details

    });
    const person =  await data.save();
    res.json(person)
})

router.get("/",async (req,res) => {
    var finddata = await inforouter.find();
    res.json(finddata)
})
router.put("/update", async(req,res) => {
    var update = await inforouter.update({_id:req.body._id},{$set:{
        Email: req.body.Email,
        Subject: req.body.Subject
    }});
    res.json(update);
})
router.delete('/:id', async (req, res) => {
    const message = await  inforouter.findByIdAndRemove(req.params.id)
     .then(() => 'List deleted');
   
    res.json({ message });
   });

router.post('/reglogin', async (req,res)=>{
    var hash = await bcrypt.hash(req.body.Password,10)
    const old = await new user({
        Email: req.body.Email,
        Password: hash, 
    });
    var adminlogin = await old.save()
    res.json(adminlogin)
})

router.post('/login', async (req,res) => {
    
        var userid = await user.findOne({Email: req.body.Email});
        if(!userid) {
            return res.status(400).json("email not found");
        }
        var pass = await bcrypt.compare(req.body.Password, userid.Password)
        if(!pass){
            return res.status(400).json("wrong password");
        }
         var usertoken =  jwt.sign({Email: user.Email}, 'ragasiyam');
         res.header('auth', usertoken).json(usertoken)
    
    
})
   var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null,   file.originalname) 
    }
  })
   
  var upload = multer({ storage: storage}) 

  //var upload = multer({ dest: 'public/' })


router.post('/upload',upload.single('file'),  async (req,res) => {
    console.log(req.file)
        var dataimage = await new home({
           heading: req.body.heading,
            content: req.body.content,
            image:req.file.originalname,
            
        });
       var saveimg= await dataimage.save()
       console.log(saveimg)
        res.json(saveimg)
})
/*router.put("/upload", async(req,res) => {
    var update1 = await home.update({_id:req.body._id},{$set:{
        heading: req.body.heading,
            content: req.body.content,
            image:req.file.originalname,
    }});
    res.json(update1);
    await update1.save()
})*/
    
router.get("/upload", async(req,res)=> {
    var imgfind = await home.find();
    res.json(imgfind)
})
 router.get('/upload/:id', async(req,res) =>{
    var imgid = await home.findById(req.params.id)
    res.json(imgid)
 })
 /*router.delete('/newdel', async (req, res) => {
    res.json("delete request")
  });*/


    

module.exports= router;