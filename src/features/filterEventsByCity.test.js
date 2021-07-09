import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { locations } from '../api'

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
   test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
      given('a user hasn\'t searched for a city yet', () => {

      });

      let AppWrapper;
      when('the user first starts the app', () => {
         AppWrapper = mount(<App />);
      });

      then('the user will see a list of all upcoming events', () => {
         AppWrapper.update();
         expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
      let CitySearchWrapper;  
      given('the application is open', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
      });

      when('the user begins to search for a particular city', () => {
         CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
      });

      then('the user will see a list of cities that match what they have begun to search', () => {
         // expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2)
      });
  });

  test('User can select a city from the suggested list.', ({ given, when, then }) => {
      given('the app is displaying searches that match the users search input', () => {

      });

      when('the user finds and selects their desired location', () => {

      });

      then('the app returns events associated with the user\'s desired city', () => {

      });
  });
});