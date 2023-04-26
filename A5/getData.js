
$.getJSON('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY', function(data) {

    data['photos'].forEach(function (d) {
        $('#cameraID').append('<li>' + d['id']+ '</li>');

        var camera = d['camera'];
        $('#name').append('<li>' + camera['name']+ '</li>');

        var image = new Image();
        image.src = d['img_src'];
        $('#image').append('<li>' + image + '</li>');
        document.getElementById("img-container").appendChild(image);
    });
});








/* 
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<li>' + d['name']+ '</li>');
    });
});


({
    "message": "success",
    "number": 10,
    "people":
        [{
            "craft": "ISS",
            "name": "Sergey Prokopyev"
        },
        {
            "craft": "ISS",
            "name": "Dmitry Petelin"
        },
        {
            "craft": "ISS",
            "name": "Frank Rubio"
        },
        {
            "craft": "Shenzhou 15",
            "name": "Fei Junlong"
        },
        {
            "craft": "Shenzhou 15",
            "name": "Deng Qingming"
        },
        {
            "craft": "Shenzhou 15",
            "name": "Zhang Lu"
        },
        {
            "craft": "ISS",
            "name": "Stephen Bowen"
        },
        {
            "craft": "ISS",
            "name": "Warren Hoburg"
        },
        {
            "craft": "ISS",
            "name": "Sultan Alneyadi"
        },
        {
            "craft": "ISS",
            "name": "Andrey Fedyaev"
        }]
})
 */