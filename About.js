import {View, Text, StyleSheet, Button, Switch} from 'react-native';


function About ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Button style={styles.btn} title="Home Page" onPress={() => navigation.navigate('Home')}/>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffb380',
        margin:20,
        borderRadius:20

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily:'Didot-Italic'
    },
    subtitle: {
        fontSize: 25,
        marginBottom: 10,
        fontFamily:'Didot-Italic'
    },
    about:{
        backgroundColor: '#fff',
        padding: 5,
        borderRadius:50,
        borderWidth:2,
        top:1,
    },
    btn:{
        margin:10,
    }
});

export default About;