//workshop tracks for the landing page
import React from "react";
import { ReactComponent as AI } from '../../../assets/tracks/ai.svg'
import { ReactComponent as Front } from '../../../assets/tracks/front.svg'
import { ReactComponent as Back } from '../../../assets/tracks/back.svg'
import { ReactComponent as Hardware } from '../../../assets/tracks/hardware.svg'
import { ReactComponent as IT } from '../../../assets/tracks/it.svg'
import TrackItem from "../../../components/trackItem";
import data from "../../../config/data/tracks";
import "./styles.css";

const Tracks = () => {

  const getIcon = (id) => {
    switch (id) {
      case "a":
        return <Front />
      case "b":
        return <Back />
      case "c":
        return <Hardware />
      case "d":
        return <AI />
      case "e":
        return <IT />
      default:

    }
  }
  return (<>
    <section name="tracks">
      <div className="learning-tracks-container">
        <h1 className="landing-section-title">💡 Learning Tracks</h1>
        <p className="landing-section-paragraph">
          Do you love tinkering with databases, but aren’t really sure how the front-end works? Or maybe all you’ve ever done is Java, but you really want to work with microcontrollers? At ShellHacks, we offer learning tracks for everyone to learn new skills in any field they’re interested in!
        </p>
        <br />

        <div className="fish5">
          <img src={require(`../../../assets/animals/Pink_Fish.svg`)}></img>
        </div>

        <div className="fish6">
          <img src={require(`../../../assets/animals/Fish.svg`)}></img>
        </div>

        <div className="fish7">
          <img src={require(`../../../assets/animals/Fish.svg`)}></img>
        </div>

        <div className="fish8">
          <img src={require(`../../../assets/animals/Pink_Fish.svg`)}></img>
        </div>


        <div className="fish3">
          <img src={require(`../../../assets/animals/Pink_Fish.svg`)}></img>
        </div>

        <div className="fish4">
          <img src={require(`../../../assets/animals/Fish.svg`)}></img>
        </div>

        <div className="track-items-container">
          {data.map((item, i) => (
            <TrackItem key={i} {...item} icon={getIcon(item.id)} />
          ))}
        </div>
      </div>{" "}
    </section>
    <div className="fish">
      <img src={require(`../../../assets/animals/Fish.svg`)}></img>
    </div>

    <div className="fish1">
      <img src={require(`../../../assets/animals/Fish.svg`)}></img>
    </div>

    <div className="fish2">
      <img src={require(`../../../assets/animals/Fish.svg`)}></img>
    </div>
  </>
  );
};

export default Tracks;
