const isLogged = true;

const first = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const rand = Math.random();
      resolve(rand);
    } else {
      reject(new Error("User is not logged in"));
    }
  });
};

const second = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      const datas = { name: "John", age: 24 };
      resolve(datas);
    } else {
      reject(new Error("Number is not greater than 0.5"));
    }
  });
};

first(isLogged)
  .then((rand) => {
    return second(rand);
  })
  .then((datas) => {
    console.log(datas);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => "OK!");
