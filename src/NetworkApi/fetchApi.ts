export const fetchData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10');
        const data =  response.json();
        return data
    }
    catch(e) {
        return false
    }
}