import { SlidProps } from "../../type/slid";
import ButtonGroup from "../Button & Text/ButtonGroup";
import ImgBx from "../Button & Text/ImgBx";
import Text from "../Button & Text/Text";

function Slid({
  id,
  active,
  title1,
  title2,
  paragraph,
  info1,
  info2,
  infoSubject1,
  infoSubject2,
  img,
  state,
  onActive,
}: SlidProps) {
  if (active)
    return (
      <>
        <ImgBx img={img} imgAlt={title1} />
        <div className="textBx">
          <ButtonGroup state={state} onActive={onActive} />
          <Text
            title1={title1}
            title2={title2}
            paragraph={paragraph}
            info1={info1}
            info2={info2}
            infoSubject1={infoSubject1}
            infoSubject2={infoSubject2}
          />
        </div>
      </>
    );
}

export default Slid;
