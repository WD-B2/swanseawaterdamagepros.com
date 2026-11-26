(function () {
  var doc = document.documentElement;
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    doc.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    doc.style.overflow = "";
  }
  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
    overlay.addEventListener("click", closeMenu);
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  var items = document.querySelectorAll(".faq-item");
  for (var j = 0; j < items.length; j++) {
    (function (item) {
      var q = item.querySelector(".faq-q");
      if (!q) { return; }
      q.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        q.setAttribute("aria-expanded", open ? "true" : "false");
      });
    })(items[j]);
  }
})();
