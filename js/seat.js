myBookings = [];

$(function () {

    $('#btnLoadSeats').on('click', function () {
      console.log("loading seats");

      var row = $('#demoSeat').data("row");

      console.log("Row is " + row);

      var col = $('#demoSeat').data("col");

      console.log("col is " + col);

      $('#messagePanel').html(`You booked seat number ${col} in row ${row}`)
    });
generateSeats(15,15);
    init();


});

function init() {
    $('#btnGenerateSeats').on('click', function () {
        
       generateSeats(10,10);

      });

    $('#btnLoadSeats').on('click', function () {
        console.log("loading seats");
  
        var row = $('#demoSeat').data("row");
  
        console.log("Row is " + row);
  
        var col = $('#demoSeat').data("col");
  
        console.log("col is " + col);
  
        $('#messagePanel').html(`You booked seat number ${col} in row ${row}`)
      });


      $('#seating').on('click',".seat", function () {
console.log("seating is clicked");

var row = $(this).data("row");
var col = $(this).data("col");

myBookings.push({row: row, col: col })

renderBookingDetails();

      })


}

function renderBookingDetails( ) {
console.log(myBookings);
    $('#messagePanel').empty();
    for(var i = 0; i < myBookings.length; i++) {
        var currentSeat = myBookings[i];
        $('#messagePanel').append(`<p>You booked seat number ${currentSeat.col} in row ${currentSeat.row}`)

    }

   



}

function generateSeats(numRows, numCols ) {

    $('#seating').empty();
    seatHTML = [];
    for(i=0; i < numRows; i++) {
            for(j=0; j< numCols; j++) {
                if (j==0) {
                    newSeat = `<div class='seat clear' data-row='${i}' data-col='${j}'> ${i}-${j}</div>`;
                } else {

                    newSeat = `<div class='seat' data-row='${i}' data-col='${j}'> ${i}-${j}</div>`;
                }
               
                seatHTML.push(newSeat);
            }
    }


    $('#seating').html(seatHTML.join(" "));

}