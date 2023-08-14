import { TextBx } from "../../type/text";

const Text = ({
  title1,
  title2,
  paragraph,
  info1,
  info2,
  infoSubject1,
  infoSubject2,
}:TextBx) => {
  return (
    <div className="Text">
      <span>{title2}</span>
      <h2>{title1}</h2>
      <p>{paragraph}</p>
      <div className="infoBx">
        <div>
          <span>{infoSubject1}</span>
          <span>{info1}</span>
        </div>
        <div>
          <span>{infoSubject2}</span>
          <span>{info2}</span>
        </div>
      </div>
    </div>
  );
};

export default Text;
