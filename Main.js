import { useState } from 'react';
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
                <Text style={styles.subtitle}>Enter the size of the room</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Size"
                    keyboardType="numeric"
                    value={size}
                    onChangeText={text => setSize(text)}
                />
            </View>

            <View>
                <Text style={styles.subtitle}>Enter the cost of the flooring</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Flooring Cost"
                    keyboardType="numeric"
                    value={flooring_cost}
                    onChangeText={text => setFlooring(text)}
                />
            </View>

            <View>
                <Text style={styles.subtitle}>Enter the cost of the installation</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Installation Cost"
                    keyboardType="numeric"
                    value={installation_cost}
                    onChangeText={text => setInstallation(text)}
                />
            </View>

            <View>
            </View>

            <View style={styles.switch}>
                <Text style={styles.subtitle}>Square Feet</Text>
                <Switch
                    onValueChange={() => setFeet(!feet)}
                    value={feet}
                />

                <View>
                    <Text style={styles.subtitle}>Square Meters</Text>
                </View>

            </View>
            <Button
                title="Calculate"
                onPress={Calculate}
            />
            <View>
                <Text style={styles.subtitle}>Before Tax</Text>
                <Text style={styles.subtitle}>Flooring Cost: {flooring_cost}</Text>
                <Text style={styles.subtitle}>Installation Cost: {installation_cost}</Text>
                <Text style={styles.subtitle}>Total Cost: {total_cost}</Text>
                <Text style={styles.subtitle}>{message}</Text>
            </View>

            <View>
                <Text style={styles.subtitle}>After Tax</Text>
                <Text style={styles.subtitle}> Tax: {total_cost} * 0.13 = {total_cost * 0.13} </Text>
                <Text style={styles.subtitle}>Flooring Cost: {flooring_cost * 0.13}</Text>
                <Text style={styles.subtitle}>Installation Cost: {installation_cost * 0.13}</Text>
                <Text style={styles.subtitle}>Total Cost: {total_cost * 0.13}</Text>
                <Text style={styles.subtitle}>{message}</Text>
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

export default Main;

