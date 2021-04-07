import { Link } from "react-router-dom";

const CharCard = ({ data }) => {
  return (
    <div className="content_characters">
      {data.results.map((elem, index) => {
        const characterId = elem._id;
        return elem ? (
          <div key={index}>
            <Link to={`/cardcharacters/${characterId}`}>
              <img
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt={elem.name}
              />
              <h3>{elem.name}</h3>
            </Link>
          </div>
        ) : (
          <div style={{ background: "red", height: "100vh" }}></div>
        );
      })}
    </div>
  );
};

export default CharCard;
