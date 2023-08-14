import { SliderProps } from "../../type/slider";
import Button from "./Button";



const ButtonGroup = ({state,onActive}:SliderProps) => {
    return ( 
        <div className="buttonGroup">
            {state.map((e)=>{
                return<Button buttonName={e.buttonText} active={e.active} id={e.id} onActive={onActive}/>
            })}
        </div>
     );
}
 
export default ButtonGroup;