import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeddback } from 'react-native';


export class Video extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    async componentDidMount(){
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAMU_fNQv_pe9hJ_mFFtavWN-V8AuTccls');
            const responseJson = await response.json();
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return(
            <View>
                { this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <FlatList
                            data={ this.state.videoList }
                            renderItem={({item}) =>
                                <TubeItem
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    imageSrc={item.snippet.thumbnails.high.url}
                                />
                        }
                        />
                    </View>
                )}
                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30}}>
                        <Text> LOADING </Text>
                    </View>
                )}
            </View>
        );
    }
}

export class TubeItem extends React.Component {

    onPress = () => {
        console.log(this.props.id);
    };

    render() {
        return (
            <TouchableWithoutFeddback onPress={this.onPress}> 
                <View style={{ paddingTop: 20, alignItems: 'center'}}>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{ url: this.props.imageSrc }}
                />
                <Text>
                    {this.props.title}
                </Text>
                </View>
            </TouchableWithoutFeddback>

        );
    }
}