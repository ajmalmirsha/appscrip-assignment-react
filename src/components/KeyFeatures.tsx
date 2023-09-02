import mobileImg from "../cards-images/Mobile-img.png";
import shoppingImg from "../cards-images/shopping-img.png";
import dummyImg from "../cards-images/dummy-img.jpg";
import RoboIcon from "../cards-images/icon-1.png";
import CommunityIcon from "../cards-images/community.png";
import TrophyIcon from "../cards-images/trophy.png";
import Products from "./Products";
import Cards from "./Cards";

export default function Keyfeatures() {
  return (
    <div className="features-sec">
      <h1>Elevate Your Craft</h1>
      <div className="cards-wrapper">
        <div className="first-row">
          <div className="one">
            <h3 className="card-heading">Unlock Your ABC Earning Potential</h3>
            <p className="card-para">
              Are you ready to take your earning potential to the next level?
              With ABC, you have multiple avenues to monetize your content
              seamlessly. From subscriptions and tips to merchandise sales and
              NFTS, ABC helps you diversify your revenue streams and maximize
              your income.
            </p>
            <div className="img-wrapper">
              <img src={mobileImg} className="one-img" alt="moblie image" />
            </div>
          </div>
          <div className="two">
            <h3 className="card-heading">
              Boost Your Sales with Built-in E-commerce
            </h3>
            <p className="card-para">
              Take control of your brand and boost your sales with ABC's
              built-in e-commerce functionality. Showcase and sell your
              exclusive products, whether it's merchandise, digital downloads,
              or personalized experiences. Integrate your store effortlessly and
              turn your creative ideas into profitable ventures.
            </p>
            <div className="main-wrapper">
              <div className="pro-img-wrapper">
                <img
                  src={shoppingImg}
                  className="pro-img"
                  alt="moblie image"
                />
              </div>
              <Products src={dummyImg} />
              <Products src={dummyImg} />
              <Products src={dummyImg} />
            </div>
          </div>
        </div>
        <div className="second-row">
          <Cards
            className={"three"}
            src={RoboIcon}
            heading="Save Time with Automation and Efficiency"
            para="Supercharge your content creation with ABC's automation tools . Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content."
          />
          <Cards
            className={"four"}
            src={CommunityIcon}
            heading="Join a Supportive Community"
            para="Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth."
          />
          <Cards
            className={"five"}
            src={TrophyIcon}
            heading="Unlock Exclusive Opportunities and Prizes"
            para="Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards."
          />
        </div>
      </div>
    </div>
  );
}
