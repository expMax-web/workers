import { FC, useEffect } from "react";

const handler = (e: any) => {
  console.log("getMessageFromWorker", e.data);
};

export const WorkerPage: FC = () => {
  const worker = new Worker(
    new URL("../../workers/worker.ts", import.meta.url)
  );

  const getValue = () => {
    worker.postMessage({ action: "getValue" });
  };

  const increment = () => {
    worker.postMessage({ action: "increment" });
  };

  const decrement = () => {
    worker.postMessage({ action: "decrement" });
  };

  useEffect(() => {
    worker.addEventListener("message", handler, false);

    return () => {
      worker.removeEventListener("message", handler, false);
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
