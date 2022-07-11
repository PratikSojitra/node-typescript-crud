import express,{Express,Request,Response} from 'express'

const routes = express.Router()

routes.get('/',(req:Request,res:Response) => {
    return res.render('index')
})

module.exports = routes