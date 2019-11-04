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

const daysArray = [{ day: 'Monday' }, { day: 'Tuesday' }, { day: 'Wednesday' }, { day: 'Thursday' }, { day: 'Friday' }, { day: 'Saturday' }, { day: 'Sunday' }]

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
              menu: daysArray,
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

  /**
   *
   * Get data function
   * @param {string} collection - The collection you want to search.
   * @param {string} doc - the document to access.
   * @returns {object} The data you have searched.
   */

  getUserData (userName) {
    return new Promise((resolve, reject) => {
      const docRef = this.db.collection('users').doc(userName)
      docRef
        .get()
        .then(doc => (doc.exists ? resolve(doc.data()) : reject('No such document!')))
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Update weekly menu
   */

  async updateMenu (userName, day, breakfast, lunch, dinner) {
    let { menu } = await this.getUserData(userName)

    const dayFilter = menu.filter(e => e.day === day)
    dayFilter[0] = { day, breakfast, lunch, dinner }
    menu = menu.map(e => e.day === day ? dayFilter[0] : e)

    return new Promise((resolve, reject) => {
      const docRef = this.db.collection('users').doc(userName)
      docRef.set({
        menu: menu
      }, { merge: true })
        .then(() => resolve())
        .catch(error => reject(error.message))
    })
  }

  /**
   *
   * Delete item update menu
   */

  async deleteItemMenu (userName, day, type, mealDescription) {
    let { menu } = await this.getUserData(userName)

    const dayFilter = menu.filter(e => e.day === day)
    dayFilter[0][type] = mealDescription
    menu = menu.map(e => e.day === day ? dayFilter[0] : e)

    return new Promise((resolve, reject) => {
      const docRef = this.db.collection('users').doc(userName)
      docRef.set({
        menu: menu
      }, { merge: true })
        .then(() => resolve())
        .catch(error => reject(error.message))
    })
  }

  /**
   *
   * Update Shop list
   */

  async updateShopList (userName, list) {
    return new Promise((resolve, reject) => {
      const docRef = this.db.collection('users').doc(userName)
      docRef.set({
        shopList: list
      }, { merge: true })
        .then(() => resolve())
        .catch(error => reject(error.message))
    })
  }
}

export default new Firebase()
