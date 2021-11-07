class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "seongjun" && password == "123") ||
        (id === "choi" && password == "123")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 1000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "seongjun") {
        onSuccess({ name: "seongjun", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = "seongjun";
const password = "123";
userStorage.loginUser(
  id,
  password,
  (user) => {
    console.log("user=", user);
    userStorage.getRoles(
      user,
      (userWithRole) => {
        console.log(
          `success ${userWithRole.name},role is ${userWithRole.role}`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
