import GoogleMapReact from 'google-map-react'
import Locationmarker from './Locationmarker'

const Maps = ({center,zoom, eventData}) => {
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8){
            return <Locationmarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{key:
            'YOUR API KEY'}}
            defaultCenter={center}
            defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  )
}

Maps.defaultProps = {
    center:{
        lat : 17.36,
        lng : 78.47
    },
    zoom : 2
}


export default Maps
