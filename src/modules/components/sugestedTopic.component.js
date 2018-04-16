import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';

export default class SuggestedTopics extends Component {
    constructor(props) {
        super(props);

        this.title = 'Suggested Topics ';
        this.topicList = [{
            topicID: '4',
            title: 'Topic 4',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '8',
            title: 'Topic 8',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '9',
            title: 'Topic 9',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '16',
            title: 'Topic 16',
            topicImage: 'https://dummyimage.com/300',
        }, {
            topicID: '15',
            title: 'Topic 15',
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
                                <img src={topic.topicImage} width="100%" alt={topic.title} />
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