import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

   let AppWrapper;
   let EventWrapper;
   let EventListWrapper;

   test('An event element is collapsed by default.', ({ given, when, then }) => {

      given('a list of events is being displayed', () => {
         AppWrapper = mount(<App />);
         EventListWrapper = mount(<EventList events={mockData}/>)
      });

      when('the user doesn\'t have a specific event selected', () => {
         EventWrapper = mount(<Event event={mockData[0]}/>)
      });

      then('the event elements should remain collapsed', () => {
         expect(EventWrapper.find(".event-details")).toHaveLength(0);
      });
   });

   test('User can expand an event to see its details.', ({ given, when, then }) => {
      given('a list of events is being displayed', () => {
         AppWrapper = mount(<App />);
         EventListWrapper = mount(<EventList events={mockData}/>)
      });

      when('the user selects a specific event', () => {
         EventWrapper.find(".details-btn").simulate("click");
      });

      then('the selected event element should display', () => {
         expect(EventWrapper.find(".EventDetails")).toHaveLength(1);
      });
   });

   test('User can collapse an event to hide its details.', ({ given, and, when, then }) => {
      given('a list of events is being displayed', () => {
         AppWrapper = mount(<App />);
         EventListWrapper = mount(<EventList events={mockData}/>)
      });

      and('an event\'s details are open', () => {
         EventWrapper = mount(<Event event={mockData[0]} />);
         EventWrapper.find(".details-btn").simulate("click");
         EventWrapper.find(".EventDetails");
      });

      when('the user deselects an event', () => {
         EventWrapper.find(".hideDetails").simulate("click");
      });

      then('the event will collapse and hide its details', () => {
         expect(EventWrapper.find(".event-details")).toHaveLength(0);
      });
   });
});