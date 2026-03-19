import { Router } from 'express';
import Task from '../models/Task.js';

const router = Router()

//funcion para obtener un mensaje Inicial "Hola mundo"
router.get("/",(req, res) =>{
    // res.send("<h1>Hola Mundo!</h1>")
    res.render('index')
});
router.get("/about",(req, res) =>{
res.render('about')
});
router.get("/edit",(req, res) =>{
    res.render('edit')
});
router.post('/task/add', async (req, res) => {
    const task=Task(req.body)
    const taskSaved=await task.save()
    console.log(taskSaved)
    res.send('saved')

});
//Utilizo export default router por que
//Utiliza esa funcion en otros archivos
export default router;
