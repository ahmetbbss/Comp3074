import { PureComponent, useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, TextInput } from 'react-native';


function Main({ navigation }) {

    const [size, setSize] = useState();
    const [flooring, setFlooring] = useState();
    const [installation, setInstallation] = useState();

    const [flooring_cost, setFlooringCost] = useState();
    const [installation_cost, setInstallationCost] = useState();
    const [total_cost, setTotalCost] = useState();

    const [feet, setFeet] = useState(false);
    const [message, setMessage] = useState();

    const Calculate = () => {

        if (feet) {
            setFlooringCost(size * flooring * 0.093);
            setInstallationCost(size * installation * 0.093);
            setTotalCost(size * flooring + size * installation);
            setMessage("Calculated in square feet");
        } else {
            setFlooringCost(size * flooring);
            setInstallationCost(size * installation);
            setTotalCost(flooring + installation);
            setMessage("Calculated in square meters");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Button title="About" onPress={() => navigation.navigate('About')} />
            </View>

            <View>
                <Text style={styles.title}>Flooring Calculator</Text>

                <View style={styles.div}>
                    <Text style={styles.div}>Enter the size of the room</Text>
                </View>
                
            </View>

            <View style={styles.subtitle}>
                <TextInput
                    style={styles.remember}
                    placeholder="Size"
                    keyboardType="numeric"
                    value={size}
                    onChangeText={text => setSize(text)}
                />
            </View>

            <View style={styles.div}>
                <Text style={styles.div}>Enter the cost of the flooring</Text>
            </View>
            
            <View style={styles.subtitle}>
                
                <TextInput
                    style={styles.remember}
                    placeholder="Flooring Cost"
                    keyboardType="numeric"
                    value={flooring_cost}
                    onChangeText={text => setFlooring(text)}
                />
            </View>

            <View style={styles.div}>
                <Text style={styles.div}>Enter the cost of the installation</Text>
            </View>
            
            <View style={styles.subtitle}>
                
                <TextInput
                    style={styles.remember}
                    placeholder="Installation Cost"
                    keyboardType="numeric"
                    value={installation_cost}
                    onChangeText={text => setInstallation(text)}
                />
            </View>

            <View>
            </View>

            <View style={styles.switch}>
                <Text style={styles.btn}>Square Feet</Text>
                <Switch
                    onValueChange={() => setFeet(!feet)}
                    value={feet}
                />
                <Text style={styles.btn}>Square Meters</Text>
                
            </View>
            
            <View style={styles.calc}>
                <Button style={styles.calc}
                    title="Calculate"
                    onPress={Calculate}
                />
            </View>
            
            <View>
                <Text style={styles.subtitle}>Before Tax</Text>
                <Text style={styles.subtitle}>Flooring Cost: {flooring_cost}</Text>
                <Text style={styles.subtitle}>Installation Cost: {installation_cost}</Text>
                <Text style={styles.subtitle}>Total Cost: {total_cost}</Text>
                <Text style={styles.subtitle}>{message}</Text>
                <Text></Text>
            </View>

            <View>
                <Text style={styles.subtitle}>After Tax</Text>
                <Text style={styles.subtitle}> Tax: {total_cost} * 0.13 = {total_cost * 0.13} </Text>
                <Text style={styles.subtitle}>Flooring Cost: {flooring_cost * 0.13}</Text>
                <Text style={styles.subtitle}>Installation Cost: {installation_cost * 0.13}</Text>
                <Text style={styles.subtitle}>Total Cost: {total_cost * 0.13}</Text>
                <Text style={styles.subtitle}>{message}</Text>
                <Text></Text>
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
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Didot-Italic',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        textAlign:'right',
        fontFamily: 'Baskerville-BoldItalic',
        margin:4
    },
    btn:{
        margin:10,
        fontFamily: 'Baskerville-BoldItalic',
        fontSize: 16,
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
        backgroundColor: '#fff',
        padding: 5,
        borderRadius:50,
        borderWidth:2,
        marginBottom:1

    },
    remember: {
        borderWidth:2,
        height:40,
        width:200,
        borderRadius:100,
        padding:8,
        backgroundColor:"white",
    },
    calc:{
        padding:3,
        margin:10,
        borderWidth:2,
        backgroundColor:'white',
        borderRadius:20

    },
    div:{
        textAlign:"center",
        margin:2,
        fontFamily: 'Baskerville-BoldItalic',
        fontSize: 16,

    }
});

export default Main;

