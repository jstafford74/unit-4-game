
window.onload = function () {
    $("#gettar").on("click", targrange);

};
//Global Variables
var targmin = 19;
var targmax = 120;
var gemmin = 1;
var gemmax = 12;
var counter = 0;
var wins = 0;
var losses = 0;
var games = 0;
var gemOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];              //Array of possibel numbers
var gemSel = [];                                                    //Array of randomly selected numbers assigned to gems
var target = Math.floor(Math.random() * (targmax - targmin + 1) + targmin); 


// Function to create random target number between 19 & 120
function targrange(min, max) {
    $('.target').html('<span>  ' + target + '  <span>');
}

//Recursive function to create random guess numbers between 1 & 12
for (i = 0; i < 4; i++) {
    var seed = Math.floor(Math.random() * gemOpts.length + 1);
                                                                    //seed variable randomly selected as length of remaining array changes
    gemSel.push(seed);                                              //seeds are pushed to gemSel array
    gemOpts = jQuery.grep(gemOpts, function (n) {                   //gemOpts array is adjusted for each removal of the seed
        return (n !== seed);
    });    
    var gemImage = $('#gem' + parseInt(i + 1));
    gemImage.addClass("gemImage");  
    gemImage.attr("data-gemValue", gemSel[i]);
    $("#gem" + parseInt(i + 1)).append(gemImage);    

    var gem1 = gemSel[0];
    var gem2 = gemSel[1];
    var gem3 = gemSel[2];
    var gem4 = gemSel[3];
}
    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);

    //Assign gem values to specific buttons
    $(".gemImage").on("click", function() {
        var gemValue = ($(this).attr("data-gemValue"));   // Determining the crystal's value requires us to extract the value from the data attribute.
        gemValue = parseInt(gemValue);                    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        counter += gemValue;  
        $(".score").html('<span>  ' + counter + '  <span>');                                // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
                                                                  // All of the same game win-lose logic applies. So the rest remains unchanged.
      if (counter === target) {
      
      counter = 0;
      $('.target').html('<span> 0 <span>');
      $('.score').html('<span> 0 <span>');
      $('.wins').html(++wins);
      $('.games').html(++games);
    }

    else if (counter >= target) {
      
      counter = 0;
      $('.target').html('<span> 0 <span>');
      $('.score').html('<span> 0 <span>');
      $('.losses').html(++losses);
      $('.games').html(++games);
    }

  });