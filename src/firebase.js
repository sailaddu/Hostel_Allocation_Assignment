// import firebase from "firebase/app";

// import "firebase/auth";

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCdQY_SjuaTl_VPDrUAwy9iUFBo9MlweeU",
//     authDomain: "hostel-allocation-assign-a50e6.firebaseapp.com",
//     projectId: "hostel-allocation-assign-a50e6",
//     storageBucket: "hostel-allocation-assign-a50e6.appspot.com",
//     messagingSenderId: "398523719263",
//     appId: "1:398523719263:web:ddd953b548f4b0a43045ea",
//     measurementId: "G-MZ1KQVVBZC"
//   });
//   export const auth=app.auth();
//   export default app;
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaeUMJn71A64l6y63nBb1MGrX2-J8jW70",
  authDomain: "hostel-allocation-d7c92.firebaseapp.com",
  projectId: "hostel-allocation-d7c92",
  storageBucket: "hostel-allocation-d7c92.appspot.com",
  messagingSenderId: "509654410",
  appId: "1:509654410:web:2f0b0f9b91dc7804db8473",
  measurementId: "G-V3NS0MXKZB"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
// export default db;