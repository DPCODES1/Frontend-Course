const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=> {
      res.send("<form method='post' action='/store'><input name='name'><button>Submit</button></form>")
})

app.post('/store',(req,res)=> {
    console.log(req.body.name)
})

app.listen(3000)