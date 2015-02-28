$(document).ready(function() {
    $('.delete').on("click", function() {
        console.log("click")
        $(this).prev().val('').focus();
        $(this).hide();
    });

    $('input, textarea').on("change keydown paste input", function() {
        if ($(this).val() == "") {
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
    });
});
