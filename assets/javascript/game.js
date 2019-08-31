
window.onload = function () {
    $("#gettar").on("click", targrange);

};
var targmin = 19;
var targmax = 120;
// var target =  targrange (targmin,targmax);
var gemmin = 1;
var gemmax = 12;

var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

// Function to create random target number between 19 & 120

function targrange(min, max) {
    var target = Math.floor(Math.random() * (targmax - targmin + 1) + targmin);
    $('#target').html('<h2>' + target + '<h2>');
}

//Function to create random guess numbers between 1 & 12
var gemOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gemSel = [];
for (i = 1; i < 5; i++) {
    var seed = Math.floor(Math.random() * gemOpts.length + 1);
    gemSel.push(seed);
    gemOpts = jQuery.grep(gemOpts, function (n) {
        return (n !== seed);
    });

    console.log(seed);
    console.log(gemSel);
    console.log(gemOpts);
}

// var seed = Math.floor(Math.random() * 13);
// gemSel.push(seed);

// $(gemOpts).each(function (index, value) {
//     if (value = seed) {
//         gemOpts = jQuery.grep(gemOpts, function(value) {
//             return value != seed;
//         });
//     }
//     console.log(gemOpts);
//     console.log(gemSel);
// });

// function getSeeds(){
//     var gemSel = [];
//     var seed1 = Math.floor(Math.random() * 13);
//     gemSel = gemSel.push(seed1);  
//     var seed2 = Math.floor(Math.random() * 12);
//     gemSel = gemSel.push(seed2);
//     var seed3 = Math.floor(Math.random() * 11);
//     gemSel = gemSel.push(seed3);
//     var seed4 = Math.floor(Math.random() * 10);
//     gemSel = gemSel.push(seed4);


//     console.log(gemSel);


// }



//     arr = jQuery.grep(arr, function (n, i) {
    //     return (n !== gem1);
    // });
    // console.log(gem1);
    // console.log(gem2);

    // arr = jQuery.grep(arr, function (a) {
    //     return a !== 9;
    // });

    // $("span").text(arr.join(", "));


