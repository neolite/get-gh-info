import React from 'react';
import styled from 'styled-components';
import { createStore, sample } from 'effector'
import { createGate, useGate, useStore } from 'effector-react'

import { getUserInfo, $githubUser } from './init';

import { CompanyIcon } from './components/CompanyIcon';
import { EmailIcon } from './components/EmailIcon';
import { TwitterIcon } from './components/TwitterIcon';

const Page = createGate('page')

const $user = createStore<{ login: string }>({
    login: 'gaearon'
})

sample({
    source: $user,
    clock: Page.open,
    target: getUserInfo,
});

const StyledFollowButton = styled.button`
    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    border: 1px solid;
    border-color: rgba(27, 31, 36, 0.15);
    cursor: pointer;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 6px;
`;

const StyledApp = styled.div`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    width: 296px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Avatar = styled.div<{ url: string }>`
    background-image: url(${({ url }) => url});
    border-radius: 50%;
    object-fit: cover;
    width: fit-content;
    min-width: 260px;
    min-height: 260px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Name = styled.h1`
    display: flex;
    margin-bottom: 0px;
    line-height: 24px;
`;

const Login = styled.span`
    text-align: start;
    opacity: 0.75;
    line-height: 24px;
    margin: 4px 0 16px 0;
`;


const StyledStats = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4px 0;
`;

const StyledStatItem = styled.span`
    margin: 2px;
    font-size: 14px;
    line-height: 21px;
    overflow-wrap: break-word;
    white-space: nowrap;
`;

const StyledCompanyIcon = styled(CompanyIcon)`
    margin: 2px;
`;
const StyledEmailIcon = styled(EmailIcon)`
    margin: 2px;
`;
const StyledTwitterIcon = styled(TwitterIcon)`
    margin: 2px;
`;

const StyledInfo = styled.div`
    display: flex;
    justify-content: flex-start;
`;

function App(props: any) {
    const loading = useStore(getUserInfo.pending)
    const user = useStore($githubUser);

    useGate(Page, props)

    if (loading) {
        return <p>loading...</p>;
    }
    return (
        <StyledApp>
            <Avatar url={user.avatarUrl}/>
            <Name>{user.name}</Name>
            <Login>{user.login}</Login>
            <StyledFollowButton>Follow</StyledFollowButton>
            <StyledStats>
                <StyledStatItem>{user.followers?.totalCount} followers</StyledStatItem>
                .
                <StyledStatItem>{user.following?.totalCount} following</StyledStatItem>
                .
                <StyledStatItem>{user.starredRepositories?.totalCount} starred</StyledStatItem> 
            </StyledStats>
            <StyledInfo>
                <StyledCompanyIcon />
                    &nbsp;
                    {user.company}
            </StyledInfo>
            <StyledInfo>
                <StyledEmailIcon />
                &nbsp;
                {user.email}
            </StyledInfo>
            <StyledInfo>
                <StyledTwitterIcon />
                &nbsp;
                {user.twitterUsername}
            </StyledInfo>
        </StyledApp>
    );
}

export default App;
