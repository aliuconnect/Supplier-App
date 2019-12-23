const initialState = {
    user:[
       
    ],
    message:null
}

const sigIn = (state = initialState , action) =>{
    switch(action.type){

        case "DEFAULT_SOMETHING":
            return{
                ...state,
                message:null,
            }

        case 'LOGIN_ASYNC':
            const newState = state.user;
            newState.push({id:newState.length+1 , accessToken:action.payload})
            return {
                ...state,
                user:[...newState],
                message:"Successfully Logged In"
            }
        case 'LOGIN_FAILED_ASYNC':
            return{
                ...state , 
                message:action.payload
            } 
        
        case 'EMPTY_FIELD':  
            return{
                ...state , 
                 message:action.payload
            }
            case 'UPDATE_MESSAGE':  
            return{
                ...state , 
                 message:null
            }

    }
    return state;

}
export default sigIn;