import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';

import Main from './Main';

const firebase = Firebase.initializeApp({
  apiKey: `AIzaSyDe-N6RY8AvlGr3r76v-2hLVXdw3bi6oHQ`,
  authDomain: `east-eats.firebaseapp.com`,
  databaseURL: `https://east-eats.firebaseio.com`,
});

ReactDOM.render(
  <Main firebase={firebase} />,
  document.getElementById(`container`),
);
