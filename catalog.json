// app.js
const db = firebase.firestore();

// LOGIN/SIGNUP: Creates a user profile with Robux
async function signUp() {
  const user = await auth.createUserWithEmailAndPassword(email, pass);
  await db.collection("users").doc(user.uid).set({
    robux: 100,
    inventory: [],
    username: "Noob_" + Math.floor(Math.random()*1000)
  });
}

// MARKETPLACE: Using Firestore Transactions for safe Robux spending
async function buyItem(itemId, price) {
  const userRef = db.collection("users").doc(auth.currentUser.uid);
  await db.runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef);
    if (userDoc.data().robux >= price) {
      transaction.update(userRef, {
        robux: userDoc.data().robux - price,
        inventory: firebase.firestore.FieldValue.arrayUnion(itemId)
      });
      alert("Item Bought!");
    }
  });
}

// PUBLISH: Saves the game world as a JSON string
async function publishGame(scene) {
  const sceneData = JSON.stringify(scene.toJSON());
  await db.collection("games").add({
    mapData: sceneData,
    creator: auth.currentUser.uid
  });
}
