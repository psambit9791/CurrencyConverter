import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import InputWithButton from './InputWithButton';

const inputHeight = 48;
const borderRadius = 4;

export default EStyleSheet.create({

    $buttonBackgroundColorBase: '$white',
    $buttonBackgroundColorModifier: 0.1,

    container:  {
        alignItems: 'center',
        backgroundColor: '$white',
        width: '90%',
        height: inputHeight,
        borderRadius: borderRadius,
        flexDirection: 'row',
        marginVertical: 11,
    },
    containerDisabled:  {
        alignItems: 'center',
        backgroundColor: '$lightGray',
        width: '90%',
        height: inputHeight,
        borderRadius: borderRadius,
        flexDirection: 'row',
        marginVertical: 11,
    },
    buttonContainer:    {
        height: inputHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue',

    },
    input:  {
        height: inputHeight,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputText'
    },
    border: {
        height: inputHeight,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border'
    }
});