import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './campus_maps_maptiler.css';

export default function CampusMapsMaptiler() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const ufcg = { lng: -35.908225, lat: -7.214407 };
    const zoom = 17;
    const geoData = process.env.REACT_APP_MAPTILER_DATASET_ID;
    maptilersdk.config.apiKey = process.env.REACT_APP_MAPTILER_API_KEY;

    useEffect(() => {
        if (map.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style:     maptilersdk.MapStyle.BASIC,
            center:    [ufcg.lng, ufcg.lat],
            zoom:      zoom
        });

        map.current.on("load", async () => {
            const res = await fetch(geoData);
            const data = await res.json();

            const polygons = {
                "type": "FeatureCollection",
                "features": data.features.filter(f => f.geometry.type === "Polygon"),
                "metadata": data.metadata
            };

            const points = {
                "type": "FeatureCollection",
                "features": data.features.filter(f => f.geometry.type === "Point"),
                "metadata": data.metadata
            };

            // poligonos
            maptilersdk.helpers.addPolygon(map.current, {
                data: polygons,
                fillColor: "#0f0a5bff",
                outline: true,
                outlineWidth: 2,
                outlineColor: "#0f0a5bab",
                outlineDashArray: "_ ",
                fillOpacity: 0.7,                
            });
            
            map.current.addSource('points', {
                'type': 'geojson',
                'data': points
            });

            map.current.addLayer({
                id: 'point-layer',
                type: 'symbol',
                source: 'points',
                layout: {
                    'icon-image': 'marker',
                    'icon-size': 1.8,
                    'icon-padding': 15,
                },
                paint: {
                    'icon-color': '#18727eff',
                }
            });

            const popup = new maptilersdk.Popup({
                closeButton: false,
                closeOnClick: true
            });

            map.current.on('mouseenter', 'point-layer', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const props = e.features[0].properties;

                let desc = '';
                if (props.description) {
                    desc = props.description;
                    if (props.description.startsWith('http')) {
                        desc = `<a 
                                    href='${props.description}' 
                                    target='_blank'
                                    >${props.description}</a>`;
                    }
                }

                const description = `
                    <strong>${props.Name}</strong>
                    <br>
                    ${desc}
                `;

                popup.setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map.current);
            });

            map.current.on('mouseleave', 'point-layer', () => {
                // popup.remove(); // depois alterar o layer pq ele retem apenas os pontos, e o usuário não consegue copiar as mensagens dos popups
            });
        })
    }, [ufcg.lng, ufcg.lat, zoom, geoData]);

    return (
        <div className='map-wrap'>
            <div ref={mapContainer} className='map' />
        </div>
    )
}