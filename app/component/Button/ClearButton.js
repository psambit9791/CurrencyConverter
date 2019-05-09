import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles'

const ClearButton = (props) => {

    const { onPress, text } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapper}>
                <Image resizeMode='contain' style={styles.icon} source={require('./images/logo.png')} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

ClearButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
}
export default ClearButton;