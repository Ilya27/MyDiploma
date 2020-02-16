import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfZSlUAkIL21lbSL31x_9dowk5OyuGR4A",
    authDomain: "dogwalker-88634.firebaseapp.com",
    databaseURL: "https://dogwalker-88634.firebaseio.com",
    projectId: "dogwalker-88634",
    storageBucket: "dogwalker-88634.appspot.com",
    messagingSenderId: "192510245330"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();

        this.facebookProvider = new app.auth.FacebookAuthProvider();
        this.facebookProvider.addScope('user_location')
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
    doSignInWithFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    deleteUser = () => 
        this.auth.currentUser.delete()

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref(`users`);
}
export default Firebase;