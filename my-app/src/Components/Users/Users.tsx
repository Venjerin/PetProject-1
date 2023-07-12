import React, { FC, useState } from "react";
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./User";
import { UserType } from "../../types/types.js";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number)=> void
  portionSize?: number
  users: Array<UserType>
  unfollow: (userId: number)=> void
  follow: (userId: number)=> void
}

let Users: FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [activeIndex] = useState(0);
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      ></Paginator>
      <div>
        {users.map((u) => (
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
