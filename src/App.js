import React, { Component }  from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventsNumber from './EventsNumber';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined,
  }

  //update events displayed by location or by number of events depending on passed values
  updateEvents = (location, eventCount ) => {
    // current state values
    const { currentLocation, numEvents } = this.state;
    //get events and filter by location if it's passed in (by default show numEvents)
    if(location){
      getEvents().then((events) => {
        const locationEvents = (location === 'all')
          ? events :
          events.filter((event) => event.location === location);
          //limit displayed number of events by current numEvents state
          let displayedEvents =  locationEvents.slice(0, numEvents)
        this.setState({
          events: displayedEvents,
          currentLocation: location,
        });
      }); 
      //filter events by currentLocation since location wasn't passed in
    } else {
      getEvents().then((events)=> {
        const locationEvents = (currentLocation === 'all')
        ? events :
        events.filter(event => event.location === currentLocation);
        //limit displayed number of events by eventCount if its passed else by numEvents
        if(eventCount){
          let displayedEvents = locationEvents.slice(0, eventCount)
          this.setState({
            events: displayedEvents
          })
          } else {
            let displayedEvents = locationEvents.slice(0, numEvents)
            this.setState({
              events: displayedEvents
            })
          }
      })
    }
  }

  //when component mounts, get events then set events and location state
  async componentDidMount() {
    this.mounted = true;
    //get and validate token from local storage, if none users enter new auth on login. 
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    //code used after getEvents()
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events: events.slice(0, this.state.numEvents), locations: extractLocations(events) });
        }
    }); }

    //alert user of offline status
    if(!navigator.onLine){
      this.setState({
        offlineAlert: 'you are offline, cached data is displayed'
      })
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    if (this.state.showWelcomeScreen === undefined) return <div
    className="App" />

    return (
      <div className="App">
         <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventsNumber numEvents={this.state.numEvents} updateEvents={this.updateEvents}/>
        <OfflineAlert text={this.state.offlinealert} />
        <EventList events={this.state.events} />
      </div>
    );
  }

}


export default App;
