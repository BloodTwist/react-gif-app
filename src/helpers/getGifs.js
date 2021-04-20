export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=HyDooWpDn4V6sMLUrKdllOXWQNgvAJfQ`;
    const { data } = await (await fetch( url )).json();

    const gifts = data.map( ( img ) =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return  gifts;
}