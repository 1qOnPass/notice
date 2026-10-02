(function ($) {
  "use strict";

  $(function () {
    $("body").addClass("page-ready");

    if ("serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)) {
      let refreshing = false;

      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });

      navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" })
        .then(function (registration) { return registration.update(); })
        .catch(function () {
          // 캐시가 제한되어도 안내문 열람에는 영향이 없습니다.
        });
    }
  });
})(jQuery);
