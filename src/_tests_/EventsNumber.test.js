import React from "react";
import { shallow } from "enzyme";
import EventsNumber from "../EventsNumber";

describe("<EventsNumber /> component", () => {
   let EventsNumberWrapper;
   beforeAll(()=> {
      EventsNumberWrapper = shallow(<EventsNumber />);
   })

   test("textbox is rendered", () => {
      expect(EventsNumberWrapper.find(".EventsNumber")).toHaveLength(1)
   })

   test("textbox shows 10 events by default", () => {
      expect(EventsNumberWrapper.find(".EventsNumber").prop("value")).toEqual(10)
   })

   test("render text input number", ()=>{
      const numberOfEvents = EventsNumberWrapper.state("numEvents");
      expect(EventsNumberWrapper.find(".EventsNumber").prop("value")).toBe(
        numberOfEvents)
   })


   test("on change update state of number of events (numEvents)", () => {
      EventsNumberWrapper.setState({
         numEvents: "10",
       });
       const targetObject = { target: { value: "15" } };
       EventsNumberWrapper.find(".EventsNumber").simulate("change", targetObject);
       expect(EventsNumberWrapper.state("numEvents")).toBe("15");
    });

})