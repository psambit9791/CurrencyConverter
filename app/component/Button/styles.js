import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:  {
        alignItems: 'center',
    },
    wrapper:    {
        alignItems: 'center',
        flexDirection: 'row'
    },
    text:   {
        fontWeight: '400',
        fontSize: 16,
        paddingVertical: 20,
        color: '$lightGray',
    },
    icon:   {
        width: 19,
        marginRight: 10,
    },
});