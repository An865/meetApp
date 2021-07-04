import React, { Component }  from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventsNumber from './EventsNumber';
import { getEvents, extractLocations } from './api';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numEvents: 32,
    currentLocation: 'all'
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
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventsNumber numEvents={this.state.numEvents} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
      </div>
    );
  }

}


export default App;
