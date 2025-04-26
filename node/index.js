const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Clesio')`
connection.query(sql)

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>')
})

// connection.query('SELECT * FROM people', (error, results) => {
//     if (error) throw error
//     console.log(results)
// })

app.get('/people', (req,res) => {
    connection.query('SELECT * FROM people', (error, results) => {
        if (error) throw error
        res.render('people', {data:results.rows})
        res.send(results.rows)
    })
}
)

connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
