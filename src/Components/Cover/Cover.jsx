import './Cover.css';
import cover_img from "../../assets/cover.png";

const Cover = () => {
  return (
    <div className="cover-container">
      <div className="cover-left">
        <h1>Get Being Related Knowledge</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta totam eligendi facilis voluptate temporibus accusamus doloremque, 
          officiis in voluptas perferendis ipsum. Numquam fuga aliquid optio, omnis iure vero. Numquam explicabo et neque provident 
          dolorem nemo reiciendis inventore est magni esse.
        </p>
        <button className="cover-button">Check Now</button>
      </div>

      <div className="cover-right">
        <img src={cover_img} alt="Knowledge Illustration" />
      </div>
    </div>
  );
};

export default Cover;
