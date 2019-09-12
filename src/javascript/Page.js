class Page {
    constructor(name, selector) {
        this.name = name;
        this.selector = selector;
    }

    $selector() {
        return $(this.selector);
    }

    moveIn() {
        this.$selector().fadeIn(500);
    }

    moveOut() {
        this.$selector().fadeOut(500);
    }
}

class Mainpage extends Page {
    moveOut() {
        $("#header").fadeOut(100);
        $("#mainLinkProj").addClass("hidden").fadeOut(100);
        $("#mainLinkAboutMe").fadeOut(100);

        setTimeout(() => {
            $("#navmain").addClass("movenavUp");
            $("#BGcolor").addClass("moveBgUp");
        }, 0);
        setTimeout(() => {
            $("#icon").fadeIn(500);
        }, 500);
    }

    moveIn() {
        $("#icon").fadeOut(300);
        $("#navmain").removeClass("movenavUp");
        $("#BGcolor").removeClass("moveBgUp");
        setTimeout(() => {
            $("#linkProj").fadeIn(0);
            $("#header").fadeIn(0);
            $("#linkAboutMe").fadeIn(0);
        }, 200);
    }
}
