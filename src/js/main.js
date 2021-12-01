//All your JS code goes here
// $(".toggle").on("click", function() {
//     $(".toggle").parent().toggleClass('active');
// });

$(function() {
    $(".toggle").on("click", function() {
        $(".menu").toggleClass('active');
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});