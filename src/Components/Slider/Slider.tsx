import { SliderProps } from "../../type/slider";
import Slid from "./Slid";

const Slider = ({ state,onActive }: SliderProps) => {
  return (
    <div className="slider">
      {state.map((e) => {
        return (
          <Slid
            id={e.id}
            active={e.active}
            title1={e.title1}
            title2={e.title2}
            paragraph={e.paragraph}
            info1={e.info1}
            info2={e.info2}
            infoSubject1={e.infoSubject1}
            infoSubject2={e.infoSubject2}
            img={e.img}
            state={state}
            onActive={onActive}
          />
        );
      })}
    </div>
  );
};

export default Slider;
