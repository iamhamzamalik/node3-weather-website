const request= require('request')

const geocode= (adress, callback) =>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoiaGFtemEtbWFsaWsyNyIsImEiOiJjbGEyOXBlZHkwOXptM3dtbjRjZ3Fxa2ZlIn0.6ig-jM-WWTtCNx0_6KcZuQ&limit=1'
    
    request({url, json: true},(error,{body}) => {
        if (error){
                callback('Unable to connett location service!')
        }else if(body.features.lenght === 0){
            callback('unable yo find location!!')
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}

module.exports = geocode