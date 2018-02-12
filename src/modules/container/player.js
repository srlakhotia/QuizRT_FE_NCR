import React from 'react';
import AppBar from 'material-ui/AppBar';


class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                title="<Player Name>"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton={false}
            />
        )
    }
}

export default Player;