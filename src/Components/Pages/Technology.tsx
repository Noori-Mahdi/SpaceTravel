import Header from "../Header/Header";
import { pagesProps } from "../../type/header";
import PageTitle from "../PageTitle/PageTitle";
import Slider from "../Slider/Slider";
import launch from '../../img/technology/image-launch-vehicle-portrait.jpg';
import capsule from '../../img/technology/image-space-capsule-portrait.jpg';
import spaceport from '../../img/technology/image-spaceport-portrait.jpg';
import { useState } from "react";
import '../../style/technology.css'

const Technology = ({ page, onActive,active }: pagesProps) => {
  const [distanation, setDistanation] = useState([
    {
      id: 1,
      active: true,
      title1: "Launch vehicle",
      title2: "The terminology...",
      paragraph:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img:launch,
      buttonText:"1"
    },
    {
      id: 2,
      active: false,
      title1: "Spaceport",
      title2: "The terminology...",
      paragraph:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img:spaceport,
      buttonText:"2"
    },
    {
      id: 3,
      active: false,
      title1: "Space capsule",
      title2:"The terminology...",
      paragraph:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img:capsule,
      buttonText:"3"
    },
   
  ]);

  const sliderActive = (slidId:number) => {
    const newDistanation =[...distanation];
    newDistanation.map((e) => {
      e.active = false;
      return e
    });
    const index = newDistanation.findIndex(p => p.id ===slidId)
    newDistanation[index].active = true
    setDistanation(newDistanation)
  }
  if(active)
  return (
    <div className="technologyPage">
      <Header page={page} active={active} onActive={onActive} />
      <PageTitle id={page[3].id} pageTitle="Space launch 101"/>
      <Slider state={distanation} onActive={sliderActive}/>


    </div>
  );
};

export default Technology;
