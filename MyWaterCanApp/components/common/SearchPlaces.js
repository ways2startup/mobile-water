import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import constants from '../../constants/constants';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export const SearchPlaces = () => {

  currentLocationSuccessAction = (details) => {
    this.props.currentLocationSuccessAction({latitude:details.geometry.location.lat ,longitude:details.geometry.location.lng})
  }
  
  return (
    <GooglePlacesAutocomplete
      placeholder='Where to deliver Water?'
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        debugger;
        this.currentLocationSuccessAction(details);
        console.log(data, details);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: constants.API_KEY, //AIzaSyBXSuOnKD1jTWv6RsZVKK6qqBuevq1dNCU // mine -> 'AIzaSyBM6Hjsj-tfs_dvFHbXGJ7QAXXvxz4SJ9U', others -> //AIzaSyC2QhtACfVZ2cr9HVvxQuzxd3HT36NNK3Q
        language: 'en', // language of the results
        // types: '(regions)', // default: 'geocode'
        componentRestrictions: {country: "IN"}
      }}
      
      styles={{
         height: 50, 
         backgroundColor: 'powderblue',
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      // nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'prominence'
        // types: 'food'
      }}

      // filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      filterReverseGeocodingByTypes={['sublocality', 'administrative_area_level_1', 'locality', 'administrative_area_level_3', 'administrative_area_level_2']}
      // predefinedPlaces={[homePlace, workPlace]}

      debounce={2000} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
      // renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
}