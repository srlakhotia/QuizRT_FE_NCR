import React from 'react';
import AppBar from 'material-ui/AppBar';


class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                title="Topic"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default Topic;