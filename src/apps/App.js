import React, {Component} from 'react';
import MainApp from './Mainapp'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey:"AIzaSyAaeUMJn71A64l6y63nBb1MGrX2-J8jW70",
  authDomain: "hostel-allocation-d7c92.firebaseapp.com"
})

class App extends Component{
  state={isSignedIn:false}

  uiConfig ={
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount=()=>{
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn : !!user })})
      firebase.auth().signOut();
  }
  

  render(){
  return(
    <>
    {this.state.isSignedIn ? (
    <>
    <MainApp userName={firebase.auth().currentUser.displayName}/>
    {/* <h1>awd {firebase.auth().currentUser.displayName}</h1> */}
    {/* <button onClick={() => firebase.auth().signOut()}>SignOut</button> */}
    </>
    ) : 
      (<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />)
    } 
    </>
  );
  }

}
export default App;