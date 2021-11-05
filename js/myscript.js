$(document).ready(function(){

        var windowsize = $(window).width();

        $(window).resize(function() {
            var windowsize = $(window).width();
        });

        if(windowsize < 863){
            $("nav").hide();
        }

        if(windowsize < 1248){
            $("img.summary-pic").hide();
        }

        if(windowsize >= 863){
            $("nav").show();
        }
    }
);