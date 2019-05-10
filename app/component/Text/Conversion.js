import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './styles';

const Conversion = (props) => {

    const { base, quote, rate, date } = props;
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.smallText}>
                1 {base} = {rate} {quote} as of {moment(date).format('MMMM D, YYYY')}
            </Text>
        </View>
    );
};

Conversion.propTypes = {
    base: PropTypes.string,
    quote: PropTypes.string,
    rate: PropTypes.number,
    date: PropTypes.object,
};

export default Conversion;