import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// import mineIcon from './mine-icon.png'; // Make sure to import your custom marker icon

import './retail.css';

const Retail = () => {
    useEffect(() => {
        const initializeMap = () => {
            const mineLocations = [
                { name: 'Ballari', location: [15.1394, 76.9214] },
                { name: 'Ongole', location: [15.9129, 80.1563] },
                { name: 'Meerut', location: [28.6139, 77.2090] },
                { name: 'Delhi', location: [28.6139, 77.2090] },
                { name: 'Gandhinagar', location: [23.2156, 72.6369] },
                { name: 'Ahmedabad', location: [23.0225, 72.5714] },
                { name: 'Bangalore', location: [12.9716, 77.5946] },
                { name: 'Kanpur', location: [26.4499, 80.3319] },
                { name: 'Jamshedpur', location: [22.8046, 86.2029] },
                { name: 'New Delhi', location: [28.6139, 77.2090] },
                { name: 'Agra', location: [27.1767, 78.0081] },
                { name: 'Meerut', location: [28.9845, 77.7064] }
    
                // ... (add other locations as needed)
            ];

            const map = L.map('map').setView([20.5937, 78.9629], 5);

            // Add OpenStreetMap as the base map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
            }).addTo(map);

            // Define a custom icon for the markers
            const customIcon = L.icon({
                iconUrl: `${process.env.PUBLIC_URL}/mine-icon.png`,
                
                iconSize: [32, 32], // Adjust the icon size as needed
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            // Add markers for each mine location
            mineLocations.forEach((mine) => {
                const marker = L.marker(mine.location, { icon: customIcon }).addTo(map);

                // Add pop-up with mine details when marker is clicked
                marker.bindPopup(`<b>Mine:</b> ${mine.name}<br><b>Latitude:</b> ${mine.location[0]}<br><b>Longitude:</b> ${mine.location[1]}`);
            });
        };

        // Call the initializeMap function when the component mounts
    }, []);

    return <div id="map" />;
};

export default Retail;