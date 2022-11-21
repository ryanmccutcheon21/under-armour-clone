export const options = {
    method: 'GET',
    params: { limit: '24', offset: '1', dimensionValueID: 'AgeAppropriate:Teens' },
    headers: {
        'X-RapidAPI-Key': '10eb320015msh77bfb483b9a35ecp1baac1jsnb2d118d815d3',
        'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    }
};

export const mediaUrl = 'https://kohls.p.rapidapi.com/products/list'


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}