import React from 'react'
import firebase from './firebase';

import store from '../redux/store';
import storeData from '../services/localStorage';

const db = firebase.database();

const functions = {
  getCategories : () => db.ref('categories').on('value', snapshot => {
      store.dispatch({ type: 'SET_CATEGORIES', payload: snapshot.val() });
      storeData.set('categories', snapshot.val());
  }),
  saveOptions : (data) => {
      let options = db.ref('feels');
      options.push(data)
        .then((success, err) => err ? console.log('Error') : console.log('Succes'))
  }
}

export default functions