import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FetchLocation from './components/FetchLocation'
import OpenMap from 'react-native-open-maps'

export default class App extends React.Component {

    state = {

        userLocation: null

    }

    geUserLocationHandeler = () => {

        navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    userLocation: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }

                })

                OpenMap({
                    latitude: this.state.userLocation.latitude,
                    longitude: this.state.userLocation.longitude
                });

            }, err => console.log(err)
        );

    };

    render() {
        return (
            <View style={styles.container}>
                <FetchLocation
                    onGetLocation={this.geUserLocationHandeler}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
