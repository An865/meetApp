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
         <div className="event">
            <h1 className="name">{event.summary}</h1>
            <p className="EventDate">{event.start.dateTime} {event.start.timeZone}</p>
            <p className="EventLocation">{event.location}</p>

            {this.state.show === false && (
               <button className="details-btn" onClick={() => this.detailsButton()}>
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