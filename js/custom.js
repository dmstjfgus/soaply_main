/********** Get Products Json Data  **********/
const productsBox = document.querySelector(".products");

const getData = async () => {
  await fetch("/main_backend/model/get_products.php?qnt=6")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let dataEl;
      data.map((item) => {
        // console.log(item);
        dataEl = `
          <div class="product-frame">
          <div class="product-item">
            <img src="/main_project/images/products/${item.pro_img}" alt="" />
            <div class="product-text">
              <h4>${item.pro_name}</h4>
              <strong>${item.pro_pri
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
              <p>${item.pro_desc}</p>
              <a href="/main_project/pages/details.html?idx=${
                item.pro_idx
              }" class="common-btn">자세히 보기</a>
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

window.addEventListener("load", function () {
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
  sr.reveal(
    ".meet-wrapper img, .feature, .product-frame, .review-frame, .grid-item",
    {
      dureation: 1000,
      origin: "bottom",
      distance: "40px",
      interval: 300,
    }
  );
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
