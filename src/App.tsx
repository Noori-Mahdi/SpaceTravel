import { useState } from "react";
import "./App.css";
import { page } from "./type/header";
import Crew from "./Components/Pages/Crew";
import Technology from "./Components/Pages/Technology";
import Distanation from "./Components/Pages/Distanation";
import Home from "./Components/Pages/Home";

function App() {
  const [headerState, setHeaderState] = useState<page[]>([
    { id: 0, active: true, namePage: "home" },
    { id: 1, active: false, namePage: "distnation" },
    { id: 2, active: false, namePage: "crew" },
    { id: 3, active: false, namePage: "technology" },
  ]);

  const handleNavBar = (pageId: number) => {
    headerState.map((p) => {
      p.active = false;
      return p;
    });
    const newState = [...headerState];
    const index = headerState.findIndex((p) => p.id === pageId);
    newState[index].active = true;
    setHeaderState(newState);
  };

  return (
    <>
      <Home page={headerState} active={headerState[0].active} onActive={handleNavBar} />
      <Distanation page={headerState} active={headerState[1].active} onActive={handleNavBar} />
      <Crew page={headerState} active={headerState[2].active} onActive={handleNavBar} />
      <Technology page={headerState} active={headerState[3].active} onActive={handleNavBar} />
    </>
  );
}

export default App;
