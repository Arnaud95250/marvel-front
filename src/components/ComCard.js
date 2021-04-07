import { Link } from "react-router-dom";

const ComCard = ({ data }) => {
  return (
    <div className="content_comics">
      {data.results.map((elem, index) => {
        const comicsId = elem._id;
        return (
          <div key={index}>
            <Link to={`/cardcomics/${comicsId}`}>
              <img
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt={elem.name}
              />
              <h3>{elem.name}</h3>
              <span>{elem.description}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ComCard;
