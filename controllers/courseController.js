var Course = require('../models/coursesModel');
var moment = require('moment');

var CourseController ={
    createCourse(req,res){
        var items = req.body
        var name  = items.name
        var course  = new Course();
        if(name){
            course.name = name
            course.created_at = moment().unix();
            course.updated_at = moment().unix();
            Course.findOne({$or:[
                {name}
            ]},(err,coursefound)=>{
                if(err) return res.status(500).send({
                    code:500,
                    response:"Error internal server " + err
                })

                if(coursefound){
                    return res.status(403).send({
                        code:403,
                        response:"Error already exists a course with this name"
                    })
                }else{
                    course.save((error,coursecreated)=>{
                        if(error) return res.status(500).send({
                            code:500,
                            response:"Error internal server  " + error

                        }) 

                        if(!coursecreated) return res.status(404).send({
                            code:404,
                            response:"Error internal server  404"+error
                        })


                        if(coursecreated) return res.status(200).send({
                            code:200,
                            response:"Course created succesfully",
                            course:coursecreated
                        })
                    })
                }
            })
        }else{
            return res.status(403).send({
                code:403,
                response:"Please fill all fields"
            })
        }
    },
    updateCourse(){

    },
    getCourse(){

    },
    getCourses(){
         
    }

}


module.exports = CourseController;