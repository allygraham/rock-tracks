import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TrackPage from '../TrackPage';

const track = [];

it('renders without crashing', () => {
  const rendered = renderer.create(
    <MemoryRouter>
      <TrackPage tracks={track} />
    </MemoryRouter>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});

it('has a get back button method that renders properly', () => {
   const wrapper = shallow(<TrackPage tracks={track} />);
    wrapper.instance().getBackButton();
});

it('has a get track view method that renders properly', () => {
   const wrapper = shallow(<TrackPage tracks={track} />);
    wrapper.instance().getTrackView();
});