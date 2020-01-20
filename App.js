import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import InputForm from './components/InputForm';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Income/ Expense Input</Text>
      <InputForm />
    </View>
  );
};

const TableScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TableScreen</Text>
    </View>
  );
};

const ChartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChartScren</Text>
    </View>
  );
};

const GraphScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GraphScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-calculator'} />
          </View>
        ),
      },
    },
    TableScreen: {
      screen: TableScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-grid'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: {backgroundColor: '#2163f6'},
      },
    },
    ChartScreen: {
      screen: ChartScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'md-pie'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: {backgroundColor: '#2c6d6a'},
      },
    },
    GraphScreen: {
      screen: GraphScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-stats'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: {backgroundColor: '#d13560'},
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: {backgroundColor: '#694fad'},
  },
);

export default createAppContainer(TabNavigator);
