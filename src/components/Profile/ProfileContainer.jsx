import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, getUserStatus, updateStatus,} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = 2;
        }
        this.props.getUserProfile(userid);
        this.props.getUserStatus(userid)

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}/>


        )

    };
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

});


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect


)(ProfileContainer)
