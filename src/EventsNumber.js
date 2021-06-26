import React, {Component} from "react";

class EventsNumber extends Component{
     state = {
         numEvents: 10,
      };

      inputChange = (e) => {
         let value = e.target.value;
         this.setState({
            numEvents: value,
         });
      }

      render(){
         const numberOfEvents = this.state.numEvents;
      return(
         <div className="numberOfEvents">
            <input 
               type="test"
               className="EventsNumber"
               value = {numberOfEvents}
               onChange={(e) => this.inputChange(e)}
            />
             <label>Number of Events</label>
         </div>
      )
   }

}

export default EventsNumber