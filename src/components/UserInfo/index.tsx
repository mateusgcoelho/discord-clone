import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => (
    <Container>
        <Profile>
            <Avatar />
            <UserData>
                <strong>MateusCoelho</strong>
                <span>#9107</span>
            </UserData>
        </Profile>

        <Icons>
            <MicIcon />
            <HeadphoneIcon />
            <SettingsIcon />
        </Icons>
    </Container>
)

export default UserInfo;