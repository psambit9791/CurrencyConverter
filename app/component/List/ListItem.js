import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = (props) => {
    
    const { text, selected, onPress } = props;
    return (
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{text}</Text>
                {selected ? <Text>Selected</Text> : null}
            </View>

        </TouchableHighlight>
    );
};

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
};

export default ListItem;