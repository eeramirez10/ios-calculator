import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

interface Props {
    texto: String;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: String) => void
}

export const Boton = ({ texto, color = "#2d2d2d", ancho = false, action }: Props) => {
    return (

        <TouchableOpacity
            onPress={() => action(texto)}
        >

            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: ancho ? 170 : 80
            }}>
                <Text style={{
                    ...styles.botonText,
                    color: color === '#9b9b9b' ? 'black' : 'white',
                    textAlign: ancho ? 'left' : 'center',
                    marginLeft: ancho ? 20 : 0
                }}

                >
                    {texto}
                </Text>
            </View>


        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({

    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginBottom: 10
    },
    botonText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '300'
    }



})


