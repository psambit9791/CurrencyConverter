import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../component/Container';
import { Logo } from '../component/Logo';
import { InputWithButton } from '../component/TextInput';
import { ClearButton } from '../component/Button';
import { Conversion } from '../component/Text';
import { Header } from '../component/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const CLEAR_BUTTON_TEXT = 'Reverse Currencies';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_DATE = new Date();

class Home extends Component {
    static navigationOptions = ( { navigation } ) => {
        return {
            header: null
        }
    };

    static propTypes ={
        navigation: PropTypes.object,
    }

    handlePressBaseCurrency = () => {
        console.log('Pressed Base');
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    };
    handlePressQuoteCurrency = () => {
        console.log('Pressed Quote');
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    };
    handleTextChange = (text) => {
        console.log('Changed Text', text);
    };
    handleSwapCurrency = () => {
        console.log('Clear Button Pressed');
    };
    handleSettingsButton = () => {
        console.log('Pressed Settings');
    }
    render()    {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleSettingsButton}/>
                <Logo />
                <KeyboardAvoidingView behavior="padding">
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                    />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlePressQuoteCurrency}
                        defaultValue={TEMP_QUOTE_PRICE}
                        editable={false}
                    />
                    <Conversion
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        rate={TEMP_CONVERSION_RATE}
                        date={TEMP_DATE}
                    />
                    <ClearButton
                        text={CLEAR_BUTTON_TEXT}
                        onPress={this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container>
        )
    };
}

export default Home;