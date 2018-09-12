import React from 'react';

import { AsyncStorage } from 'react-native';

const setData = async (storeName, data) => {
  try {
    if(storeName === 'feels') {  

      const existingData = await AsyncStorage.getItem(storeName)
      let newData = JSON.parse(existingData);

      if(newData === null) {
        newData = [];
      } 

      newData.push(data)

      await AsyncStorage.setItem(storeName, JSON.stringify(newData))
        .then(() => console.log(newData))
    } else {
      await AsyncStorage.setItem(storeName, JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
};

const getData = (storeName) => new Promise((resolve, reject) => {
  AsyncStorage.getItem(storeName, (err, result) => {
    if (result == null) {
      reject();
    } else {
      err && reject(console.log(err));
      result && resolve(result);
    }
  });
});

const clearData = (storeName) => new Promise((resolve, reject) => {
  AsyncStorage.removeItem(storeName, (err) => {
    if (err) reject(err);
    resolve('Cleared');
  });
});

const storeData = {
  set: setData,
  get: getData,
  clear: clearData,
};

export default storeData;