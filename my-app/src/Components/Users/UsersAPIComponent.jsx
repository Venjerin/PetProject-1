


// class UsersAPIComponent extends React.Component {

//     constructor(props) {
//         super(props);

//     };

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount);
//             });
//     };

//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//         .then(response => {
//             this.props.setUsers(response.data.items)
//         });
//     };

//     render() { return <Users totalUsersCount = {this.props.totalUsersCount}
//     pageSize = {this.props.pageSize}
//     currentPage = {this.props.currentPage}
//     onPageChanged = {this.onPageChanged}
//     users = {this.props.users}
//     follow = {this.props.follow}
//     unfollow = {this.props.unfollow}

//     ></Users>}
//         // <div>
//         //     <div>
//         //         {pages.map(p => {
//         //             return <span className={this.props.currentPage === p  && styles.selectedPage}
//         //             onClick={() => {this.onPageChanged(p)}}>{p}</span>
//         //         })}
//         // </div>
//         // {
//         //     this.props.users.map((u) => <div key={u.id}>
//         //         <span>
//         //             <div>
//         //                 <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
//         //             </div>
//         //             <div>
//         //                 {u.followed
//         //                     ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
//         //                     : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

//         //             </div>
//         //         </span>
//         //         <span>
//         //             <div>{u.name}</div>
//         //             <div>{u.status}</div>
//         //         </span>
//         //         <span>
//         //             <div>{"u.location.country"}</div>
//         //             <div>{"u.location.city"}</div>
//         //         </span>
//         //     </div>
//         //     )
//         // }
//         // </div >
    
// }


// export default UsersAPIComponent;

