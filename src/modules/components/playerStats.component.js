import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';

export default class TopicList extends Component {
    constructor(props) {
        super(props);

        this.title = 'Topic list title';
        this.topicList = [{
            topicID: '1',
            title: 'Topic 1',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '2',
            title: 'Topic 2',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '3',
            title: 'Topic 3',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '4',
            title: 'Topic 4',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '5',
            title: 'Topic 5',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '6',
            title: 'Topic 6',
            topicImage: 'https://dummyimage.com/300',
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

        this.goToTopic = (topicID) => {
                
        };
    }

    render() {
        const topicListMap = this.topicList.map((topic) => {
            const topicLink = `/topic/${topic.topicID}`;
            return (<li style={this.styles.paperListStyles} onClick={(evt)=> this.goToTopic(topic.topicID)}>
                        <Link to={topicLink}>
                            <Paper
                            zDepth={3}
                            style={this.styles.paperStyles}
                            circle={true}>
                                <img src={topic.topicImage} width="100%" />
                            </Paper>
                            <CardText style={{textAlign: 'center'}}>{topic.title}</CardText>
                        </Link>
                    </li>);
        });
        return(
            <React.Fragment>
                <Card>
                    <CardTitle
                        title={this.title}
                    ></CardTitle>
                    <ul>
                        {topicListMap}
                    </ul>
                </Card>
            </React.Fragment>
        )
    }
};