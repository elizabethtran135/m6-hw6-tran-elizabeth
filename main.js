//part i

var listItems = document.querySelectorAll('.menu ul li');

function logThis() {
  for(i=0; i < listItems.length; i++) {
    listItems[i].classList.toggle('selectedcolor');
    //failed attempt at placing the start over button part v
    listItems[i].classList.remove('vredo');
  }
}

//function logThis() {
  //for(i=0; i < listItems.length; i++) {
    //listItems[i].classList.remove('v-redo');
  //}
//}

for(i=0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', logThis);
}

//part ii, iii, iv
document.getElementById("one").addEventListener("click",
  function() {
    var newPara = document.createElement("p");
    newPara.innerHTML = "Oooh - so close, but no cigar";
    document.getElementById("one").appendChild(newPara);
  }, false
);

document.getElementById("two").addEventListener("click",
  function() {
    var newPara = document.createElement("p");
    newPara.innerHTML = "DING DING DING - We have a winner";
    document.getElementById("two").appendChild(newPara);
  }, false
);
document.getElementById("three").addEventListener("click",
  function() {
    var newPara = document.createElement("p");
    newPara.innerHTML = "Oops, butter luck next time";
    document.getElementById("three").appendChild(newPara);
  }, false
);
