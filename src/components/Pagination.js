import { useState } from "react";
import chevronLeft from "../assets/img/chevron-left.svg";
import chevronRight from "../assets/img/chevron-right.svg";

const Pagination = ({ data, offset, setOffset }) => {
  const [page, setPage] = useState(1);
  const [skipChar, setSkipChar] = useState(0);
  return (
    <div id="pagination">
      {offset !== 0 ? (
        <img
          src={chevronLeft}
          alt="left"
          onClick={(e) => {
            if (data.length > 0) {
              let newSkip = skipChar - 100;
              setSkipChar(newSkip);
            } else {
              setPage(page - 1);
              console.log(page);
              setOffset(offset - 100);
            }
          }}
        />
      ) : (
        <img src={chevronLeft} alt="left" />
      )}
      <p>page {page}</p>
      {offset + 100 < data.count && (
        <img
          src={chevronRight}
          alt="right"
          onClick={(e) => {
            if (data.length > 0) {
              let newSkip = skipChar + 100;
              setSkipChar(newSkip);
            } else {
              setOffset(offset + 100);
              setPage(page + 1);
              console.log(page);
            }
          }}
        />
      )}
    </div>
  );
};

export default Pagination;
