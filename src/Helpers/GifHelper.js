
 export  const getGif = async(nameCategory) =>{
        
    const api = await fetch(`http://api.giphy.com/v1/gifs/search?q=${nameCategory}&limit=10&api_key=lpr5DsZ9Qpegs1gE96PueMTLvlDsB04T`)
    const { data } = await api.json();
    
    
    
    let  daata = data.map( resp =>{
        return {
            id: resp.id,
            title: resp.title,
            url: resp.images.downsized.url
            
        }
    }) 
    
    return daata;
    
}