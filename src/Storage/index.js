import AsynceStorage from '@react-native-community/async-storage'

export class Storage{
    _storeData = async(em) => {
        console.log('storeData');
        
        try {
            await AsynceStorage.setItem('Email' , em)
        } catch (error) {
            console.log(error);
            
        }
        _retrieveData()
    }
    
    _retrieveData = async () => {
        console.log('Retrieve data');
        
        try {
            const value = await AsynceStorage.getItem('Email')
            console.log('value' , value);
            
        } catch (error) {
            console.log(error);
            
        }
    }
}