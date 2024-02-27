import React ,{useEffect} from "react";
import "./main.css";
import img from "../../Assets/img(1).jpeg";
import img2 from "../../Assets/img(2).jpeg";
import img3 from "../../Assets/img(3).jpeg";
import img4 from "../../Assets/img(4).jpeg";
import img5 from "../../Assets/img(5).jpeg";
import img6 from "../../Assets/img(6).jpeg";
import img7 from "../../Assets/img(7).jpeg";
import img8 from "../../Assets/img(8).jpeg";
import img9 from "../../Assets/img(9).jpeg";
import img10 from "../../Assets/img(10).jpeg";
import img11 from "../../Assets/img(11).jpeg";
import img12 from "../../Assets/img(12).jpeg";
import img13 from "../../Assets/img(13).jpeg";
import img14 from "../../Assets/img(14).jpeg";
import img15 from "../../Assets/img(15).jpeg";

import Aos from "aos";
import "aos/dist/aos.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zeland",
    grade: "CULTURAL RELAX",
    fees: "$1300",
    description:
      "The epitome of romance ,Bora Bora  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities .",
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:"Machu Picchu",
    location:"Peru",
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:3,
    imgSrc:img3,
    destTitle:"Great-Barrier-Reef",
    location:"Australia",
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:"Cappadocia",
    location:"Turkey",
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:5,
    imgSrc:img5,
    destTitle:"Gaunajuato",
    location:"Maxico",
    grade:'CULTURAL RELAX',
    fees:'$1700',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:"Cinque Terre",
    location:"Italy",
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:"Angkor-Wat",
    location:"Combodia",
    grade:'CULTURAL RELAX',
    fees:'$1200',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:"Dubai",
    location:"Southi Araba",
    grade:'CULTURAL RELAX',
    fees:'$2300',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:9,
    imgSrc:img9,
    destTitle:"Bali Island",
    location:"Indonesia",
    grade:'CULTURAL RELAX',
    fees:'$2000',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:10,
    imgSrc:img10,
    destTitle:"Dal Lake ",
    location:"Algeria",
    grade:'CULTURAL RELAX',
    fees:'$1500',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:11,
    imgSrc:img11,
    destTitle:"Harbour",
    location:"Belgium",
    grade:'CULTURAL RELAX',
    fees:'$1800',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:12,
    imgSrc:img12,
    destTitle:"Canberra",
    location:"Cabo Verde",
    grade:'CULTURAL RELAX',
    fees:'$2600',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:13,
    imgSrc:img13,
    destTitle:"Ferries",
    location:"Dominica",
    grade:'CULTURAL RELAX',
    fees:'$2400',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:14,
    imgSrc:img14,
    destTitle:"Manly Beach",
    location:"Ethiopia",
    grade:'CULTURAL RELAX',
    fees:'$3100',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
  {
    id:15,
    imgSrc:img15,
    destTitle:"Bondi Beach",
    location:"Guatemala",
    grade:'CULTURAL RELAX',
    fees:'$1600',
    description:"The epitome of romance ,Bora BOra  is the best travel destinations in the World .THis place knows for  its luxuries stayes and adventurous activities ."
  },
];

function Main() {

  //lets create a rwact hook to agdd scroll animation
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id}  data-aos="fade-up"  className="singleDesination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name"> {location}</span>
                  </span>
                  <div div className=" fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>{" "}
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex "> DETAILS  <HiOutlineClipboardCheck className="icon"/></button> 
                </div>
              </div>
            );
          }
        )}
      </div>


      
    </section>
  );
}

export default Main;
