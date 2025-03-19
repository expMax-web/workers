import { FC, useEffect } from "react";

export const ServiceWorkerPage: FC = () => {
  console.log(
    new URL("../../workers/shared-worker.ts", import.meta.url).origin
  );

  useEffect(() => {
    navigator.serviceWorker
      .register("./serviceWorker.js", {
        scope: "/serviceWorker",
      })
      .then((reg) => {
        console.log("SW registration success", reg.scope);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return <></>;
};
