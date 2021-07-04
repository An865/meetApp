import React, {Component} from "react";

class EventsNumber extends Component{
     state = {
         numEvents: 32,
      };

      //when user changes event number input update numEvents state
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
             <label htmlFor="numberOfEvents">number of events</label>
         </div>
      )
   }
}

export default EventsNumber