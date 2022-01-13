import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Boton } from '../components/Boton';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('100');

    const ultimaOperacion = useRef<Operadores | ''>()


    const limpiar = () => {

        setNumero('0')
        setNumeroAnterior('0')

       ultimaOperacion.current = '';
    }

    const armarNumero = (numeroTexto: String) => {


        //Not acepted double point
        if (numero.includes('.') && numeroTexto === '.') return

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //decimal point
            if (numeroTexto === '.') {
                setNumero(`${numero}${numeroTexto}`)

                //evaluates if there is another cero and next there is a point
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(`${numero}${numeroTexto}`)

                //evaluar si es diferente de 0 y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(`${numeroTexto}`)

                //Evotar 000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(`${numero}`)
            } else {
                setNumero(`${numero}${numeroTexto}`)
            }
        } else {
            setNumero(`${numero}${numeroTexto}`)
        }
    }

    const eliminar = () => {

        let negativo = '';
        let numeroTemp = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1)
        }

        if (numeroTemp.length > 1) {

            setNumero(`${negativo}${numeroTemp.slice(0, -1)}`);
            return
        }
        setNumero('0')
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero(`-${numero}`)
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }

        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;


    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;


    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;


    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;


    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior)

        console.log(num1, num2)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1  }`)
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;

            default:
                
                break;
        }

        setNumeroAnterior('0')
    }



    return (
        <View style={styles.calculadoraContainer}>
            <Text
                style={styles.resultadoPequeno}
                numberOfLines={1}
                adjustsFontSizeToFit
            > {numeroAnterior === '0' ? '' : numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            > {numero}</Text>

            <View style={styles.fila}  >
                <Boton action={limpiar} texto="C" color='#9b9b9b' />
                <Boton action={positivoNegativo} texto="+/-" color='#9b9b9b' />
                <Boton action={eliminar} texto="del" color='#9b9b9b' />
                <Boton action={btnDividir} texto="/" color='#ff9427' />
            </View>
            <View style={styles.fila}  >
                <Boton action={armarNumero} texto="7" />
                <Boton action={armarNumero} texto="8" />
                <Boton action={armarNumero} texto="9" />
                <Boton action={btnMultiplicar} texto="x" color='#ff9427' />
            </View>
            <View style={styles.fila}  >
                <Boton action={armarNumero} texto="4" />
                <Boton action={armarNumero} texto="5" />
                <Boton action={armarNumero} texto="6" />
                <Boton action={btnRestar} texto="-" color='#ff9427' />
            </View>
            <View style={styles.fila}  >
                <Boton action={armarNumero} texto="1" />
                <Boton action={armarNumero} texto="2" />
                <Boton action={armarNumero} texto="3" />
                <Boton action={btnSumar} texto="+" color='#ff9427' />


            </View>
            <View style={styles.fila}  >
                <Boton action={armarNumero} texto="0" ancho />

                <Boton action={armarNumero} texto="." />
                <Boton action={calcular} texto="=" color='#ff9427' />
            </View>

        </View>
    )
}
