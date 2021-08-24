const request = require('request');

function getCatBreed( breed, callback) {
    request.get('https://api.thecatapi.com/v1/breeds/search?q=' + breed, null, (err, res) => {
        if (err !== null) {
            callback(err);
            return;
        }

        const data = JSON.parse(res.body);

        if (data.length == 0) {
            callback(breed + " not found");
            return;
        }
        
        callback(data[0].description);
    });
}

const breed = process.argv[2];

getCatBreed(breed, (res)=>{
    console.log(res);
});