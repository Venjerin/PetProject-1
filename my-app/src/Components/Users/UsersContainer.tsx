import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api.ts";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { follow, getUsersThunkCreator, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer.ts";
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors.ts";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users.tsx";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
}

type MapDispatchPropsType = {
  getUsersThunkCreator: (currentPage: number, pageSize: number, usersAPI:any)=>void
  unfollow: (userId: number)=> void
  follow: (userId: number)=> void
  setCurrentPage: (pageNumber: number)=> void

}

type OwnPropsType = {
  pageTitle:string
}

class UsersContainer extends React.Component<PropsType> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize,
      usersAPI
    );
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsersThunkCreator(
      pageNumber,
      this.props.pageSize,
      usersAPI
    );

    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //     .then(data => {
    //         this.props.toggleIsFetching(false);
    //         this.props.setUsers(data.items)
    //     });
  };

  render() {
    return (
      <><h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader></Preloader> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
        ></Users>
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType  => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};

let withRedirect = withAuthRedirect(UsersContainer);


// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>): InferableComponentEnhancerWithProps<TStateProps & ResolveThunks<TDispatchProps>, TOwnProps>;
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
})(withRedirect);

