import react, { Component } from "react";
import "./TwoPuppy.css";
import PuppyThree from "../../../Resources/Images/puppy-3.jpg";
import PuppyFour from "../../../Resources/Images/puppy-4.jpg";
import ReusableProps from "../../ReusableProps";

class TwoPuppy extends Component {
  render() {
    return (
      <ReusableProps
        Id="more-puppies"
        morePuppies="More Puppies"
        puppiesContainer="puppies-container"
        puppy3="puppy-Three"
        PuppyThree={PuppyThree}
        puppy4="puppy-Four"
        PuppyFour={PuppyFour}
      />
    );
  }
}

export default TwoPuppy;
