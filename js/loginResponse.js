window.addEventListener("load", function () {
  const userIcon = document.querySelectorAll(".user");
  // console.log(userIcon); // 2개 배열  요소
  const adminIcon = document.querySelectorAll(".admin");
  const cart = document.querySelector(".cart");

  this.fetch("/main_backend/etc/check_sign.php")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.user_idx, data.userid);
      cart.innerHTML = `
        <a href="#"><i class="ri-shopping-cart-line"></i><em>(5)</em></a>
      `;
      if (data.userid === "guest") {
        adminIcon.forEach((item) => {
          item.style.display = "none";
        });

        userIcon.forEach((item) => {
          item.innerHTML = `<a href="/main_project/pages/sign-in.html">
          <i class="ri-user-3-fill"></i>
        </a>`;
        });
        //   userIcon.innerHTML = `<a href="/main_project/pages/sign-in.html">
        //   <i class="ri-user-3-fill"></i>
        // </a>`;
      } else {
        adminIcon.forEach((item) => {
          item.style.display = "flex";
        });

        userIcon.forEach((item) => {
          item.innerHTML = `<button class="signout">${data.userid} | <a href="#">Logout</a></button>`;
        });
        // userIcon.innerHTML = `<button class="signout">${data.userid} | <a href="#">Logout</a></button>`;
      }

      const signoutBtn = document.querySelector(".signout a");

      if (signoutBtn) {
        signoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          this.fetch("/main_backend/model/register.php?q=signout")
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              this.alert("로그아웃 되었습니다.!!");
              this.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
