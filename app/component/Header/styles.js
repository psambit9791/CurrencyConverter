import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        '@media ios': {
            paddingTop: 20,
        },
        '@media android': {
            paddingTop: StatusBar.currentHeight,
        }
    },
    button: {
        alignItems: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    icon: {
        width: 18,
    }
});