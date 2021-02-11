const express = require('express');
const app = express();
const data = require('./data');
const fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/get_data/:id', (req, res) => {
    console.log(data);
    let id = req.params.id;
    let oneSki = data.filter(el => {
        return el.id == id;
    })[0];
    oneSki.visited++;
    fs.writeFile(__dirname + "/data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        res.send(oneSki);
    })
    console.log(oneSki);

})

app.listen(3000, () => {
    console.log("Server running on 3000...");
})