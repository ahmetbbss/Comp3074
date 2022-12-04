import {View, Text, StyleSheet, Button, Switch} from 'react-native';


function About ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Button title="Home Page" onPress={() => navigation.navigate('Home')}/>
            </View>

            <View>
            <Text style={styles.title}>About Page</Text>
            <Text style={styles.subtitle}>This is a simple flooring calculator</Text>
            <Text style={styles.subtitle}>It will calculate the cost of flooring and installation</Text>
            <Text style={styles.subtitle}>It will also calculate the cost in square feet or square meters</Text>
            <Text style={styles.subtitle}>This app was created by: Ahmet Buyukbas - 101304595 </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    about: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default About;