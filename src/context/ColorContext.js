import { createContext, useContext, useEffect, useReducer } from "react"
const colorProvider = createContext()

const initialValue = {
    color: true,
    onlineState: true,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'changeColor':
            return { colorCase: action.payload }
        case 'online':
            return { onlineCase: action.payload }
        default:
            return state
    }
}
const ColorContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const colorChange = () => {
        dispatch({ type: 'changeColor', payload: state.colorCase ? false : true });
    }
    const onlineCheck = () => {
        dispatch({ type: "online", payload: (state.onlineCase ? false : true) });
    }
    return (
        <colorProvider.Provider value={{ colorChange, onlineCheck, state }}>
            {children}
        </colorProvider.Provider>
    )
}
export default ColorContext
export const useChangeColor = () => { return useContext(colorProvider) }
