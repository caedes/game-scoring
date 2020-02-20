import 'firebase/firestore';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCa7UzqTZ9l6gj57MitSKx2zcJIyklyuGw',
  authDomain: 'game-scoring-3e056.firebaseapp.com',
  databaseURL: 'https://game-scoring-3e056.firebaseio.com',
  projectId: 'game-scoring-3e056',
  storageBucket: 'game-scoring-3e056.appspot.com',
  messagingSenderId: '239940121721',
  appId: '1:239940121721:web:344508d28216bdbe1650a8',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
