$(document).ready(function() {
    // ////////////////////////////////////////////////////////// //
    //                              title                              //
    // ////////////////////////////////////////////////////////// //
    $("h1").lettering();
    // ////////////////////////////////////////////////////////// //
    //                       img selector                        //
    // ////////////////////////////////////////////////////////// //
    var $item = $('div.item'), //Cache your DOM selector
        selected="car",
        display = $("#display"),
        car = $("#car"),
        carImg = "url(img/mikeJay.png)",
        white = $("#white"),
        whiteImg = "url(img/chase.png)",
        boy = $("#boy"),
        boyImg = "url(img/taylor.png)",
        monkey = $("#monkey"),
        monkeyImg = "url(img/gizmo.png)",
        girl = $("#girl"),
        girlImg = "url(img/star.png)",
        child = $("#child"),
        childImg = "url(img/jaxon.png)";
        car.click(function(){
            if(selected !="car"){
                display.fadeOut("fast",function(){
                    display.css('background-image', carImg);
                    display.fadeIn();
                });
                selected = "car";
                $item.removeClass(" selected ");
                $("#first").addClass("selected");
            }
        });
        white.click(function(){
            if(selected !="white"){
                display.fadeOut("fast",function(){
                    display.css('background-image', whiteImg);
                    display.fadeIn();
                });
                selected = "white";
                $item.removeClass(" selected ");
                $("#second").addClass("selected");
            }
        });
        boy.click(function(){
            if(selected !="boy"){
                display.fadeOut("fast",function(){
                    display.css('background-image', boyImg);
                    display.fadeIn();
                });
                selected = "boy";
                $item.removeClass(" selected ");
                $("#third").addClass("selected");
            }
        });
        monkey.click(function(){
            if(selected !="monkey"){
                display.fadeOut("fast",function(){
                    display.css('background-image', monkeyImg);
                    display.fadeIn();
                });
                selected = "monkey";
                $item.removeClass(" selected ");
                $("#fourth").addClass("selected");
            }
        });
        girl.click(function(){
            if(selected !="girl"){
                display.fadeOut("fast",function(){
                    display.css('background-image', girlImg);
                    display.fadeIn();
                });
                selected = "girl";
                $item.removeClass(" selected ");
                $("#fifth").addClass("selected");
            }
        });
        child.click(function(){
            if(selected !="child"){
                display.fadeOut("fast",function(){
                    display.css('background-image', childImg);
                    display.fadeIn();
                });
                selected = "child";
                $item.removeClass(" selected ");
                $("#sixth").addClass("selected");
            }
        });




    // ////////////////////////////////////////////////////////// //
    //                          carousel                           //
    // ////////////////////////////////////////////////////////// //
    var visible = 4, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1; //End index (NOTE:: Requires visible to be a factor of $item.length... You can improve this by rounding...)

    $('div#arrowR').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=300px'});
        }
    });

    $('div#arrowL').click(function(){
        if(index > 0){
          index--;
          $item.animate({'left':'+=300px'});
        }
    });

});
