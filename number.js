$(document).ready(function(){
    
    function animateCounters() {
        $('.counter').each(function () {
            var $this = $(this);
            var target = $this.data('target');

            $({ Counter: 0 }).animate({ Counter: target }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }

    // Run the counter animation when the element is in the viewport
    $(window).on('scroll', function () {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var elementOffsetTop = $('.counter').offset().top;

        if (windowScrollTop + windowHeight > elementOffsetTop) {
            animateCounters();
        }
    });

    // Alternatively, you can trigger the counter animation when the document is ready
    // $(document).ready(function () {
    //     animateCounters();
    // });




 });