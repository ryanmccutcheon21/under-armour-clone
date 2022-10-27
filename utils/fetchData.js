export const options = {
    method: 'GET',
    params: { limit: '24', offset: '1', dimensionValueID: 'AgeAppropriate:Teens' },
    headers: {
        'X-RapidAPI-Key': '3ebcd836a6mshb11d1b6b62d7cfdp1239d5jsna8b91851f777',
        'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}