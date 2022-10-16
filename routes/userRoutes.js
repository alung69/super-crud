import express from 'express';
import db from '../config/db.js';
import bodyParser from 'body-parser';

const router = express.Router();

router.get("/", (req, res) => {
    const sql = 'SELECT * FROM mahasiswa';
    db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result));
        res.render("index", {title: "Mahasiswa", usersData: users})
    })
})

router.get("/tambah-data", (req,res) => {
    res.render("tambah-data", {})
})

router.post("/tambah-data/1", (req,res) => {
    const fullName = req.body.fullName;
    const jurusan = req.body.jurusan;
    const kelamin = req.body.kelamin;

    const addsql = `INSERT INTO mahasiswa (id, nama, jurusan, jenis_kelamin) VALUES (NULL, '${fullName}', '${jurusan}', '${kelamin}')`;
    db.query(addsql, (err,result) => {
        if (err) throw err;
        console.log(`Data masuk`);
    })
    res.redirect('/')
})

router.get("/hapus/:id", (req, res) => {
    let id = req.params.id;
    const deletesql = `DELETE FROM mahasiswa WHERE mahasiswa.id= ?`;
    db.query(deletesql, [id], (err, result) => {
        if (err) throw err
        console.log(result.affectedRows + ` record(s) deleted`);
        console.log(`id ${id} deleted`);
    })
    res.redirect('/')
})

router.get("/edit/:id", (req, res) => {
    let id = req.params.id
    const updatesql = `SELECT * FROM mahasiswa WHERE mahasiswa.id = ?`
    db.query(updatesql, [id], (err, results) => {
        if (err) throw err

        res.render('edit-data', {
            id: results[0].id,
            nama: results[0].nama,
            jurusan: results[0].jurusan,
            jenis_kelamin: results[0].jenis_kelamin
        })
    })

})

router.post("/update/:id", (req, res) => {
    let id = req.params.id
    const fullName = req.body.fullName;
    const jurusan = req.body.jurusan;
    const kelamin = req.body.kelamin;

    const updateSql = `UPDATE mahasiswa SET nama = '${fullName}', jurusan = '${jurusan}', jenis_kelamin = '${kelamin}' WHERE mahasiswa.id = ?;`
    db.query(updateSql, [id], (err, result) => {
        if (err) throw err
    })
    res.redirect('/')
})

export default router;