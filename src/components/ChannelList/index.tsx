import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ServerName: React.FC = () => (
    <Container>
        <Category>
            <span>CANAIS DE TEXTO</span>
            <AddCategoryIcon />
        </Category>

        <ChannelButton selected channelName="chat-livre" />
        <ChannelButton channelName="regras" />
        <ChannelButton channelName="trabalho" />
        <ChannelButton channelName="lol" />
    </Container>
)

export default ServerName;