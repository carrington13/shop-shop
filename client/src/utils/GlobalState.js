/* createContext is used to instantiate a new Context object (created object to contain global state data) 
useContext allows us to use the state created from the createContext function */
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
// Provider is a special React Comp that wraps the App to make the state data globally available
const { Provider } = StoreContext;

// value isnt required for out app but enables for more data if we need to ...props is used to include all children, w/o it, nothing will be rendered
const StoreProvider = ({ value = [], ...props }) => {
    // every time we run StoreProvider, we instaniate initial Global State and dispatch = method used to update State.
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

// Custom Hook React. When executed from within a component, we will recieve the [state, dispatch]
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
