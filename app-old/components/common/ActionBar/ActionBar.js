// Dependencies
import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableWithoutFeedback 
} from 'react-native';

// Styles
import styles from './styles';

export default class ActionBar extends Component {
	constructor(props) {
    super(props);
    
		this.state = { 
			type: 'home', 
			textTitle: 'Feed' 
		};
	}

	componentWillMount() {
		const type = this.props.type;
		let textTitle = '';

		switch (type) {
			case "notifications": {
				textTitle = 'Notifications';
				break;
			}
			case "search":
				textTitle = 'Search';
				break;
			case "messages":
				textTitle = 'Messages';
				break;
			default:
				textTitle = 'Twitter Feed';
				break;
		}

		this.setState({ 
			type: type, 
			textTitle: textTitle 
		});
	}

	onPressProfileImage() { console.warn(this.props); }

	render() {
		const { 
			textTitle, 
			type 
		} = this.state;

		return (
			<View style={ styles.actionBar }>
				<TouchableWithoutFeedback onPress={this.onPressProfileImage.bind(this)}>
					<Image style={styles.profileImage} /* source={} */ />
				</TouchableWithoutFeedback>
			</View>
		);
	}
}