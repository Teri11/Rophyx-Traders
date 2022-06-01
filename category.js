(function() {

    let closeLinkClass = '.close-nav';
    let openLinkClass = '.open-nav';
    let asideMenuClass = '.aside-menu';

    function keyPress(e) {
        let closeLink = document.querySelector(closeLinkClass)
        let item = null;
        console.log(e.key)
        let bNavOpened = location.hash.indexOf('#open-left-nav') >= 0 || location.hash.indexOf('#open-right-nav') >= 0;

        console.log(location.hash);
        if (e.key.toLowerCase() === 'n') {
            if (closeLink && location.hash.indexOf('open') >= 0) {
                closeLink.click();
                console.log('nav closed!');
            } else if (item = document.querySelector(openLinkClass)) {
                item.click();
                console.log('nav opened!!')
            }
        }

        if (!bNavOpened) {
            return false;
        }

        if (e.key === "Escape" && bNavOpened || e.key.toLowerCase() === "c" && bNavOpened || e.key.toLowerCase() === 'q') {
            // write your logic here.
            closeLink.click();
            console.log('nav closed!')
        }
    }

    if (document.querySelector(asideMenuClass) === null) {
        return false;
    }
    document.onkeyup = function(e) {
        e = e || window.event;
        keyPress(e);
    };
    console.log('loaded!')


})();

document.addEventListener("DOMContentLoaded", function() {
    let el = document.body;
    if (el.classList.contains("preload")) {
        el.classList.remove('preload');
    }
});