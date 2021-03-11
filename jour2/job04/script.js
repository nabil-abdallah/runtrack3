var text = document.getElementById('keylogger');


document.addEventListener("keypress",function(event){ 
	text.value+=event.key;
});