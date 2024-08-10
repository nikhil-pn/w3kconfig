import speakercard from "./speakercard.css";

const Speakercard = ({ name }) => {
  return (
      <div className="card">
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className="image"
        />
        <div className="heading capitalize">{name}</div>
        <div className="icons"></div>
        
      </div>
  );
};

export default Speakercard;
