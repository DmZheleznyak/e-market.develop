import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null  
  //   };

  //   this.unsubscribeFromAuth = this.unsubscribeFromAuth.bind(this);
  // }

  unsubscribeFromAuth() {
    return null;
  }  

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onIdTokenChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })          
        })
      }
      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? 
            (<Redirect to='/' />) : 
            ( <SignInAndSignUp /> ) } />
        </Switch>
      </main>
    );
  } 
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser( user ) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
