function hideDisqus(){var dataHelp=document.querySelector("body").getAttribute("data-help");var oldComments=document.querySelector("#oldComments");if(dataHelp==null){if(oldComments){oldComments.style.display="none";}}}
var navLink=document.querySelector("#navMobile");var navigationSlider=document.querySelector("#navigationSlider");var mobileNavItems=document.querySelector("#mobileNavItems");function mobileStuff(){navLink.addEventListener("click",slideMenu,false);navigationSlider.addEventListener("click",slideMenuBack,false);navigationSlider.addEventListener("touchmove",makeItStop,{passive:true});}
function makeItStop(e){}
function slideMenu(e){navigationSlider.classList.remove("hidden");navigationSlider.classList.add("slideRight");document.body.classList.add("scrollOff");document.body.addEventListener("touchmove",stopTouchMove,{passive:true});}
function slideMenuBack(e){navigationSlider.classList.remove("slideRight");document.body.classList.remove("scrollOff");document.body.removeEventListener("touchmove",stopTouchMove,{passive:true});}
function stopTouchMove(e){}
var miniHeader=document.querySelector("#miniHeader");mobileStuff();