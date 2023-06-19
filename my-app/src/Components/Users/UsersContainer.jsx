import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { follow, getUsersThunkCreator, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer.ts";
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.currentPagepageSize,
      usersAPI
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsersThunkCreator(
      pageNumber,
      this.props.currentPagepageSize,
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
      <>
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

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};

let withRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
})(withRedirect);

