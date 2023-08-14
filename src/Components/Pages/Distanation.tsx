import Header from "../Header/Header";
import { pagesProps } from "../../type/header";
import PageTitle from "../PageTitle/PageTitle";
import { useState } from "react";
import Slider from "../Slider/Slider";
import Moon from '../../img/destination/image-moon.png'
import Mars from '../../img/destination/image-mars.png'
import Europa from '../../img/destination/image-europa.png'
import Titan from '../../img/destination/image-titan.png'
import '../../style/destination.css'

const Distanation = ({ page, onActive, active }: pagesProps) => {
  const [distanation, setDistanation] = useState([
    {
      id: 1,
      active: false,
      title1: "moon",
      paragraph:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ",
      info1: "384,400 km",
      info2: "3 days",
      infoSubject1: "Avg. distance",
      infoSubject2: "travel time",
      img:Moon,
      buttonText:"moon"
    },
    {
      id: 2,
      active: false,
      title1: "mars",
      paragraph:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ",
      info1: "225 mil. km",
      info2: "9 months",
      infoSubject1: "Avg. distance",
      infoSubject2: "travel time",
      img:Mars,
      buttonText:"mars"
    },
    {
      id: 3,
      active: true,
      title1: "europa",
      paragraph:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      info1: "628 mil. km",
      info2: "3 years",
      infoSubject1: "Avg. distance",
      infoSubject2: "travel time",
      img:Europa,
      buttonText:"europa"
    },
    {
      id: 4,
      active: false,
      title1: "titan",
      paragraph:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      info1: "1.6 bil. km",
      info2: "7 years",
      infoSubject1: "Avg. distance",
      infoSubject2: "travel time",
      img:Titan,
      buttonText:"titan"
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

  if (active)
    return (
      <div className="distanationPage">
        <Header page={page} active={active} onActive={onActive} />
        <PageTitle id={page[1].id} pageTitle="pick your destination" />
        <Slider state={distanation} onActive={sliderActive}/>
      </div>
    );
};

export default Distanation;
