import React, {Component}from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { Rating } from 'material-ui-rating';
import './player-info.css';

export  default class PlayerInfo extends React.Component{
    render () {

       return (
            <Card className="playerInfo">
                <Avatar src="http://thefederalist.com/wp-content/uploads/2013/12/McMorris.jpg" size={150} />
                <CardTitle title={this.props.playerName || "Andrew Subramanian"} subtitle={"Knight from 1600 DC"} />
                <Rating
                    value = {this.props.rating || 3}
                    max = {5}

                    readOnly={true}
                ></Rating>
                <CardText>
                    {this.props.description}
                </CardText>

            </Card>
       )
    }
};

PlayerInfo.propTypes = {
    playerPhoto : PropTypes.string

};


