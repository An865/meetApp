import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import EventsNumber from '../EventsNumber';
import EventList from '../EventList';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, test => {

   let AppWrapper;
   let EventsNumberWrapper;
   let EventListWrapper;

   test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
      given('a list of events is being displayed', () => {
         AppWrapper = mount(<App />);
         EventListWrapper = mount(<EventList events={mockData}/>)
      });

      when('the user hasn\'t entered a specific number of events to display', () => {
         EventsNumberWrapper = shallow(<EventsNumber updateEvents={() => { }} />);
      });

      then( '32 events will be displayed', () => {
         expect(EventsNumberWrapper.state('numEvents')).toBe(32);
      });

      test('User can change the number of events they want to see.', ({ given, when, then }) => {
         given('a list of events is being displayed', () => {
            AppWrapper = mount(<App />);
            EventListWrapper = mount(<EventList events={mockData}/>)
         });
  
         when('a user enters a number of events to display', () => {
            AppWrapper.update();
            AppWrapper.find('.EventsNumber').simulate('change', { target: { value: 5 } });
         });
  
         then('the entered number of events is displayed', () => {
            AppWrapper.update();
            EventsNumberWrapper = AppWrapper.find(EventsNumber);
            expect(EventsNumberWrapper.state('numEvents')).toBe(5);
         });
      });
   });


});