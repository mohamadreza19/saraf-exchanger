import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { icon, latLng, LatLngBounds, MapOptions, Marker, marker, tileLayer } from 'leaflet';

@Component({
  selector: '[view-map]',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
})
export class MapComponent {
  options: MapOptions;
  layers: Marker[] = []; // Array to hold markers
  mapBounds: LatLngBounds;

  constructor() {
    // Define the initial map options
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '© OpenStreetMap contributors',
        }),
      ],
      zoom: 13,
      center: latLng(51.505, -0.09), // Initial center
      worldCopyJump: false, // Prevent map repetition
    };

    // Define bounds to prevent the map from being repeated
    this.mapBounds = new LatLngBounds(
      latLng(-85, -180), // Southwest corner
      latLng(85, 180), // Northeast corner
    );

    // Add markers
    this.addMarker(51.505, -0.09, 'First Marker (Centered)');
    this.addMarker(51.515, -0.1, 'Another Marker');
  }

  // Method to add markers and optionally center on a marker
  addMarker(lat: number, lng: number, popupText: string, centerMap = false) {
    const newMarker = marker([lat, lng], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      }),
    }).bindPopup(popupText);

    this.layers.push(newMarker); // Add the marker to the map

    // Center the map on the marker if specified
    if (centerMap) {
      this.options.center = latLng(lat, lng);
    }
  }
}
