import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import { colors } from 'material-ui/styles';
import './player-info.css';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);

        this.title = 'Friends ';
        this.friendsList = [{
            friendID: '1',
            name: 'James Haskel',
            friendImage: 'https://www.primeperformersagency.co.uk/uploads/images/crop/350/350/speakers/James%20Haskell%20440%20x%203.jpg',
            currentStatus: 'online'
        }, {
            friendID: '2',
            name: 'Lionel Messi',
            friendImage: 'http://fc-barcelone.com/assets/media/2016/08/messi.jpg',
            currentStatus: 'offline'
        }, {
            friendID: '3',
            name: 'James Rodriguez',
            friendImage: 'https://www.101greatgoals.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-26-at-1.18.50-PM.jpg',
            currentStatus: 'online'
        }, {
            friendID: '4',
            name: 'Franco Baresi',
            friendImage: 'http://newarena.com/wp-content/uploads/2017/03/3-22.png',
            currentStatus: 'offline'
        }, {
            friendID: '5',
            name: 'Zlatan Ibrahimović',
            friendImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Zarya-MU_%287%29_%E2%80%94_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg',
            currentStatus: 'offline'
        }];
        this.styles = {
            paperListStyles: {
                display: 'inline-block',
                cursor: 'pointer'
            },
            paperStyles: {
                textAlign: 'center',
                margin: 20,
                overflow: 'hidden',
                height: 100,
                width: 100,
            }
        }

        this.goToFriend = (friendID) => {
                
        };
    }

    render() {
        const friendListMap = this.friendsList.map((friend) => {
            const friendLink = `/friend/${friend.friendID}`;
            return (<li style={this.styles.paperListStyles} onClick={(evt)=> this.goTofriend(friend.friendID)} >
                        <Link to={friendLink}>
                            <Paper
                            zDepth={3}
                            style={this.styles.paperStyles}
                            circle={true}>
                                <img src={friend.friendImage} width="100%" />
                            </Paper>
                            <CardText style={{textAlign: 'center'}}>{friend.name}</CardText>
                        </Link>
                        <span className={friend.currentStatus}></span>
                    </li>);
        });
        return(
            <React.Fragment>
                <Card>
                    <CardTitle
                        title={this.title}
                    ></CardTitle>
                    <ul>
                        {friendListMap}
                    </ul>
                </Card>
            </React.Fragment>
        )
    }
};