var Grade  = require('../models/gradeModel');
var moment  = require('moment');

var GradeController  = {
    createGrade(req,res){
        var items  = req.body;
        var grade  = new Grade();
        var name  = items.name;
        if(name){
            grade.name  = name
            grade.created_at = moment().unix();
            grade.updated_at = moment().unix();
            Grade.findOne((err,gradefound)=>{
                if(err) return res.status(500).send({
                    code:500,
                    response:"Error internal server "+err
                })

                if(gradefound){
                    return res.status(403).send({
                        code:403,
                        response:"Error and grade with it name already exists"
                    })
                }else{
                    grade.save((err,gradecreated)=>{
                        if (err) return res.status(500).send({
                            code:500,
                            response:"Error internal server  "+err
                        })

                        if(!gradecreated) return res.status(403).send({
                            code:403,
                            response:"Error internal server  "+err
                        })

                        if(gradecreated) return res.status(200).send({
                            code:200,
                            response:"Grade created succesfully",
                            grade:gradecreated
                            
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


    }
}

module.exports = GradeController;