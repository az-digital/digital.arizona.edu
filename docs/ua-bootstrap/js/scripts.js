$(document).ready(function(){

       // SMOOTH SCROLLING
       //$('a[href*=#]:not([href=#])').click(function() {
        //if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          //var target = $(this.hash);
      //target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      //if (target.length) {
            //$('html,body').animate({
              //scrollTop: target.offset().top
            //}, 550, 'swing');
        //return false;
      //}
    //}
  //})
      // Activate animated progress bar
      $('.bs-docs-activate-animated-progressbar').on('click', function () {
            $('.progress').find('.progress-bar-striped').toggleClass('active')
          })
			
			// Enable popovers and tooltips
			$('[data-toggle="popover"]').popover()
			$('[data-toggle="tooltip"]').tooltip()

      //Enable the accessible colors checkbox
      $("#hide-inaccessible").change(function(){
        if($("#hide-inaccessible").is(':checked')){
          $(".inaccessible").css("visibility","hidden");  // checked
        }else{
          $(".inaccessible").css("visibility","visible");  // unchecked
        }
      })
    })
