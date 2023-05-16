import React, { useState } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [activeIndex] = useState(0);
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      ></Paginator>
      <div>
        {props.users.map((u) => (
          <User
            user={u}
            unfollow={props.unfollow}
            follow={props.follow}
            key={u.id}
          ></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
