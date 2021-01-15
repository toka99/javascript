
var el = document.getElementById('woo');

	window.addEventListener("mousemove",(event)=>{
	el.style.top = event.clientY + "px";
	el.style.left = event.clientX + "px";
    });