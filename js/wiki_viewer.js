
/*
    Code by SENDJASNI
*/
$(document).ready(function(){
var myDataArray = [];
    
    
    //getting data from the wiki-API using ajax
    function getData(str){
        $.ajax({
            url : 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + str,
            dataType : 'jsonp',
            type : 'POST',
            headers: {"X-Test-Header": "test-value"},

            //
            success : function(data){
                myDataArray = data.query.search;
                var html;
    
                // displaying a messeage in the case we get nothing from our request
                if(myDataArray.length == 0){
                    html =  '<div class= "well"><h3>Nothing found !!!</h3></div>';
                    $('#display').append(html);
                }else{
                for(var val in myDataArray){
                     var link = "https://en.wikipedia.org/wiki/"+myDataArray[val].title;
                html = '<a href='+link+' target="_blank"><div class= "well"><h2>'+ myDataArray[val].title +'</h2><br><p>'+myDataArray[val].snippet+'</p></div></a>';

                // display all elements
                $('#display').append(html);

                }
                }
                
            }
            
        });
    }
        
    
    
    //using a keypress as event handler
    $('#target').keypress(function(event){

        if(event.which == 13){
            $('#display').empty();
           var text = $(this).val();
            $('#target').addClass('to-the-top');
            //$('#random-button').detach();
            
            $('body').css('background-image', 'none');        
            $('body').css('background-color','#FF4136')
            getData(text);
        }
       
                    
    });
    
    
    // get a random wiki page 
  $("#random-button").on("click", function(event){
    event.preventDefault();
    window.location ="https://en.wikipedia.org/wiki/Special:Random";
  });
 
   
});