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

//console.log('Tables in database:');
//sql.forEach(result => {
//  const tableName = result[Object.keys(result)[0]];
//  console.log(tableName);
//});

connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
