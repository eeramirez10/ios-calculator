import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
       
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal: 20,
        justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:18,
      
        paddingHorizontal:10,
        flexWrap:'wrap',
        

    },

})