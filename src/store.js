import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
// TODO:

const firebaseConfig = {
  apiKey: "AIzaSyDoxsG3BAOdmQ9qhe9DGIInrAdhYqnmCCc",
  authDomain: "reactclientpanel-d54d0.firebaseapp.com",
  databaseURL: "https://reactclientpanel-d54d0.firebaseio.com",
  projectId: "reactclientpanel-d54d0",
  storageBucket: "reactclientpanel-d54d0.appspot.com",
  messagingSenderId: "432563271925"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  reactReduxFirebase,
  compose(
    window.__REDUX__DEVTOOLS__EXTENSION__ &&
      window.__REDUX__DEVTOOLS__EXTENSION__()
  )
);

export default store;
