export const clothesOptions = {
    method: 'GET',
    params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_ASOS_KEY,
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}