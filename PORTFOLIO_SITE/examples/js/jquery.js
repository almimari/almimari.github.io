            $( function() {
                 $( ".draggable" ).draggable();
                 $(".draggable").resizable();

                $("#li_twenty").click(function(){
                    $("#twenty").toggle(100);
                });

                $(".close_button").click(function(){
                    $(this).parent().hide();
                })


                $("#li_facefilter").click(function(){
                    $("#facefilters").toggle();
                })
            });
