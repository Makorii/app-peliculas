function useLocalStorage(key) {

    const getMovie = () => {
        const local = JSON.parse(localStorage.getItem(key)) || [];
        return local;
    };

    const saveMovie = (info) => {
        localStorage.setItem(key, JSON.stringify(info));
    };

  return [getMovie, saveMovie]
}

export default useLocalStorage