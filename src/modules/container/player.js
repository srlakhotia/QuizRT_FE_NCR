import React from 'react';
import AppBar from 'material-ui/AppBar';
import TopicList from '../components/topicList.component';


class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <AppBar
                    title="<Player Name>"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    showMenuIconButton={false}
                />
                <TopicList></TopicList>
            </React.Fragment>
        )
    }
}

export default Player;