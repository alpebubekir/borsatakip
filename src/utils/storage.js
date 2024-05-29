import AsyncStorage from "@react-native-async-storage/async-storage";

export const addNewId = async  (id) => {
    try {
        let ids = await AsyncStorage.getItem("favorites");
        if (ids === null) {
            ids = [];
        } else {
            ids = JSON.parse(ids);
        }
        ids.push(id);
        await AsyncStorage.setItem("favorites", JSON.stringify(ids));
    } catch (error) {
        console.log(error);
    }
}

export const getIds = async () => {
    try {
        return (await AsyncStorage.getItem("favorites") ?? [] );
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const removeId = async (id) => {
    try {
        let ids = await AsyncStorage.getItem("favorites");
        if (ids === null) {
            return;
        } else {
            ids = JSON.parse(ids);
        }
        ids = ids.filter((item) => item !== id);
        await AsyncStorage.setItem("favorites", JSON.stringify(ids));
    } catch (error) {
        console.log(error);
    }
}