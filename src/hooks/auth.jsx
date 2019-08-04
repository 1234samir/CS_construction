import {useState, useEffect} from 'react';
import {Firebase} from '../' 

export function useAuthState() {
    const [authState, setAuthState] = useState(null); // [value, valueSetter]
    const checkAuthState = async () => await Firebase.auth().currentUser;
    useEffect(() => {
        setAuthState(checkAuthState())
}, [])
    return [authState] // null, 
}
