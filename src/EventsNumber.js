import React, {Component} from "react";

class EventsNumber extends Component{

     state = {
         numEvents: 32,
      };

      //when user changes event number input update numEvents state and call updateEvents
      inputChange = (e) => {
         let eventCount = e.target.value;
         this.setState({
            numEvents: eventCount,
         });
         this.props.updateEvents(null, eventCount);
      }

      render(){
         ;
      return(
         <div className="numberOfEvents">
            <input 
               type="test"
               className="EventsNumber"
               value = {this.state.numEvents}
               onChange={this.inputChange}
            />
             <label htmlFor="numberOfEvents">number of events</label>
         </div>
      )
   }
}

export default EventsNumber;