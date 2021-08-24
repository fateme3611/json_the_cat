const request = require('request');

function fetchBreedDescription( breed, callback) {
    request.get('https://api.thecatapi.com/v1/breeds/search?q=' + breed, null, (err, res) => {
        if (err !== null) {
            callback(err, null);
            return;
        }

        const data = JSON.parse(res.body);

        if (data.length == 0) {
            callback(null, breed + " not found");
            return;
        }
        
        callback(null, data[0].description);
    });
}

module.exports = { fetchBreedDescription };
