function animated(x) {

  var body = document.getElementById("body");
  body.style.animation = "body 30s infinite";

  var i = document.getElementById("next");
  i.style.animation = "icon 30s infinite";

  var container = document.getElementById("container");
  container.style.animation = "container 30s infinite";

  var t2 = document.getElementById("t2_2");
  t2.style.animation = "t2 30s infinite";


  var t1 = document.getElementById("t1");
  t1.style.animation = "t1 30s infinite";


  var t3 = document.getElementById("t3");
  t3.style.animation = "t3 30s infinite";


  var t4 = document.getElementById("t4");
  t4.style.animation = "t4 30s infinite";


  var t5 = document.getElementById("t5");
  t5.style.animation = "t5 30s infinite";


  var t6 = document.getElementById("t6");
  t6.style.animation = "t6 30s infinite";
}

function goodbye(x) {

  var i = document.getElementById("next");

  var title = document.getElementById("title");
  title.style.transition = "ease-out 3s";
  title.style.opacity = 0;

  var container = document.getElementById("container");
  container.style.transition = "ease-out 3s";
  container.style.opacity = 0;

}