import react from 'react';
import {View, Text} from 'react-native';

  function App() {
    return (

      // BOX ONE
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      //BOX TWO (ROW
        <View style={{width: 300, height: 300, backgroundColor: 'black', flexDirection: 'row', flexWrap: 'wrap'}}>

              <View style={{ width: '50%', height: '50%', backgroundColor: 'yellow' }}s>
                  <Text style={{fontWeight: 'bold'}}> Texto 1 lalala 1234</Text>
                  <Text style={{fontWeight: 'semibold'}}> Texto 1 lalala 1234</Text>
                  </View>
              <View style={{ width: '50%', height: '50%', backgroundColor: 'green' }}>
                  <Text style={{color: 'blue'}}> Texto 2 lalala 1234</Text>
                  <Text style={{color: 'orange'}}> Texto 2 lalala 1234</Text>

                  </View>
              <View style={{ width: '50%', height: '50%', backgroundColor: 'red' }}>
                  <Text style={{fontSize: '30px'}}> Texto 3 lalala 1234</Text>
                  </View>
              <View style={{ width: '50%', height: '50%', backgroundColor: 'blue' }}>
                  <Text> Texto 4 lalala 1234</Text>
              </View>
        </View>
      </View>


  ) }

  export default App;
