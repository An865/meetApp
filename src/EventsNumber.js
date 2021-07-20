import React, {Component} from "react";
import { ErrorAlert } from './Alert';

class EventsNumber extends Component{

     state = {
         numEvents: 32,
         errorText: ''
      };

      //when user changes event number input update numEvents state and call updateEvents
      inputChange = (e) => {
         let eventCount = e.target.value;
         if(eventCount < 1 || eventCount > 32){
            this.setState({
               errorText: "number must be between 1 and 32"
            })
         } else {
            this.setState({
               numEvents: eventCount,
               errorText: ''
            });
            this.props.updateEvents(null, eventCount);
         }
      }

      render(){
      return(
         <div className="numberOfEvents">
            <input 
               type="test"
               className="EventsNumber"
               value = {this.state.numEvents}
               onChange={this.inputChange}
            />
             <label htmlFor="numberOfEvents">number of events</label>
             <ErrorAlert text={this.state.errorText} />
         </div>
      )
   }
}

export default EventsNumber;