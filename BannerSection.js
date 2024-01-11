import react, { Component } from "react";
import "./BannerSection.css";
import bannerImage from "../../../Resources/Images/banner-puppies.jpg";
import ReusableProps from "../../ReusableProps";

class BannerSection extends Component {
  render() {
    return (
      <>
        <section className="first-section">
          <div className="banner">
            <img src={bannerImage} />
          </div>
        </section>
      </>
    );
  }
}

export default BannerSection;
