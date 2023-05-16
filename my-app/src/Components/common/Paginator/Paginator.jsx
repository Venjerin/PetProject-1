import React, { useState } from "react";
import styles from "./Paginator.module.css";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const [activeIndex] = useState(0);
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          className={styles.prevButton}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev Page
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={`${currentPage === p ? styles.selectedPage : ""} ${
                styles.pageNumber
              }`}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          className={styles.nextButton}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next Page
        </button>
      )}

      {/* {pages.map((p) => {
        return (
          <span
            className={currentPage === p ? styles.selectedPage : null}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })} */}
    </div>
  );
};

export default Paginator;
