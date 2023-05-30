const fs = require('fs');

const getItemsMen = (req, res) => {
    fs.readFile('./data/itemsData.json', 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return res.status(500).send('An error occurred while reading the file');
        }
        
        const jsonData = JSON.parse(data);
        res.send(jsonData["Men"]);
    });

}

const getItemsChildren = (req, res) => {
    fs.readFile('./data/itemsData.json', 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return res.status(500).send('An error occurred while reading the file');
        }
        
        const jsonData = JSON.parse(data);
        res.send(jsonData["Children"]);
    });

}

const getItemsWomen = (req, res) => {
    fs.readFile('./data/itemsData.json', 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return res.status(500).send('An error occurred while reading the file');
        }
        
        const jsonData = JSON.parse(data);
        res.send(jsonData["Women"]);
    });

}

module.exports = {
    getItemsMen,
    getItemsChildren,
    getItemsWomen
}