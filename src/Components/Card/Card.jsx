/* eslint-disable react/prop-types */
import "./Card.css";
import profile from "../../assets/avatar.png";

const Card = ({ title, date, image, description, link}) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="Card Image" />
      </div>

      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <div className="card-author">
          <img src={profile} alt="Profile" className="profile-img" />
          <h2 className="author-name">Md Shakil Hossen</h2>
        </div>

        <p className="card-date">{date}</p>

        <div className="card-description">
          <p>{description}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="read-more-btn">Read More</button>
            </a>
          )}
        </div>
      </div>
    </div>

    
  );
};

export default Card;
