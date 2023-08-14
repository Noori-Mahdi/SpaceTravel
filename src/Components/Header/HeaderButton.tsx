import { pagesProps } from "../../type/header";

const HeaderButton = ({ page, onActive }: pagesProps) => {
  let classActive = "";
  return (
    <ul>
      {page.map((p) => {
        if (p.active) {
          classActive = "active";
        } else {
          classActive = "";
        }
        return (
          <li
            className={classActive}
            onClick={() => {
              onActive(p.id);
            }}
          >
            <span>0{p.id}</span>
            <span>{p.namePage}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderButton;
