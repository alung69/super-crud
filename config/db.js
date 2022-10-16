import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pabw'
});

db.connect((err) => {
    if (err) throw err;
    console.log("database connected 😃 ");
    // const sql = 'SELECT * FROM mahasiswa';
    // db.query(sql, (err, result) => {
    //     const users = JSON.parse(JSON.stringify(result))
    //     console.log(users);
    //     app.get('/', (req, res) => {
    //         res.render("index", {title: "Mahasiswa", usersData: users})
    //     })
    //     app.get('/tambah-data', (req, res) => {
    //         res.render("tambah-data", {})
    //     })
    // })
});

export default db