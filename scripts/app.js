"use strict";
//Anomynous self executing structure - IFFE (Immediately invoked Function Expression)
(function(){
    
    console.log("App started...");
    
    // Named function way
    
    // function replaceFirstParagraph() {
    //     console.log("Inside replaceFirstParagraph function")
    //     var firstParagraph;
    //     firstParagraph = document.getElementById("firstParagraph");
        
    //     firstParagraph.innerHTML = "My New Paragraph Data";
    // }
    
    
    // Declare an anonymous function with named alias
    var replaceFirstParagraph = function() {
                console.log("Inside replaceFirstParagraph anonymous function")
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        
        firstParagraph.innerHTML = "My New Paragraph Data";
    };
    
    // Call the replaceFirstParagrah function
    replaceFirstParagraph();
    
 
    
})();

   // var firstParagraph;
    
    // firstParagraph = document.getElementById("firstParagraph");
    
    // firstParagraph.innerHTML = "My New Paragraph Data";