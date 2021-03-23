import{createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScree'

const navigator = createStackNavigator (
  {
    Home : HomeScreen ,
    ComponentScreen : ComponentScreen,
    List : ListScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    ColorScreen : ColorScreen
  },
  {
    initialRouteName : "Home",
    defaultNavigationOptions: {
      title : 'App'
    }
  }
);
export default createAppContainer(navigator)