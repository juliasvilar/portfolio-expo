import { View, Text, StyleSheet } from "react-native"

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>mitsy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        padding: 32,
        justifyContent: "center"
    },
    
    title: {
        color: "yellow", 
        fontSize: 130,
        fontWeight: "bold",
    }
})