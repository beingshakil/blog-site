import "./Card.css";
import profile from "../../assets/avatar.png";
import card_img from "../../assets/pic3.jpg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={card_img} alt="Card Image" />
      </div>

      <div className="card-content">
        <h1 className="card-title">Tour of Cox&apos;s Bazar</h1>
        <div className="card-author">
          <img src={profile} alt="Profile" className="profile-img" />
          <h2 className="author-name">Md Shakil Hossen</h2>
        </div>

        <div className="card-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum inventore explicabo tempore 
            impedit nostrum minima expedita dolores numquam harum ipsam.
          </p>
          <button className="read-more-btn">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
