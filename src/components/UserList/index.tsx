import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    isBot?: boolean;
    nickname: string;
}

const UserRow: React.FC<UserProps> = ({
    isBot,
    nickname
}) => (
    <User>
        <Avatar className={isBot ? 'bot' : ''} />

        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}
    </User>
)

const UserList: React.FC = () => (
    <Container>
        <Role>Disponivel - 1</Role>
        <UserRow nickname="Mateus Coelho" />

        <Role>Offline - 18</Role>
        <UserRow nickname="Pedrinho" isBot />
    </Container>
)

export default UserList;