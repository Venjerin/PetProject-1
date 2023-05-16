import React, { useState } from "react";
import styles from "./Paginator.module.css";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [activeIndex] = useState(0);
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p ? styles.selectedPage : null}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
