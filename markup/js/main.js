$(document).ready(function(){

    //toggle class
    $("body").on("click", ".js-toggle_class", function(e){
        e.preventDefault();
        var $target,
            className = $(this).attr("data-class");
        if ($(this).attr("data-is_parent") == "true") {
            $target = $(this).parents($(this).attr("data-target")).first();
        } else {
            $target = $($(this).attr("data-target"));
        }
        if ($target.hasClass(className)) {
            $target.removeClass(className);
            $(this).removeClass(className);
        } else {
            $target.addClass(className);
            $(this).addClass(className);
        }
    })
    //end

})