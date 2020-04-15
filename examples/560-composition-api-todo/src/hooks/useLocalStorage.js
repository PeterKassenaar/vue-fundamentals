// hooks/useLocalStorage
// a hook to be used in Vue composition API to save a particular object to localStorage
// for future use. Not done yet (e.g. returned object is not reactive)

const STORAGE_KEY = 'todos-composition-api';

export default () => {
    // 1. save todos to localStorage
    const save = (todos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }

    // 2. fetch todos from localstorage
    const fetch = () =>{
        return JSON.parse(localStorage.getItem(STORAGE_KEY));
    }

    // 3. clear localStorage
    const clear = () =>{
        localStorage.clear()
    }
    return {
        save,
        fetch,
        clear
    }
}
