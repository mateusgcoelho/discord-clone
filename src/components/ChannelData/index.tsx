import React from 'react';

import ChannelMessage from '../ChannelMessage';
import { Mention } from '../ChannelMessage/styles';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => (
    <Container>
        <Messages>
            <ChannelMessage
                author='Mateus'
                date='21/06/2021'
                content='Ola men tudo bem'
            />
            <ChannelMessage
                author='Mateus'
                date='21/06/2021'
                content={
                    <>
                        <Mention>@Mateus</Mention>, ola lindinho eu seja bem vindo a mensagem teste
                    </>
                }
                hasMention
            />
        </Messages>

        <InputWrapper>
            <Input type='text' placeholder='Conversar #chat-livre' />
            <InputIcon />
        </InputWrapper>
    </Container>
)

export default ChannelData;