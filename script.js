(function ($) {
  "use strict";

  $(function () {
    $("body").addClass("page-ready");

    if ("serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)) {
      navigator.serviceWorker.register("./sw.js").catch(function () {
        // 캐시가 제한되어도 안내문 열람에는 영향이 없습니다.
      });
    }
  });
})(jQuery);
