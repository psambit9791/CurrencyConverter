import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const HomeStack = createStackNavigator({ 
    Home: Home,
    CurrencyList: CurrencyList,
},
{
    mode: 'modal',
    headerMode: 'none'
}
);

export default createAppContainer(HomeStack);