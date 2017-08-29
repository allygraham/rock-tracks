import React from 'react';
import { shallow } from 'enzyme'; 
import TrackItem from '../TrackItem';

it('renders without crashing', () => {
  const track = {};
  shallow(<TrackItem item={track} />);
});
