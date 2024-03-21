const express = require('express');
const app = express();
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_management"
}).promise()

app.get('/employees', (req, res) =>{
    connection.query('INSERT INTO employees SET ?', newEmployee, (error, results) => {
        if (error) throw error;
        console.log('New employee added with ID:', results.insertId);
      });
      connection.query('SELECT * FROM employees', (error, results, fields) => {
        if (error) throw error;
        console.log('Employees:', results);
      });
      
      // ปิดการเชื่อมต่อกับ MySQL Database เมื่อเสร็จสิ้นการใช้งาน
      connection.end()
    });

    app.listen('3000', () =>{
        console.log('Server is running on port 3000');
    })