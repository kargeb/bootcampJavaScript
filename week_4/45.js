(function($){
    $(document).ready(function(){

      var button_apply = $("#button_apply");

      button_apply.on("click", function () {
        $(".section").toc();
    })
  });
})(jQuery);