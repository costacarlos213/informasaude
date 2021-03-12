import React, { useRef, useState, useEffect } from 'react'
import { MapContainer, MapDiv } from '../styles/components/map'

interface IMap {
  mapType: google.maps.MapTypeId
  mapTypeControl?: boolean
}

type GoogleLatLng = google.maps.LatLng
type GoogleMap = google.maps.Map

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<GoogleMap>()

  const initMap = (zoom: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoom,
          center: address,
          mapTypeControl: mapTypeControl,
          mapTypeId: mapType,
          streetViewControl: false,
          zoomControl: true,
          mapMaker: true
        })
      )
    }
  }

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(-23.533773, -46.62529)
    initMap(18, defaultAddress)
  }

  const startMap = (): void => {
    if (!map) {
      defaultMapStart()
    }
  }

  useEffect(startMap, [map])

  return (
    <MapContainer>
      <MapDiv ref={ref} className="map-container__map"></MapDiv>
    </MapContainer>
  )
}

export default Map
