import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions/index'

class GoogleAuth extends React.Component {
    constructor(props) {
        super(props);
        this.menu = React.createRef();
        this.user = React.createRef();
    }

    componentDidMount(){
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: '203063623292-mb355h2i94qv1u79cmkf8ja3tgh4rgk0.apps.googleusercontent.com',
                scope: 'profile'
            })
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    renderSignInButton = () => {
        return (
            <button type="button" className="login-with-google-btn" onClick ={this.onSignIn}>
                <span className="google-button__icon">
                    <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/>
                        <path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/>
                        <path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/>
                        <path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/>
                    </svg>
                </span>
                <span className="google-button__text">
                    Sign in with Google
                </span>
            </button>
        )
    }

    onSignIn = () => {
        try{
            this.auth.signIn();
        } catch (err){

        }     
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    switchuser = async () => {
        await this.auth.signOut();
        this.auth.signIn();
    }

    openMenu = () => {
        this.menu.current.classList.toggle('open');
        this.menu.current.style.width = window.getComputedStyle(this.user.current).getPropertyValue('width');
    }

    renderUser = () => {
        let profile = "John Johnson"
        if (this.props.isSignedIn) {
            try {
                profile = this.auth.currentUser.get().getBasicProfile();
            } catch(err){

            }
        }

        return (
            <>
                <div ref={this.user} id="user">
                    <img src={profile.getImageUrl()} alt="user" className="avatar"/>
                    <div>
                        <div className="user__name">
                            {profile.getEmail()}
                        </div>
                        <div onClick={this.openMenu}>
                            <ion-icon name="caret-down" class="arrow"></ion-icon>
                        </div>
                    </div>
                </div>
                <div ref={this.menu} className="user-menu">
                    <div onClick={this.switchuser}>Switch Accounts</div>
                    <div onClick={this.onSignOut}>Log Out</div>
                </div>
            </>
        )
    }
    
    render() {
        return (
            <>
               {this.props.isSignedIn ? this.renderUser() : this.renderSignInButton()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);