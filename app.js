//Click projects scroll down to projects section
$(".list-of-projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#quiz-app").offset().top
    }, 1000);
});

$(".bio").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-me-section").offset().top
    }, 1000);
});
