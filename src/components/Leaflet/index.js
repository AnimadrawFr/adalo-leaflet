import React, { Component, useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

class Leaflet extends Component {
  render() {
    const { color, text, mapsize } = this.props;

	console.log(mapsize)

    return (
      <View style={{ position: "relative", height: 200 }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%"}}
        >
          <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]}>
            <Popup>{text}</Popup>
          </Marker>
        </MapContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
});

export default Leaflet;
