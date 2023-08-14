import Header from "../Header/Header";
import Text from "../Button & Text/Text";
import { pagesProps } from "../../type/header";
import Button from "../Button & Text/Button";
import { useState } from "react";
import '../../style/homePage.css'

const Home = ({ page, onActive, active }: pagesProps) => {
  const [state, ustState] = useState({
    title1: "space",
    title2: "so, you want to travel to",
    paragraph:
      "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  });
  if (active)
    return (
      <div className="homePage">
        <Header page={page} active={active} onActive={onActive} />
        <div className="main">
          <Text
            title1={state.title1}
            title2={state.title2}
            paragraph={state.paragraph}
          />
          <Button active={false} buttonName="explore" />
        </div>
      </div>
    );
};

export default Home;
