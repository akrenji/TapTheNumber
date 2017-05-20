
import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        styleButton = {
            color: this.props.stylesButton.color,
            backgroundColor: this.props.stylesButton.backgroundColor,
            padding: 10,
            fontSize: 25,
            textAlign: 'center',
        };
    }
    render() {
        return (
            <TouchableOpacity  >
                <Text style={styleButton} >{this.props.name}</Text>
            </TouchableOpacity>
        );
    }

}
