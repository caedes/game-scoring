import firestore from "../firestore";

export const fetchGamers = () =>
  firestore
    .collection("gamers")
    .orderBy("name")
    .get()
    .then((querySnapshot) => {
      const gamers = [];

      querySnapshot.forEach((doc) =>
        gamers.push({ ...doc.data(), id: doc.id })
      );

      return gamers;
    });

export const postGamer = (name) => firestore.collection("gamers").add({ name });
