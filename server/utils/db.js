import mysql from 'mysql'

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',   
    database: 'employeems',
    port: 3307
})

con.connect(function(err) {
    if (err){
    console.log("Connection error",err);
    }else{
        console.log("database connected");
    }
})

export default con;