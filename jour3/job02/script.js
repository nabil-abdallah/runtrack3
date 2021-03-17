function shuffleTab ( array ) {
    var counter = array.length, temp, index;
    // While there are elements in the array
    while ( counter > 0 ) {
        // Pick a random index
        index = Math.floor( Math.random() * counter );

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[ counter ];
        array[ counter ] = array[ index ];
        array[ index ] = temp;
    }
    return array;
}





$(document).ready(function(){


      $("#gagne").hide();
      $("#perdu").hide();

   $("#button").click(function(){
      shuffleTab($("img")).appendTo("#melangees");
          
    });

   
   
      $("img").click(function(){
      if ($(this).parent().attr('id') == "melangees") 
      {
        $(this).appendTo("#rangees");
       
        
      }
     
      });

    
   
    
      

});





