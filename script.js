window.onload=function(){

  // const image1 = document.querySelector("#module");

  const el = document.querySelector("#module");
  // const startingPositionBart = document.querySelector("#bart").style.left;

  el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";

    document.querySelector("#bart > img").style.left = 1000-e.offsetX + "px";
    document.querySelector("#bart > img").style.top = 550-e.offsetY + "px";
    document.querySelector("#flyer > img").style.left = 1600-e.offsetX + "px";
    document.querySelector("#flyer > img").style.top = 850-e.offsetY + "px";
    document.querySelector("#liver > img").style.left = 1500-e.offsetX + "px";
    document.querySelector("#liver > img").style.top = 750-e.offsetY + "px";
    document.querySelector("#pizza > img").style.left = 900-e.offsetX + "px";
    document.querySelector("#pizza > img").style.top = 750-e.offsetY + "px";
  });
  // $('#bart').css('margin-left', "50"+e.offsetX+"%");

}
