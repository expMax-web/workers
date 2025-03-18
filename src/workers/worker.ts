self.postMessage("init worker");

let value = 0;

type Data = { action: "increment" | "decrement" | "getValue" };

console.log(self);

const postValue = () => {
  self.postMessage({ value });
};

const increment = () => {
  value++;
  console.log(self);
};

const decrement = () => {
  value--;
};

self.addEventListener("message", ({ data }: { data: Data }) => {
  switch (data.action) {
    case "getValue":
      return postValue();
    case "increment":
      return increment();
    case "decrement":
      return decrement();
    default:
      return value;
  }
});
