var Parent  = require('../models/parentsModel');
var User  = require('../models/userModel');
var moment  = require('moment');
var bcrypt  = require('bcrypt-nodejs');
var StudentController  = {

    createUser(req,res){
        var items = req.body;
        var parent = new Parent()
        var user  = new User();
        var role  = items.role ? items.role.toLowerCase() : undefined
        var name  = items.name;
        var surname = items.surname;
        var email = items.email;
        var password  = items.password;
        var attending_name = items.nombreacudiente;
        var attending_surname = items.apellidoacudiente;
        var attending_email = items.emailacudiente;
        var birthday = items.birthday
        var grade  = items.grade;
        var course  = items.course
        var institucion = items.institucion
        var subjects = items.subjects

        if(role==="student"){
            if(name && surname && email  && password && grade && course && attending_name && attending_surname && attending_email && birthday   && institucion && role && items.nivel){
                user.name = name;
                user.surname = surname
                user.email  = email
                user.birthday = birthday
                user.grade = grade;
                user.course = course
                user.attending_name = attending_name
                user.attending_surname = attending_surname
                user.attending_email = attending_email    
                user.institucion = institucion
                user.role = role
                user.nivel  = items.nivel
                user.created_at = moment().unix()
                user.updated_at= moment().unix()
                User.findOne({$or:[
                    {email:email}
                ]},(err,finded)=>{
                    if(err) return res.status(500).send({
                        code:500,
                        response:"Error internal server "+err
                    })

                    if(finded){
                        return res.status(403).send({
                            code:403,
                            response:"An user with email already exists"
                        })
                    }else{
                        bcrypt.hash(password,null,null,(err,hash)=>{
                            if(err) return res.status(500).send({
                                code:500,
                                response:"Error internal server "+err
                            })
        
                            user.password = hash
                            user.save( async (err,usersaved)=>{
                                if(err) return res.status(500).send({
                                    code:500,
                                    response:"Error internal server "+err
                                })
        
                                if(!usersaved) return res.status(500).send({
                                    code:500,
                                    response:"Error internal server"+err
                                })
        
                                if(usersaved){
                                    parent.name = attending_name
                                    parent.surname = attending_surname
                                    parent.email  = attending_email
                                    parent.son = usersaved._id
                                await    Parent.findOne({$or:[
                                    {email:attending_email}
                                ]},async (error,parentfinded)=>{
                                        if(error) return res.status(500).send({
                                            code:500,
                                            response:"Error internal server"+error
                                        })

                                        if(parentfinded){
                                         await   User.findByIdAndDelete(usersaved._id)
                                         
                                            return res.status(403).send({
                                                code:403,
                                                response:"An Parent with ir email already exists"
                                            })
                                        }else{
                                        parent.save((err,parentsaved)=>{
                                            if(err) return res.status(500).send({
                                                code:500,
                                                response:"Error internal server"+err
                                            })

                                            if(parentsaved){
                                                return res.status(200).send({
                                                    code:200,
                                                    response:"User created succesfully",
                                                    user:usersaved
                                                })
                                            }
                                        })
                                        }
                                    })
                                }
        
        
                            })
                        })
                    }

                })
            }else{
                return res.status(403).send({
                    code:403,
                    response:"Error please fill all fields"
                })
            }
        }else if(role==="teacher"){
            if(name && surname && email  && password && grade && course  && birthday  && subjects && role  && items.nivel ){

             user.name = name
             user.surname = surname
             user.email = email
             user.grade = grade
             user.course = course
             user.birthday  = birthday
             user.subjects = subjects
             user.role = role
             user.nivel  = items.nivel
             user.institucion = institucion
             user.created_at = moment().unix()
             user.updated_at = moment().unix()
            User.find({$or:[
                {email:email}
            ]},(error1,finded)=>{
                if(error1) return res.status(500).send({
                    code:500,
                    response:"Error internal server "+error1
                })

                if(finded && finded.length >=1 ){
                        return res.status(403).send({
                            code:403,
                            response:"An user with email already exists"
                        })
                }else{
                    bcrypt.hash(password,null,null,(err,hash)=>{
                        if(err) return res.status(500).send({
                            code:500,
                            response:"Error internal server  " +err
                        })
        
                        user.password = hash;
                        user.save((error,usersaved)=>{
                            if(error) return res.status(500).send({
                                code:500,
                                response:"Error internal server "+error
                            })
        
                            if(!usersaved) return res.status(404).send({
                                code:404,
                                response:"Error internal server  " +error
                            })
        
        
                            if(usersaved) return res.status(200).send({
                                code:200,
                                response:"User created succesfully",
                                user:usersaved
                            })
                        })
                        
        
        
                    })
                }
            })
            }else{
                return res.status(403).send({
                    code:403,
                    response:"Error please fill all fields"
                })
            }


        }else{
            return res.status(403).send({
                code:403,
                response:"Invalid Rol"
            })
        }


    },
    deleteUser(req,res){

    },

    getUser(req,res){

    },
    getUsers(req,res){

    },
    updateUser(req,res){


    }


}



module.exports = StudentController;