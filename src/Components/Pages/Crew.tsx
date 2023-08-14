import { pagesProps } from "../../type/header";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import Slider from "../Slider/Slider";
import anousheh from '../../img/crew/image-anousheh-ansari.png'
import douglas from '../../img/crew/image-douglas-hurley.png'
import mark from '../../img/crew/image-mark-shuttleworth.png'
import victor from '../../img/crew/image-victor-glover.png'
import { useState } from "react";
import '../../style/crew.css'

const Crew = ({page,onActive,active}:pagesProps) => {
  const [crew, setCrew] = useState([
    {
      id: 1,
      active: false,
      title1: "Anousheh Ansari",
      title2: "Flight Engineer",
      paragraph:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      img:anousheh,
      buttonText:""
    },
    {
      id: 2,
      active: false,
      title1: "Victor Glover",
      title2:"Pilot",
      paragraph:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      img:victor,
      buttonText:""
    },
    {
      id: 3,
      active: true,
      title1: "Douglas Hurley",
      title2:"Commander",
      paragraph:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img:douglas,
      buttonText:""
    },
    {
      id: 4,
      active: false,
      title1: "Mark Shuttleworth",
      title2:"Mission Specialist",
      paragraph:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img:mark,
      buttonText:"",
    },
  ]);

  const sliderActive = (slidId:number) => {
    const newDistanation =[...crew];
    newDistanation.map((e) => {
      e.active = false;
      return e
    });
    const index = newDistanation.findIndex(p => p.id ===slidId)
    newDistanation[index].active = true
    setCrew(newDistanation)
  }
  if(active)
  return (
    <div className="crewPage">
      <Header page={page} active={active} onActive={onActive} />
      <PageTitle id={page[2].id} pageTitle="Meet your crew"/>
      <Slider state={crew} onActive={sliderActive}/>

    </div>
  );
};

export default Crew;
