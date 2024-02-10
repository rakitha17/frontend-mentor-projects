// DECLARE THE VARIABLES
const name_area = document.querySelectorAll(".message_box--name_area");
const detail_area = document.getElementsByClassName("message_box--detail_area");
const dot = document.querySelectorAll("#dot");
const btn = document.getElementById("notification_btn");
const mark_all = document.getElementById("notification_text");

btn.value = name_area.length;

// OPERATION
for(let i=0; i<name_area.length; i++){
  var a;
  name_area[i].addEventListener("click", () => {
    notify_num();
    if(a == 1){
      display(i);
      closeDisplay();
      display(i);
      return a = 0;
    }
    else{
      closeDisplay();
      display(i);
      return a = 1;
    }
  }, {once: true})
}


//STYLES
function display(i){
  let x = detail_area[i].innerHTML;
  if(x == ""){
    detail_area[i].style.display = "none";
  }
  else{
    detail_area[i].style.display = "block";
  }
  name_area[i].style.backgroundColor = "#fff";
  dot[i].style.display = "none";
}

function closeDisplay(){
  for(let i=0; i<name_area.length; i++){
    detail_area[i].style.display = "none";
  }
}


//NOTIFY NUMBER
function notify_num(){
  let x = btn.value;    
  const new_btn = document.getElementById("notification_btn");
  if(x > 0){
    let y = x - 1;
    new_btn.value = y;
  }else{
    new_btn.value = 0;
  }
}


//MARK ALL
mark_all.addEventListener("click", () => {
  for(let i=0; i<name_area.length; i++){
    let x = detail_area[i].innerHTML;
  if(x == ""){
    detail_area[i].style.display = "none";
  }
  else{
    detail_area[i].style.display = "block";
  }
  name_area[i].style.backgroundColor = "#fff";
  dot[i].style.display = "none";
  };
  
  function new_notify_num(){
    let x = btn.value;
    let y = x - x;
    const new_next_btn = document.getElementById("notification_btn");
    new_next_btn.value = y;
  }
  new_notify_num();
});


//ERROR
/* function notify_num(i){
  name_area[i].classList.remove("message_box--name_area");
  const new_msg = document.querySelectorAll(".message_box--name_area");
  btn.value = new_msg.length;
} */



