$(document).ready(function(){


        $("#menu-image").click(function(){
        	$("#hidden-menu").toggle(500);
        });

        $(".title-tab, #about").click(function(){
            var c = 'on';
            var elements = ".title-tab, #about";

            if($(elements).hasClass(c)) {

            anime({
                targets: '.title-tab',
                width: '30vw', // -> from '28px' to '100%',
                easing: 'easeOutElastic(1, .6)',
                endDelay: 1000,
                direction: 'normal',
                delay: anime.stagger(100) // increase delay by 100ms for each elements.
                });
            $(elements).removeClass(c);

            } else {
                 anime({
                targets: '.title-tab',
                width: '10vw', // -> from '28px' to '100%',
                easing: 'easeOutElastic(1, .6)',
                endDelay: 1000,
                direction: 'reverse',
                delay: anime.stagger(100) // increase delay by 100ms for each elements.
                });
                $(elements).addClass(c);
                console.log(c);

            }

                    $(".about-page").toggle();

        });


        var color1 = "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
        var color2 = "pink";
        var color3 = "blue";
        var color4 = "red";

        // COLOR CHANGE PANEL
        $("#color1").click(function(){
            $('.title-tab').css("background", color1);
        })

        $("#color2").click(function(){
            $('.title-tab').css("background", color2);

        })

        $("#color3").click(function(){
            $('.title-tab').css("background", color3);


        })

        $("#color4").click(function(){
            $('.title-tab').css("background", color4);


        })



    });

