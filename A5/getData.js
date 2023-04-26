/* $.getJSON('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY', function(data) {

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
 */


$.getJSON('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1', function(data) {

    data.forEach(function (d) {
        $('#date').append('<li>' + d['date']+ '</li>');
        $('#explanation').append('<li>' + d['explanation']+ '</li>');
        $('#title').append('<li>' + d['title']+ '</li>');

        var image = new Image();
        image.src = d['hdurl'];
        $('#image').append('<li>' + image + '</li>');
        document.getElementById("img-container").appendChild(image);
    });
});
