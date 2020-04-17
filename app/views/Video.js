import React from 'react';
import { Text, View, FlatList } from 'react-native';
import TubeItem from '../sections/TubeItem';

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
        const  {navigate}  = this.props.navigation;
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

