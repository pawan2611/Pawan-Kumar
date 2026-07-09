// script.js

(function () {
  var destination = "https://pawank2611.vercel.app/";

  // Instant redirect (wait time: 0).
  // replace() is used instead of href so the old URL doesn't sit in
  // browser history — hitting "back" won't bounce the visitor here again.
  window.location.replace(destination);
})();
