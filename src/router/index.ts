import express,{Express,Request,Response} from 'express'

const routes = express.Router()

routes.get('/',(req:Request,res:Response) => {
    res.send('router is connected')
})

module.exports = routes