import { FC, useEffect } from "react";

const handler = (e: any) => {
  console.log("getMessageFromWorker", e.data);
};

export const SharedWorkerPage: FC = () => {
  const sharedWorker = new SharedWorker(
    new URL("../../workers/shared-worker.ts", import.meta.url)
  );

  sharedWorker.onerror = (e) => {
    console.log(e);
  };

  const getValue = () => {
    sharedWorker.port.postMessage({ action: "getValue" });
  };

  const increment = () => {
    sharedWorker.port.postMessage({ action: "increment" });
  };

  const decrement = () => {
    sharedWorker.port.postMessage({ action: "decrement" });
  };

  useEffect(() => {
    sharedWorker.port.addEventListener("message", handler, false);
    sharedWorker.port.start();

    return () => {
      sharedWorker.port.removeEventListener("message", handler, false);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          getValue();
        }}
      >
        get value
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        increments
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        decrement
      </button>
    </>
  );
};
