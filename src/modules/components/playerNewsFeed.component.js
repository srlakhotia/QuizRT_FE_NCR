import React, { Component } from 'react';
import {Card,  CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router-dom';

export default class TopicList extends Component {
    constructor(props) {
        super(props);

        this.title = 'News Feed';
        this.newsList = [{
            newsTitle: 'Injured MS Dhoni enthralled Mohali crowd with stunning one-handed six, watch video',
            newsLink: 'http://www.timesnownews.com/sports/cricket/ipl/article/kxip-vs-csk-ipl-2018-injured-ms-dhoni-enthralled-mohali-crowd-with-stunning-one-handed-six-watch-video/217728' 
        }, {
            newsTitle: 'Kidambi Srikanth thanks coach Pullela Gopichand after becoming World No. 1',
            newsLink: 'http://www.timesnownews.com/sports/tennis-badminton/article/kidambi-srikanth-thanks-coach-pullela-gopichand-after-becoming-world-no-1/216773' 
        }, {
            newsTitle: 'Sania Mirza shuts down troll who tells her she is no more an Indian after marrying into Pakistan',
            newsLink: 'http://www.timesnownews.com/sports/tennis-badminton/article/sania-mirza-shuts-down-troll-who-said-she-was-no-more-an-indian-after-marrying-into-pakistan/216601' 
        }, {
            newsTitle: 'CWG 2018: Indias medal-winning wrestler questioned by Police for providing unauthorised access to venue',
            newsLink: 'http://www.timesnownews.com/sports/commonwealth-games-2018-cwg/article/cwg-2018-indian-medal-winning-wrestler-questioned-by-police-for-providing-unauthorised-access-to-venue/217741' 
        }, {
            newsTitle: 'La Liga: Atletico Madrid ease to win over Levante',
            newsLink: 'http://www.timesnownews.com/sports/football/article/la-liga-atletico-madrid-ease-to-win-over-levante-fernando-torres/217708' 
        }, {
            newsTitle: 'La Liga: Isco leads Real Madrid to Malaga win as Zinedine Zidane rests Cristiano Ronaldo, Gareth Bale',
            newsLink: 'http://www.timesnownews.com/sports/football/article/la-liga-isco-leads-real-madrid-to-malaga-win-as-zinedine-zidane-rests-cristiano-ronaldo-gareth-bale/217711' 
        }];
        this.styles = {
            paperListStyles: {
                cursor: 'pointer'
            }
        }

        this.goToNews = (newsID) => {
                
        };
    }

    render() {
        const newsListMap = this.newsList.map((news) => {
            return (<li style={this.styles.paperListStyles}>
                        <Link to={news.newsLink} target="_blank">
                            <CardText >{news.newsTitle}</CardText>
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
                        {newsListMap}
                    </ul>
                </Card>
            </React.Fragment>
        )
    }
};