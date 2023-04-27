$.getJSON('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1', function(data) {

    data.forEach(function (d) {
        $('#date').append(d['date']);
        $('#explanation').append(d['explanation']);
        $('#title').append(d['title']);

        var image = new Image();
        image.src = d['hdurl'];
/*         $('#image').append('<li>' + image + '</li>'); */
        document.getElementById("img-container").appendChild(image);
    });
});