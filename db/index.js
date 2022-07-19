import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,  // 数据库端口
    database: 'db01',   // 要操作的数据库的名称
    user: 'root',   // 登录数据库的用户名
    password: 'xxx', // 登录数据库的密码
})

export default pool.promise()