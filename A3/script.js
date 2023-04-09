function animated(x) {

  if (x.className == "regular") {

    var body = document.getElementById("body");
    body.style.transition = "2s ease-out"
    body.style.border = "#3561bd 10px solid";

    var container = document.getElementById("container");
    container.style.backgroundColor = "#2e373f";
    container.className = "fade";

    var t2 = document.getElementById("t2");
    t2.style.transition = "2s ease-out"
    t2.style.borderRight = "140px solid #3561bd";
    t2.className = "inverted";


    var t1 = document.getElementById("t1");
    t1.style.transition = "2s ease-out"
    t1.style.borderRight = "210px solid #615d5a";


    var t3 = document.getElementById("t3");
    t3.style.transition = "2s ease-out"
    t3.style.borderBottom = "300px solid #d6dbdc";


    var t4 = document.getElementById("t4");
    t4.style.transition = "2s ease-out"
    t4.style.borderRight = "480px solid #5fe1ef";


    var t5 = document.getElementById("t5");
    t5.style.transition = "2s ease-out"
    t5.style.borderRight = "266px solid #9EA2A5";


    var t6 = document.getElementById("t6");
    t6.style.transition = "2s ease-out"
    t6.style.borderRight = "150px solid #70696B";

  } else {

    var body = document.getElementById("body");
    body.style.transition = "2s ease-out"
    body.style.border = "#CA9E42 10px solid";

    var container = document.getElementById("container");
    container.style.backgroundColor = "#D1C8C0";

    var t2 = document.getElementById("t2");
    t2.style.transition = "2s ease-out"
    t2.style.borderRight = "140px solid #CA9E42";
    t2.className = "regular";


    var t1 = document.getElementById("t1");
    t1.style.transition = "2s ease-out"
    t1.style.borderRight = "210px solid #9EA2A5";


    var t3 = document.getElementById("t3");
    t3.style.transition = "2s ease-out"
    t3.style.borderBottom = "300px solid #292423";


    var t4 = document.getElementById("t4");
    t4.style.transition = "2s ease-out"
    t4.style.borderRight = "480px solid #A01E10";


    var t5 = document.getElementById("t5");
    t5.style.transition = "2s ease-out"
    t5.style.borderRight = "266px solid #9EA2A5";


    var t6 = document.getElementById("t6");
    t6.style.transition = "2s ease-out"
    t6.style.borderRight = "150px solid #70696B";

  }
}