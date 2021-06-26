import React, {Component} from "react";


class Event extends Component{
   state = {
      show: false,
    }

    detailsButton = () => {
      this.setState((previousState) => ({ show: !previousState.show }));
    };

   render(){
      let event = this.props.event;
      return(
         <div>
            <h1 className="EventSummary">{event.summary}</h1>
            <h2 className="EventDate">{event.start.dateTime} {event.start.timeZone}</h2>
            <h2 className="EventLocation">{event.location}</h2>

            {this.state.show === false && (
               <button className="showDetails" onClick={() => this.detailsButton()}>
                  Show Details
               </button>
            )}

            {this.state.show === true && (
               <p className="EventDetails">{event.description}</p>
            )}

            {this.state.show === true && (
               <button className="hideDetails" onClick={() => this.detailsButton()}>
                  Hide Details
               </button>
            )}
            

         </div>

      )
       
   }
}

export default Event;