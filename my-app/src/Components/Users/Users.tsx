import React, { FC, useEffect, useState } from "react";
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./User";
import { UserType } from "../../types/types.js";
import { Formik, Form, Field, ErrorMessage } from 'formik';


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

  // const filter:{term:string, friend:boolean} = {term:'some filter', friend:true};
  // const history = useHistory();
 
  // useEffect (() => {
  //   history.push({
  //     pathname: '/users',
  //     search: `?term = ${filter.term}&friend=${filter.friend}&page=${currentPage}`
  //   })
  // }, [filter, currentPage])




  return (
    <div>

      <UsersSearchForm></UsersSearchForm>

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

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
}

type UsersSearchFormObjectType = {
  term: string
}

const UsersSearchForm = () => {
  const submit = (values: UsersSearchFormObjectType, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <Formik
        initialValues={{ term: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Users;
