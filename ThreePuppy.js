import react, { Component } from "react";
import "./Threepuppy.css";
import puppyOne from "../../../Resources/Images/puppy-1.jpg";
import puppyTwo from "../../../Resources/Images/puppy-2.jpg";
import ReusableProps from "../../ReusableProps";
import ImageUI from "../../ImageUi/ImageUi";

class ThreePuppy extends Component {
  render() {
    return (
      <>
        <section>
          <div className="puppies-container">
            <ImageUI imageContainerClass="puppy-one" imageSrc={puppyOne} />
            <ImageUI
              imageContainerClass="missing-puppy"
              textContent={"Puppy Missing Here!!!"}
            />
            <ImageUI imageContainerClass="puppy-two" imageSrc={puppyTwo} />
          </div>
        </section>
      </>
    );
  }
}

export default ThreePuppy;
