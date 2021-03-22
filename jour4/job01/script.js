$(document).ready(function(){

	$("#button").click(function(){
		$.ajax({
			url:'expression.txt',
			datatype:'text'
		})
		.done(function(data){
			var text = `<p>${data}</p>`
			$('#addtext').append(text);
		});
	});
});