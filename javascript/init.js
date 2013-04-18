Reveal.initialize({
    // Display controls in the bottom right corner
    controls: true,

    // Display a presentation progress bar
    progress: true,

    // Push each slide change to the browser history
    history: true,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Apply a 3D roll to links on hover
    rollingLinks: true,

    // Transition style
    transition: 'default' // default/cube/page/concave/zoom/linear/fade/none
});

Reveal.addEventListener( 'buzzwordbingo', function() {
    noty('10G Buzzword Bingo!');
}, false );

Reveal.addEventListener( 'finished', function() {
    noty('100G nuf said');
}, false );

var noty = function(message) {
    message = message || '10G HAW Seminar';
    //window.webkitNotifications.requestPermission();
    var notification = window.webkitNotifications.createNotification(
        'http://tide.dev/images/haw-logo.gif',
        'Achievement unlocked',
        message
    );
    notification.show();
};
