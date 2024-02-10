const share_circle = document.querySelector(".share_circle");
const shareImg = document.getElementById("share");
const active_box = document.querySelector(".active_box");

console.log(share_circle);
console.log(shareImg);
console.log(active_box);


share_circle.addEventListener("click", () => {
  displayStyle();
});

function displayStyle(){
  share_circle.style.backgroundColor = "hsl(217, 19%, 35%)";
  share_circle.style.filter = "opacity(0.7)";
  shareImg.style.filter = "brightness(100)";
  active_box.style.display = "flex";
}