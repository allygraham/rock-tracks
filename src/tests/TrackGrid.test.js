import React from 'react';
import { shallow } from 'enzyme'; 
import TrackGrid from '../TrackGrid';

it('renders without crashing', () => {
  const tracks = [];
  shallow(<TrackGrid content={tracks} />);
});
