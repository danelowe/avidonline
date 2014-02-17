(function() {
  (function($) {
    $.fn.emailLink = function(options) {
      var hostname, settings;
      settings = {
        domainDelimeter: " / ",
        dotDelimeter: ", ",
        textSrc: "title"
      };
      hostname = document.location.hostname.replace(/^www\./, "");
      return this.each(function() {
        var $link, addr, em;
        if (options) {
          $.extend(settings, options);
        }
        addr = void 0;
        em = void 0;
        $link = void 0;
        try {
          em = $(this).text().split(settings.domainDelimeter);
          addr = (em.length === 2 ? em[0] + "@" + em[1] : em[0] + "@" + hostname);
          addr = addr.replace(new RegExp(settings.dotDelimeter, "g"), ".");
          $link = $(document.createElement("a"));
          $link.prop("href", "mailto:" + addr);
          if ($(this).prop(settings.textSrc)) {
            $link.text($(this).prop(settings.textSrc));
          } else {
            $link.text(addr);
          }
          $link.addClass("e-mail");
          $(this).replaceWith($link);
        } catch (_error) {}
      });
    };
    return $(function() {
      return $('.e').emailLink();
    });
  })(window.jQuery || window.ender || window.Zepto);

}).call(this);
