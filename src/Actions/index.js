export function login(props) {
    console.log('Input Props: ',props);
    
    return({
        type:'CHECK_LOGIN',
        payload:props,
    })
    
}

export function  updateMessage(props) {

    return({
        type: "UPDATE_MESSAGE",
        payload:props
    })
    
}