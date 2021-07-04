
import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
   let EventWrapper;
   beforeAll(() => {
     EventWrapper = shallow(<Event event={mockData[1]} />);
   });

   test("show event title", () => {
      expect(EventWrapper.find(".name")).toHaveLength(1);
    });
 
   test("show event location", () => {
     expect(EventWrapper.find(".EventLocation")).toHaveLength(1);
   });

   test( "show event date", ()=>{
      expect(EventWrapper.find(".EventDate")).toHaveLength(1);
   })

   test( "show details button exists", ()=>{
      expect(EventWrapper.find(".details-btn")).toHaveLength(1);
   })

   test("hide details by default", () => {
      EventWrapper.setState({
         show: false,
   })})

   test("change state of 'show' on click", () => {
      EventWrapper.setState({
        show: false,
      });
      EventWrapper.find(".details-btn").simulate("click");
      expect(EventWrapper.state("show")).toEqual(true);
    });

    test("show event details on click", () => {
      EventWrapper.setState({
        show: false,
      });
  
      EventWrapper.find(".details-btn").simulate("click");
      expect(EventWrapper.find(".EventDetails")).toHaveLength(1);
    });

    test("hide details on click", () => {
      EventWrapper.setState({
        show: true,
      });
  
      EventWrapper.find(".hideDetails").simulate("click");
      expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
    });


 });