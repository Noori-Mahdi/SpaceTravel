import { ButtonType } from "../../type/button";

const Button = ({ id, buttonName, active, onActive }: ButtonType) => {
  let classActive = "";
  if (active) {
    classActive = "active";
  } else {
    classActive = "";
  }

  return (
    <button
      className={classActive}
      onClick={() => {
        onActive(id);
      }}
    >
      {buttonName}
    </button>
  );
};

export default Button;
