$( ()  => {
let current="0";
let pages = ["head","aboutme","projects","resume", "contact"];

//This handles the click events.
$('#head').on('click', () => {
    moveTo("1");
});

$('#icon').on('click', () => {
     moveTo("0");
});

$('.linkAboutMe').click(function(){
    moveTo("1")
});

$('.linkProj').click(function(){
    moveTo("2")
});
$('.projDiv').on('click', function(){

    expand(this);
    }
);






function expand(div){
    if($(div).hasClass("textVisible")){
        $(div).removeClass("textVisible")
    } else {
    $(div).addClass("textVisible");
}}

//This delegates the tasks that have to happen.
function moveTo(page){
    if (current == "0"){
        moveUp();
        $('#' + pages[page]).fadeIn(500);
    } else if (page == "0") {
        $("#" + pages[current]).fadeOut(500);
        moveDown();
    } else {
        $("#" + pages[current]).fadeOut(500);
        $("#" + pages[page]).fadeIn(500);
    }
    current = page;
}



//this moves the bar up, so the page looks as it does on load.
function moveUp(){
    $("#header").fadeOut(100);
    $("#linkProj").fadeOut(100);
    $("#linkAboutMe").fadeOut(100);

    setTimeout(() => {
        $("#navmain").addClass("movenavUp");
        $("#BGcolor").addClass("moveBgUp");
    }, 0);
    setTimeout(() => {
        $("#icon").fadeIn(500);
    }, 500);
}

//this moves the bar down, so the content classes can pop up as needed.
function moveDown(){
    $("#icon").fadeOut(300);
    $("#navmain").removeClass("movenavUp");
    $("#BGcolor").removeClass("moveBgUp");
    setTimeout(() => {
        $("#linkProj").fadeIn(0);
        $("#header").fadeIn(0);
        $("#linkAboutMe").fadeIn(0 );
    }, 200);
}
});