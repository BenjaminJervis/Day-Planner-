
setInterval(function() {
    var now = moment().format('HH:mm:ss DD-MM-YYYY') //function created to set current date and time using moment.js
    
    $("#currentDay").text(now); //displays the current date and time in the browser

    $("#text-area-9am").addClass('past'); //selector. addClass used to reference CSS 
    $("#text-area-10am").addClass('past');
    $("#text-area-11am").addClass('past'); // colours display past, present and future 
    $("#text-area-12pm").addClass('present');
    $("#text-area-13pm").addClass('future');
    $("#text-area-14pm").addClass('future');
    $("#text-area-15pm").addClass('future');
    $("#text-area-16pm").addClass('future');
    $("#text-area-17pm").addClass('future');

},1000);

$(".saveBtn").on("click", function(){ //local storage function with button to save entries

var text = $(this).siblings(".description").val()
var time = $(this).siblings(".description").attr("id")
localStorage.setItem(time,text)
console.log(text,time)
})//this gets the value 


function meetingEnteredDisplay(){ //meeting saved function 
    for (let time = 9; time < 18; time++) {
        $(`#text-area-${time}${time >= 12 ? 'pm' : 'am'}`
        ).val(localStorage.getItem(`text-area-${time}${time >= 12 ? 'pm' : 'am'}`))   
        
    }
   



}
meetingEnteredDisplay()



