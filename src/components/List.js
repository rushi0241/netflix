import React from "react";

const List = () => {
  return (
    <div className="list">
      <div className="row">
        {/* <h2 className="text-white title">{title}</h2> */}
        <div className="col">
          <div className="row-posters">
            <img
              className="row-poster row-posterLarge"
              //   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              //   alt={item.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
