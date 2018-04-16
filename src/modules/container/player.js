import React from 'react';
import AppBar from 'material-ui/AppBar';
import TopicList from '../components/topicList.component';
import PlayerInfo from '../components/player-info';
import FriendsList from '../components/playerFriends.component';
import NewsFeed from '../components/playerNewsFeed.component';
import PlayerStats from '../components/playerStats.component';


class Player extends React.Component {
    constructor(props) {
        super(props);

        this.playerName = "Ethan Hunt"
    }

    render() {
        return (
            <React.Fragment>
                <AppBar
                    title={this.playerName}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    showMenuIconButton={false}
                />
                <PlayerInfo playerName={this.playerName}></PlayerInfo>
                <TopicList></TopicList>
                <FriendsList></FriendsList>
                <NewsFeed></NewsFeed>
            </React.Fragment>
        )
    }
}

export default Player;