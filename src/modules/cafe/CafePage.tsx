import React, {PureComponent} from "react";
import {Text, View} from "react-native";
import {Image} from "react-native";
import {styleSheetCreate} from "../../common/utils";

export class CafePage extends PureComponent {

    render(): JSX.Element {
        const pic = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
        };

        return (
            <View style={styles.container}>
                <Text> Привет, Мир!</Text>
                <Image  source={pic} style={{width: 193, height: 250}}/>
            </View>
        );
    }
}

const styles = styleSheetCreate({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
