import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  title:{
    fontSize: 18,
    color: '#da1a29',
    fontWeight: 'bold',
  },
  content:{
    height: 600,
    width: 300,
    textAlign:'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'white',
},
  infoInputs:{
    width: 290,
    alignSelf: 'center',
    padding: 15
  },
  limite:{
    display: 'flex',
    flexDirection:'colunm',
    marginTop: 10,
  },
  switchBR:{
    display: 'flex',
    flexDirection:'row',
    marginTop: 10
  },
  input:{
    height: 20,
    width: 240,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    margin: 10,
    fontSize: 14,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 16,
  },
  campos:{
    fontSize: 16,
  },
  pickerStyle:{
    alignSelf: 'center'
  },
  opcoes:{
    marginTop: 10,
    fontSize: 14,
    width: 240,
    borderRadius: 5,
    textAlign: 'center'
   
  },
  dadosRetorno:{
    marginTop: 25,
    fontSize: 14,
    borderWidth: 1,
    width: 280,
    padding: 15,
    marginBottom: 15
  },
  btnRetorno:{
    marginTop: 10
  },
  textRetorno:{
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
});


  export {styles};