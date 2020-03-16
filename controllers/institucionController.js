var moment  = require('moment');
var Institucion = require('../models/institucionModel')



var InstitucionController  = {
    createInstitucion(req,res){
        var items  = req.body;
        var name  = items.name;
        var institucion = new Institucion();
        var nit  = items.nit;
        var  telefono  = items.telefono;
        var ciudad  = items.ciudad;
        var email  = items.email;
        var link  = items.link;
        var coordinador  = items.coordinador;
        var email_coordinador  = items.emailcoordinador;
        var telefono_coordinador  = items.telefonocoordinador;
        var email_institucional  = items.emailinstitucional;
        var suggestions  = items.suggestions;
        var created_at = moment().unix();
        var updated_at = moment().unix();

        if(name && nit && telefono && ciudad && email && link && coordinador && email_coordinador && telefono_coordinador && email_institucional && suggestions){
            institucion.name  = name
            institucion.nit = nit
            institucion.telefono = telefono
            institucion.ciudad =  ciudad
            institucion.email = email
            institucion.link = link
            institucion.coordinador = coordinador
            institucion.email_coordinador = email_coordinador
            institucion.telefono_coordinador = telefono_coordinador
            institucion.email_institucional = email_institucional
            institucion.suggestions = suggestions
            institucion.created_at = created_at
            institucion.updated_at = updated_at
            Institucion.findOne({$or:[
                {name},
                {nit},
                {email},
                {email_institucional},
                {email_coordinador}
            ]},(err,finded)=>{
                if(err) return res.status(500).send({
                    code:500,
                    response:"Error internal server "+err
                })

                if(finded){
                    return res.status(403).send({
                        code:403,
                        response:"Error already exists a institution with this dates."
                    })
                }else{
                    institucion.save((err,saved)=>{
                        if(err) return res.status(500).send({
                            code:500,
                            response:"Error internal server "+err
                        })

                        if(!saved) return res.status(404).send({
                            code:404,
                            response:"Error internal server "+err
                        })

                        if(saved) return res.status(200).send({
                            code:200,
                            response:"Institution created succesfully",
                            institucion:saved
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


module.exports = InstitucionController