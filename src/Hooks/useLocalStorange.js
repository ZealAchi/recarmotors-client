
export function useLocalStorage() {
    const getData = async(key, SaveData) => {
        try {
            if (!SaveData) { alert('Error al obtener el dato') }
            else {
                await SaveData(JSON.parse(localStorage.getItem(key)))
            }
        } catch (error) {console.log(error)}
    }
    const setData = async(key, value) => {
        if (!value) { alert('Ingresa un valor') } else
           await localStorage.setItem(key, JSON.stringify(value));
    }
    const removeItem = async(key) => {
        await localStorage.removeItem(key);
    }
    return { getData, setData, removeItem }
}