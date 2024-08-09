import Speakercard from "../Speakercard/Speakercard";

const Speaker = () => {
  const names = ["nikhil", "neha", "nelson"];

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-16">SPEAKERS</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 px-4 md:px-12 lg:px-16 xl:px-24 py-8 mx-auto my-8 md:my-12 lg:my-16">
        {names.map((name, index) => (
          <Speakercard key={index} name={name} />
        ))}
        <div className="card">
        <img
          src="https://uiverse.io/build/_assets/astronaut-WTFWARES.png"
          alt=""
          className="image"
        />
        <a href="/bitroot">BITROOT(Not Human)</a>
        <p>Find Bitroot to predict your crypto future!</p>
        <div className="icons"></div>
      </div>
      </div>
    </>
  );
};

export default Speaker;
