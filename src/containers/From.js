import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { saveCategory } from '../redux/actions/option'
import Functions from '../services/queries';
import storeData from '../services/localStorage';

import { Title, FromOptions } from '../components';

const date = new Date().toISOString()

class From extends Component {
  constructor(props) {
    super(props);
    this.timer = null
  };

  componentDidMount(){
    this.mounted = true;

    (this.mounted) && (this.timer = setTimeout(() => {
      if(this.props.isConnected) {
        this.saveWithoutCategory()
        this.uploadLocalData()
      } else {
        this.saveWithoutNetwork()
      }
    }, 8000))

    if(this.props.isConnected) {
      Functions.getCategories()
    } else {
      storeData.get('categories').then((result) => this.props.dispatch({ type: 'SET_CATEGORIES', payload: JSON.parse(result) }))
    }
  }

  saveWithoutNetwork(){
    const { feel } = this.props;
    storeData.set('feels', {
      feel,
      data: {
        date: date
      },
    });
    Actions.push('FEELS');
  }

  saveWithoutCategory() {
    const { feel } = this.props;
    Functions.saveOptions({
      feel,
      data: {
        date: date
      },
    }, null, null);
    Actions.push('FEELS');
  }
  
  handleOption = (category, id) => {
    const data = {
      feel: this.props.feel,
      category: { 
        id,
        ...category
      },
      data: {
        date: date
      },
    };

    this.props.dispatch(saveCategory(category, id));

    clearTimeout(this.timer);

    if(this.props.isConnected) {
      Functions.saveOptions(data)
      this.uploadLocalData()
      console.log('con internet')
    } else {
      storeData.set('feels', data)
      console.log('sin internet')
    }

  }

  uploadLocalData() {
    storeData.get('feels')
      .then((result) => {
        if(result) {
          JSON.parse(result).map(feel => Functions.saveOptions(feel))
          storeData.clear('feels')
        }})
      .catch(() => console.log('no se pudieron obtener los datos'))
  }

  render() {
    const { categories } = this.props
    return(
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={{flex: 1,justifyContent: 'center'}}>
          <Title text="¿Qué trámite hiciste?"/>
          </View>
        {/* <ScrollView style={{}}> */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flex: 2}}>
          {
            categories && Object.keys(categories).map((key) => {
              let category = categories[key];
              return <FromOptions style={styles.box} text={category.name} key={key} onPress={() => this.handleOption(category, key)}/>
            })
          }
        </View>
        {/* </ScrollView> */}
      </View>
    )
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    width: width*0.4,
    height: 84,
    margin: 10,
    backgroundColor: '#51a147',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  ...state,
  feel: state.options.feel,
  categories: state.options.categories,
  category: state.options.category,
  isConnected: state.network.isConnected,
});

export default connect(mapStateToProps)(From);