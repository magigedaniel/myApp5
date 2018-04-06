import React from 'react';
import {Button, View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
                <Button
                    title="Go to Profile"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Profile', {
                            profileId: 106,
                        });
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        /* 2. Read the params from the navigation state */
        const {params} = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

class ProfileScreen extends React.Component {
    render() {
        //Try adding parama as well
        const { params } = this.props.navigation.state;
        const ProfileId = params ? params.profileId : 'NoProfileId';

        return (
            <View style={{}}>
                <Text>Profile screen</Text>
                <Text>Profile ID: {JSON.stringify(ProfileId)}</Text>
                <Button
                    title="Go Back"
                    onPress={()=>this.props.navigation.goBack()}

                />
            </View>
        );

    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}

