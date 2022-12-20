
setInterval(function() {
    var now = moment().format('HH:mm:ss DD-MM-YYYY')
    
    $("#currentDay").text(now);

    $("#text-area-9am").addClass('past');
    $("#text-area-10am").addClass('past');
    $("#text-area-11am").addClass('past');
    $("#text-area-12pm").addClass('present');
    $("#text-area-13pm").addClass('future');
    $("#text-area-14pm").addClass('future');
    $("#text-area-15pm").addClass('future');
    $("#text-area-16pm").addClass('future');
    $("#text-area-17pm").addClass('future');

},1000);

$("").on("click",function(){

    localStorage.setItem("9-notes",message)
    let nineAmTextAreaValue=localStorage.getItem("9-notes")
    textBox.text(nineAmTextAreaValue)
})
// localStorage.setItem("10-notes",m10)
// localStorage.setItem("11-notes",m11)