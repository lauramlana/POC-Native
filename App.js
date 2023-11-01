import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import FormScreen from './src/screens/FormScreen';
import DetailScreen from './src/screens/DetailScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen,
  Form: FormScreen,
  Detail: DetailScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'POC'
  },
}
)

export default createAppContainer(navigator)

