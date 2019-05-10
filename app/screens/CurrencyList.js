import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../component/List';
import PropTypes from 'prop-types';

import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {
    static navigationOptions = ( { navigation } ) => {
        console.log('Title Details');
        console.log(navigation.getParam('title'));
        return {
            title: navigation.getParam('title')
        }
    };

    static propTypes ={
        navigation: PropTypes.object,
    };

    handlePress = () => {
        console.log('Currency Changed');
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View>
                <StatusBar translucent={false} barStyle='dark-content' />
                <View style={{paddingTop: 20}}/>
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => 
                        <ListItem 
                            text={item}
                            selected={ item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
                <View style={{paddingBottom: 20}}/>
            </View>
        );
    }
}

export default CurrencyList;