import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-storage'

const config = {
  apiKey: 'AIzaSyAJr_N1NWz1H3bXqBEH3-cwXHtaYbxe0pI',
  authDomain: 'meal-planner-e2aa0.firebaseapp.com',
  databaseURL: 'https://meal-planner-e2aa0.firebaseio.com',
  projectId: 'meal-planner-e2aa0',
  storageBucket: 'meal-planner-e2aa0.appspot.com'
}

class Firebase {
  constructor () {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }

  /**
   *
   * Login function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   */

  login (email, password) {
    return new Promise((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Check that user exists
   * @param {string} userName - The user name.
   */

  userExists (userName) {
    return new Promise(resolve => {
      this.db
        .collection('users')
        .doc(userName)
        .get()
        .then(doc => resolve(doc))
    })
  }

  /**
   *
   * Register function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   * @param {string} userName - The user name.
   */

  register (email, password, userName) {
    return new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.db
            .collection('users')
            .doc(userName)
            .set({
              displayName: userName,
              email: email,
              menu: [
                { day: 'Monday', order: 0 },
                { day: 'Tuesday', order: 1 },
                { day: 'Wednesday', order: 2 },
                { day: 'Thursday', order: 3 },
                { day: 'Friday', order: 4 },
                { day: 'Saturday', order: 5 },
                { day: 'Sunday', order: 6 }],
              shopList: []
            })
            .then(() => {
              this.auth.currentUser.updateProfile({ displayName: userName }).then(() => resolve())
            })
            .catch(error => error)
        })
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Logout function
   */

  logout () {
    return this.auth.signOut()
  }

  /**
   *
   * Get user function
   * @returns {string} The user.
   */

  getUser () {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user)
        } else {
          reject('No user is signed in.')
        }
      })
    })
  }
}

export default new Firebase()
