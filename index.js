const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()



app.use(express.json());
app.use(cors())

const port = process.env.PORT


const Todo = []



app.get('/', (req, res) => {
   res.send(`<h1>Hello World!<h1/>`)
})

app.get('/app/v1/todo' , (req , res)=>{
  res.send(Todo)
})

app.post('/app/v1/todo' , (req , res)=>{
    const title = req.body.title
    Todo.push(
      {
        title: title,
        id: Date.now()
      }
    )
    res.send('TITLE ADD SUCCESSFULLY')

})

app.delete('/app/v1/todo:id' , (req , res)=>{
   const id = req.params.id
   const index = Todo.findIndex((Todo)=> Todo.id === Number(id) )
   if(index === -1){
    res.send('user not found')
    return
   }
   Todo.splice(index , 1)
   res.send('delete')
})

app.put('/app/v1/todo:id' , (req , res)=>{
  const title = req.body.title
  const id = req.params.id
   const index = Todo.findIndex((Todo)=> Todo.id === Number(id) )
   if(index === -1){
    res.send('user not found')
    return
   }
   Todo[index].title = title
   res.send('Edit succesfullt')
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})