/*
** Create by 工土干王 on 2018/6/1
*/

$ ( function () {
    //给Main-nav设置JS
    $ ( ".Main-nav ul" ).find ( "li" ).click ( function () {
        $ ( this ).css ( "backgroundColor", "#00c3ff" ).siblings ( "li" ).css ( "backgroundColor", "rgba(28,55,118,.3)" )
        $ ( this ).children ( "a" ).css ( "color", "black" ).parent ().siblings ( "li" ).children ( "a" ).css ( "color", "white" )
    } )

    //给Features-top设置JS
    $ ( ".Features-top img#flow1" ).animate ( {
        left : - 2000, bottom : 500
    }, 100000, "linear" )
    $ ( ".Features-top img#flow2" ).animate ( {
        left : - 3000, bottom : 500
    }, 200000, "linear" )


    $ ( ".Features-top h1" ).show ().animate ( {
        left : 0
    }, 600, function () {
        $ ( ".Features-top p" ).show ().animate ( {
            left : 0
        }, 500 )
    } )


    //给Features-second设置JS
    $ ( window ).on ( "scroll", function () {
        var scrollHeight = $ ( this ).scrollTop ()
        if ( scrollHeight >= $ ( ".Features-top" ).height () * 0.4 ) {
            $ ( ".Features-second" ).fadeIn ( 1500 )

            $ ( ".Features-second h1" ).show ().animate ( {
                left : 0
            }, 700, function () {
                $ ( ".Features-second p" ).show ().animate ( {
                    left : 0
                }, 700 )
            } )//Features-second h1
        }
    } )

    setInterval ( function () {
        $ ( ".Features-second img" ).animate ( {
            left : - 80
        }, 5000, "linear", function () {
            $ ( ".Features-second img" ).animate ( {
                left : 0
            }, 5000, "linear" )
        } )
    }, 2000 )


    //给Features-third设置JS
    $ ( window ).on ( "scroll", function () {
        var scrollHeight = $ ( this ).scrollTop ()
        if ( scrollHeight >= $ ( ".Features-top" ).height () * 1.4 ) {
            $ ( ".Features-third ul>li:eq(0)" ).fadeIn ( 200, function () {
                $ ( ".Features-third ul>li:eq(1)" ).fadeIn ( 200, function () {
                    $ ( ".Features-third ul>li:eq(2)" ).fadeIn ( 200, function () {
                        $ ( ".Features-third ul>li:eq(3)" ).fadeIn ( 200, function () {
                            $ ( ".Features-third ul>li:eq(4)" ).fadeIn ( 200, function () {
                                $ ( ".Features-third h1" ).show ().animate ( {
                                    left : 0
                                }, 700, function () {
                                    $ ( ".Features-third p" ).show ().animate ( {
                                        left : 0
                                    }, 700, function () {
                                        $ ( ".Features-third .role-link" ).show ().animate ( {
                                            left : 80
                                        }, 700 )
                                    } )//Features-third p
                                } )//Features-third h1
                            } )// Features-third ul>li:eq(4)
                        } )// Features-third ul>li:eq(3)
                    } )//Features-third ul>li:eq(2)
                } )
            } )
        }
    } )

    $ ( ".Features-third ul>li" ).on ( "click", function () {
        $ ( this ).stop ().animate ( {
            "width" : 1024
        }, 500 ).siblings ( "li" ).stop ().animate ( {
            "width" : 0
        }, 500 )

        $ ( ".third-inner span.close-Btn" ).show ( 800 )

    } )

    $ ( ".third-inner span.close-Btn" ).click ( function () {
        $ ( ".Features-third ul>li" ).stop ().animate ( {
            "width" : 204.8
        }, 500 )
        $ ( ".third-inner span.close-Btn" ).hide ()
    } )

    $('.Features-third ul>li').on('mouseenter',function () {
        $(this).css('opacity',1).siblings('li').css('opacity',.3)
    })

    $('.Features-third ul>li').on('mouseleave',function () {
        $('.Features-third ul>li').css('opacity',1)
    })

    //给Features-fourth设置JS
    $ ( window ).on ( "scroll", function () {
        var scrollHeight = $ ( this ).scrollTop ()
        if ( scrollHeight >= $ ( ".Features-top" ).height () * 2.8 ) {
            $ ( ".Features-fourth" ).fadeIn ( 1500 )
            $ ( ".Features-fourth h1" ).show ().animate ( {
                left : 280
            }, 700 )
        }
    } )

    setInterval ( function () {
        $ ( ".Features-fourth img#flow" ).animate ( {
            left : - 40, bottom : 60
        }, 8000, "linear", function () {
            $ ( ".Features-fourth img#flow" ).animate ( {
                left : 0, bottom : 0
            }, 8000, "linear" )
        } )
    }, 3000 )


    $ ( ".fivth-inner .nav1 a" ).on ( "click", function () {
        var idx = $ ( this ).index ()
        $ ( this ).css ( "backgroundColor", "#fff" ).siblings ( "a" ).css ( "backgroundColor", "#ffd100" )
        $ ( ".fivth-inner ul.con li" ).eq ( idx ).show ().siblings ( "li" ).hide ()

        $ ( ".fivth-inner .nav2 a" ).css ( "backgroundColor", "#ffd100" )

    } )

    $ ( ".fivth-inner .nav2 a" ).on ( "click", function () {
        var idx = $ ( this ).index ()
        $ ( this ).css ( "backgroundColor", "#fff" ).siblings ( "a" ).css ( "backgroundColor", "#ffd100" )
        $ ( ".fivth-inner .nav1 a" ).css ( "backgroundColor", "#ffd100" )

        $ ( ".fivth-inner ul.con li" ).eq ( idx + 6 ).show ().siblings ( "li" ).hide ()
    } )

    $('.Features-fourth .image-buttons input').on('mouseenter',function () {
        $(this).css('opacity',1).siblings('input').css('opacity',.6)
    })

    $(window).on('scroll',function () {
        var scrollHeight = $(this).scrollTop()
        if(scrollHeight >= 1500){
            $('div.side-nav').fadeIn()
        }else{
            $('div.side-nav').fadeOut()
        }
    })
} )