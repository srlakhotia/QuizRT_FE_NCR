import React from 'react';
import AppBar from 'material-ui/AppBar';
import TopicList from './components/topicList.component';

const Home = () =>{
    return (
        <React.Fragment>
            <AppBar
                title="Player"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton={false}
            />
            <TopicList></TopicList>
        </React.Fragment>
    )
} 

export default Home