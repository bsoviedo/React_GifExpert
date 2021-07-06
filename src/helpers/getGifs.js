export const getGif = async (search) => {

    const api_key = 'xPnqzSijoXkXdhjeKHbpnUdAL4Xfk82x'

    const url = 'https://api.giphy.com/v1/gifs/search'

    let search_url = url + '?api_key=' + api_key + '&q=' + encodeURI(search)

    const resp = await fetch(search_url)

    const { data } = await resp.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}
