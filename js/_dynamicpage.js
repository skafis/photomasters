$(function() {

    var newHash      = "",
        $mainContent = $("#pricing"),
        $pageWrap    = $("#pricing-page"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $(".button-group").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#plan")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #plan", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $(".button-group  a").removeClass("current");
                        $(".button-group  a[href="+newHash+"]").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});