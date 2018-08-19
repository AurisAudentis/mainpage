$( ()  => {
    const pages = {
        "head": new Mainpage("head"),
        "aboutme": new Page("aboutme", "#aboutme"),
        "projects": new Page("projects", "#projects"),
        "resume": new Page("resume"),
        "contact": new Page("contact")
    };
    let current = pages.head;

    //This handles the click event handlers.
    $('#head').on('click', () => {
        moveTo(pages.aboutme);
    });

    $('#icon').on('click', () => {
        moveTo(pages.head);
    });

    $('.linkAboutMe').click(() => {
        console.log("moving to aboutme");
        moveTo(pages.aboutme);
    });

    $('.linkProj').click(() => {
        console.log("moving to projects");
        moveTo(pages.projects);
    });

    $('.projDiv').on('click', function () {
        expand(this);
    });


    function expand(div) {
        if ($(div).hasClass("textVisible")) {
            $(div).removeClass("textVisible");
            $(div).find("p").addClass("hidden").css("display", "none");
        } else {
            $(div).addClass("textVisible");
            setTimeout(() => {
                $(div).find("p").removeClass("hidden").css("display", "inline-block");
            }, 300);
        }
    }

    function moveTo(page) {
        current.moveOut();
        page.moveIn();
        current = page;
    }
});