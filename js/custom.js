window.addEventListener("load", function () {
  /********** Header Change Effect **********/
  const header = document.querySelector("#header");
  const stickyHeader = () => {
    const scry = window.scrollY;
    if (scry > 0) header.classList.add("active");
    else header.classList.remove("active");
  };

  window.addEventListener("scroll", stickyHeader);
});

/********** Get Products Json Data  **********/
const productsBox = document.querySelector(".products");

const getData = async () => {
  await fetch("/main_backend/model/get_Products.php")
    .then((response) => response.json())
    .then((data) => {
      let dataEl;
      data.map((item) => {
        // console.log(item);
        dataEl = `
      <div class="product-frame">
      <div class="product-item">
        <img src="/main_project/${item.prodPath}" alt="" />
        <div class="product-text">
          <h4>${item.prodTit}</h4>
          <strong>${item.prodPri}</strong>
          <p>${item.prodDes}</p>
          <a href="#" class="common-btn">자세히 보기</a>
        </div>
      </div>
    </div>
      `;
        productsBox.innerHTML += dataEl;
      });
    })
    .catch((err) => console.log(err));
};

getData();

/********** Fit Insta Effect  **********/
const instaImageHeight = document.querySelector("#h").scrollHeight;
// console.log(instaImageHeight);
document.querySelector("#fh").style.height = instaImageHeight + "px";

window.addEventListener("resize", () => {
  const instaImageHeight = document.querySelector("#h").scrollHeight;
  document.querySelector("#fh").style.height = instaImageHeight + "px";
});

/********** Scrollreveal Effect  **********/
const sr = ScrollReveal({
  reset: false,
});

sr.reveal(".wrapper", { dureation: 1000 });
sr.reveal(".landing-text-box", {
  dureation: 1000,
  origin: "right",
  distance: "80px",
});
sr.reveal(".meet-text-box, .swiper, products, .review-frame ", {
  dureation: 1000,
  origin: "bottom",
  distance: "40px",
});
sr.reveal(".meet-wrapper img, .feature,", {
  dureation: 1000,
  origin: "bottom",
  distance: "40px",
  interval: 200,
});

/********** Swiper Slider Effect  **********/
const swiper = new Swiper(".swiper", {
  loop: true, // 슬라이더 무한 반복
  navigation: {
    // 네비게이션
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    // 슬라이더 인디케이터
    el: ".swiper-pagination",
    clickable: true,
  },
});
