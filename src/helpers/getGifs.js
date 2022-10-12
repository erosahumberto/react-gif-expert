export const getGifs = async( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MmSRUFTK6Ccz8SyvzSnVR3er9Toysu7H&limit=10&q=${category}`;
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}