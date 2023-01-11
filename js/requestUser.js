window.addEventListener("load", function () {
  const getUserLists = async () => {
    await this.fetch("/main_backend/model/user_ctrl.php?req_sign=get_user")
      .then((Response) => Response.json())
      .then((user) => {
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  getUserLists();
});
