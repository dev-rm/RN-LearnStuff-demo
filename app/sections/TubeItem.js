import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export class TubeItem extends React.Component {

    onPress = () => {
        console.log(this.props.navigation);
        console.log(this.props.id);
        this.props.navigation.navigate('VideoDetailRT', {ytubeId: this.props.id} );
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onPress}> 
                <View style={{ paddingTop: 20, alignItems: 'center'}}>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{ uri: this.props.imageSrc }}
                />
                <Text>
                    {this.props.title}
                </Text>
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

export default withNavigation(TubeItem);