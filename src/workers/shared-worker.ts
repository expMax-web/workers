let value = 0;

type Data = { action: "increment" | "decrement" | "getValue" };

const connnection = new Set();

self.addEventListener("connect", (connect: any) => {
  const port = connect.ports[0];

  console.log(connect);

  connnection.add(port);

  port.postMessage({ message: "Init shared worker" });

  const postValue = () => {
    port.postMessage({ value });
  };

  const increment = () => {
    value++;
    console.log(self);
  };

  const decrement = () => {
    value--;
  };

  port.onmessage = (e: { data: Data }) => {
    switch (e.data.action) {
      case "getValue":
        return postValue();
      case "increment":
        return increment();
      case "decrement":
        return decrement();
      default:
        console.log(e);
    }
  };

  port.onclose = () => {
    connnection.delete(port);
  };
});
