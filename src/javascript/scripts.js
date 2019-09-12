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

    $('#mainLinkAboutMe').click(() => {
        console.log("moving to aboutme");
        moveTo(pages.aboutme);
    });

    $('#mainLinkProj').click(() => {
        console.log("moving to projects");
        moveTo(pages.projects);
    });



    function moveTo(page) {
        current.moveOut();
        page.moveIn();
        current = page;
    }
});