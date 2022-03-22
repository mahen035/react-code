import React from 'react';
import {styles} from './style';
function CommonStyles(props) {
    return (
        <div>
            <div style={styles.TodoComponent}></div>
            <div style = {styles.Header}>This is a demo style taken from a common code</div>
        </div>
    );
}

export default CommonStyles;