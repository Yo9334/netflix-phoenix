import Movie from "./Movie";

const Section = ({ category, tabImgs }) => {
  return (
    <>
      <h1>{category}</h1>
      <div className="carrousel">
        {tabImgs.map((element) => {
          return <Movie urlImg={element} />;
        })}
      </div>
    </>
  );
};

export default Section;
