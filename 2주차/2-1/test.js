const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
};
console.log(rabbit);
json = JSON.stringify(rabbit);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key},value:${value}`);
  // return value;
  return key === "name" ? "seongjun" : value;
});

json = JSON.stringify(rabbit);
//const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key1:${key},value1:${value}`);
  return value;
});
console.log(obj);
