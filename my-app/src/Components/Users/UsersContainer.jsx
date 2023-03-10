import { connect } from "react-redux";
import React from "react";
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow, getUsersThunkCreator } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);

    };

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.currentPagepageSize,usersAPI);
        // this.props.toggleIsFetching(true);

        //  usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        // .then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount - 22750);
        // });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunkCreator(pageNumber, this.props.currentPagepageSize,usersAPI);

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader></Preloader> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            ></Users>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


 let withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
    getUsersThunkCreator
})(withRedirect);

// compose(
//     connect(mapStateToProps, {follow, unfollow, setUsers,setCurrentPage, 
//         setTotalUsersCount, toggleIsFetching, getUsersThunkCreator
//     }),
//     withAuthRedirect
// (UsersContainer))