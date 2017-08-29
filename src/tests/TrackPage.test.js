import React from 'react';
import { shallow } from 'enzyme'; 
import TrackPage from '../TrackPage';

const track = [];

it('renders without crashing', () => {
  shallow(<TrackPage tracks={track} />);
});

it('has a get back button method that renders properly', () => {
   const wrapper = shallow(<TrackPage tracks={track} />);
    wrapper.instance().getBackButton();
});

it('has a get track view method that renders properly', () => {
   const wrapper = shallow(<TrackPage tracks={track} />);
    wrapper.instance().getTrackView();
});