
const apiKey = 'o98YzurnsGVaiynPnBvBFQo6dwnsZMRy';
 
export default function getGifs({keyword = 'witch'}={}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`;

   return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response;
            if (Array.isArray(data)) {
                const gifs = data.map(image =>{

                    const {images, title, id} = image;
                    const {url} = images.downsized_medium;
                    return {title, id, url}
                } );
                return gifs;
            }
        })
}