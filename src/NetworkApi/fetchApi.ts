export const fetchData = async (page: number) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?${page * 10}&_limit=20`);
        const data =  response.json();
        return data
    }
    catch(e) {
        return false
    }
}