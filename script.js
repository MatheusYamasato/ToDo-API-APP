const express = require('express')
const app = express()
 
app.get('/user', (req, res) => {
    res.send('Rota ativida com GET e recurso user: valores de user devem ser retornado')
})
 
app.listen(3000, () => { 
    console.log(`API está ativa no http://localhost:3000`)
}); 