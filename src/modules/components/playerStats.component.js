import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

export default class Stats extends Component {
    constructor(props) {
        super(props);

        this.title = 'Player Statistics';
        this.statsList = [{
            statsListID: '1',
            title: 'Topic 1',
            status: 'Completed',
            level: 5
        }, {
            statsListID: '2',
            title: 'Topic 2',
            status: 'Completed',
            level: 4
        }, {
            statsListID: '3',
            title: 'Topic 3',
            status: 'Not Completed',
            level: 3
        }, {
            statsListID: '4',
            title: 'Topic 4',
            status: 'Not Completed',
            level: 2
        }, {
            statsListID: '5',
            title: 'Topic 5',
            status: 'Completed',
            level: 8
        }, {
            statsListID: '6',
            title: 'Topic 6',
            status: 'Not Completed',
            level: 10
        }];
        this.styles = {
            paperListStyles: {
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

        this.goToTopic = (statsListID) => {
                
        };
    }

    render() {
        const statsListMap = this.statsList.map((statsList) => {
            return (<li style={this.styles.paperListStyles}>
                       <CardText>{statsList.title} <br />
                       <span>{statsList.status} - Level {statsList.level} </span>
                       </CardText>
                    </li>);
        });
        return(
            <React.Fragment>
                <Card>
                    <CardTitle
                        title={this.title}
                    ></CardTitle>
                    <ul>
                        {statsListMap}
                    </ul>
                </Card>
            </React.Fragment>
        )
    }
};