var awweb = (function(w, d){
    var getCurrentScrollPos = function(){ return window.scrollY; };
    var offsetHeight = function(){return document.querySelector('.aw-hero-banner').offsetHeight;};
    var scrollPosition = function(){return offsetHeight()};
    var feature = document.querySelector('.aw-why-section');
    var fadeStart = 0; // 0 scroll or less will equiv to 0 opacity
    var overlay = document.querySelector('.overlay');
    var opacity = 0;


    function handlePageScroll() {
        var currentScrollPos = getCurrentScrollPos();
        console.log("currentScrollPos :" + currentScrollPos);
        console.log("scrollPosition :" + scrollPosition);
        if( currentScrollPos<=fadeStart ){
            opacity = 0;
        }else if( currentScrollPos<= offsetHeight() ){
            opacity=1*currentScrollPos/offsetHeight();
        }
        overlay.style.opacity= opacity;
        console.log("opacity: " +opacity);
    };



    feature.style.marginTop = offsetHeight() + 'px';
    //    Resize Function
    w.onresize=function(){
        feature.style.marginTop = offsetHeight() + 'px';
        handlePageScroll();
    };

    w.onscroll= function(){
        handlePageScroll();
    };

}(window, document));
