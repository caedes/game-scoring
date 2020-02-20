import firestore from '../firestore';

export default () =>
  firestore
    .collection('gamers')
    .orderBy('name')
    .get()
    .then(querySnapshot => {
      const gamers = [];

      querySnapshot.forEach(doc => gamers.push({ ...doc.data(), id: doc.id }));

      return gamers;
    });
