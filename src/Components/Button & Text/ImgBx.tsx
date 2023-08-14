import { img } from "../../type/img";

const ImgBx = ({img,imgAlt}:img) => {
    return ( 
        <div className="imgBx">
            <img src={img} alt={imgAlt} />
        </div>
     );
}
 
export default ImgBx;