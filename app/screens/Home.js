import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../component/Container';
import { Logo } from '../component/Logo';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
    </Container>
);