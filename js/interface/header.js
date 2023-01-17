window.addEventListener("load", function () {
  /********** Elements Clone For Mobile  **********/
  this.setTimeout(function () {
    const mobileMenus = document.querySelector(".mobile-menus");
    // const navs = document.querySelector(".nav-lists").cloneNode(true);
    // const info = document.querySelector(".info").cloneNode(true);

    // mobileMenus.appendChild(navs);
    // mobileMenus.appendChild(info);

    // 1. 웹주소에서  index 폼 여부를 파악한다.
    // 2. "포함이 되었을 경우" navs li a의 herf는 #.
    // 3. 포함이 안되어있을 경우 navs li a의 주소를 해당 페이지 주소로 변경.
    // 4. 주의할 점은 각 링크가 두 개씩 존재한다는 것.

    const pgadr = window.location.href;

    const links = document.querySelectorAll(
      ".home-link, .shop-link, .gal-link"
    );
    // console.log(links);
    // console.log(pgadr.includes("index"));
    if (pgadr.includes("index")) {
      links.forEach((item) => {
        item.setAttribute("href", "#");
      });
    } else {
      links.forEach((item) => {
        const itemCls = item.getAttribute("class");
        if (itemCls === "home-link") {
          item.setAttribute("href", "/main_project/index.html");
        } else if (itemCls === "shop-link") {
          item.setAttribute("href", "/main_project/pages/shop.html");
        } else {
          item.setAttribute("href", "/main_project/pages/gallery.html");
        }
      });
    }

    /********** Change Menu Link between Main and Sub Pages **********/

    /********** Mobile Menu Toggle  **********/
    const mobileBtn = document.querySelector(".mobile-btn");
    toggleMobileBtn = (e) => {
      const target = e.currentTarget;
      const menuHeight = mobileMenus.scrollHeight; // scrollHroght : 지정 대상의 높이값을 읽어준다.
      target.classList.toggle("active");

      if (target.classList.contains("active")) {
        target.classList.remove("not-active");
        mobileMenus.style.height = menuHeight + "px"; // `${menuHeight}px`
      } else {
        target.classList.add("not-active");
        mobileMenus.style.height = 0;
      }
    };

    mobileBtn.addEventListener("click", toggleMobileBtn);
  }, 100);
});
