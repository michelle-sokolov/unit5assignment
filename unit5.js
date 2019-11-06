//display current date - I want to use ~moment().format('MMMM Do YYYY, h:mm:ss a');~ but have no idea how to 
//when user types something into the 'myInput' and hits save button 
//input for time
//save button could take the time that you blocked out and the user's input and have them together
    // data should save to local storage 
    // appear under myInput bar
//key is time and value is myInput
//how to get button to save info to local storage and append info to page
//localStorage.setItem()

//set a variable equal to user's input
//var newVal = $(myInput).val(); 

//create function that listens for user's click and stores data input to event column
//should i make an array in the middle column div thats empty and then when user submits that gets added to array??

$(document).ready(function() {



moment().format('MMMM Do YYYY, h:mm:ss a');

//create new div ?????
newDiv.text(JSON.stringify())
append


$("#btn").on("click", function(event) {
    event.preventDefault();
    var event = $("#title").val();
    $("#firstSlot").append(event);

    });    
});   
    
    //localStorage.setItem(myInput, JSON.stringify(newVal));
    //$("#firstSlot").append(localStorage);
    //}); 



//localStorage.setItem() */




/*$('#myInput').on('click', function(){
    $('input[type="text"]').each(function(){   
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);
       $("#firstSlot").append(localStorage);
    });





//figure out how to get the time block time and the user input 
//append those 2 onto page in correct area


/*


        //should I make each button & input a different id to control them individually??
// color code hr blocks to indicate whether it is in a past, present, or future hour 
//how do i compare the time i have event on to current time to make sure if that event is applicable or not
    //literally no clue!!   

    //actually draw how i want data to work
    */

    //$(window).on('load',init)
