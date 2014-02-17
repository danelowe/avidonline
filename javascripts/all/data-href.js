(function() {
  (function($) {
    return $(function() {
      return $('[data-href]').click(function(e) {
        if (e.ctrlKey || e.metaKey) {
          return window.open($(this).data('href'));
        } else if (typeof Turbolinks !== "undefined" && Turbolinks !== null) {
          return Turbolinks.visit($(this).data('href'));
        } else {
          return window.location = $(this).data('href');
        }
      });
    });
  })(window.jQuery || window.ender || window.Zepto);

}).call(this);
