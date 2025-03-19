self.addEventListener("install", () => {
  console.log("Into SW: install");
});

self.addEventListener("activate", () => {
  console.log("Into SW: activates");
});

self.addEventListener("message", (msg) => {
  console.log(msg.data);
});
