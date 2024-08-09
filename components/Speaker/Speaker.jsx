import Speakercard from "../Speakercard/Speakercard";

// import CenteredPixelTransition from '../pixelTransition/centered';

const Speaker = () => {
  return (
    <>
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">SPEAKERS</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 px-4 md:px-12 lg:px-16 xl:px-24 py-8 mx-auto my-8 md:my-12 lg:my-16">
        <Speakercard />
        <Speakercard />
        <Speakercard />
        <Speakercard />
        <Speakercard />
        <Speakercard />
      </div>
      
    </>
    
  );
};

export default Speaker;
