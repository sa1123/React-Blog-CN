import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEQcn81Vjl92tN421LOnD2wgpLnRQzHbQ",
  authDomain: "reacthooks-blog.firebaseapp.com",
  projectId: "reacthooks-blog",
  storageBucket: "reacthooks-blog.appspot.com",
  messagingSenderId: "501697008521",
  appId: "1:501697008521:web:2f4f07871c20fa3f9c0758"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();