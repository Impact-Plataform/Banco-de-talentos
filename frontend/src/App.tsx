import { Routes } from "./routes";
import { getPeople } from "./api/people";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getPeople({page:3});
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
