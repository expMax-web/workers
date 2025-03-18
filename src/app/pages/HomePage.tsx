import { FC } from "react";
import { Link } from "react-router";

export const HomePage: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/worker">worker</Link>
      <Link to="/sharedWorker">sharedWorker</Link>
      <Link to="/serviceWorker">serviceWorker</Link>
    </div>
  );
};
