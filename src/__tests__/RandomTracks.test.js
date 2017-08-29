import React from 'react';
import { shallow } from 'enzyme'; 
import RandomTracks from '../RandomTracks';

const tracks = [ {id:1}, {id:2}, {id:3}, {id:4}, {id:5} ]

it('renders without crashing', () => {
  shallow(<RandomTracks content={tracks} />);
});

describe('Randomise tracks function', () => {
  it('has a randomise function that returns three random objects from array', () => {
    const wrapper = shallow(<RandomTracks content={tracks} />);
    wrapper.instance().randomiseTracks(tracks);
    expect(tracks).not.toBe([ {id:1}, {id:2}, {id:3}, {id:4}, {id:5} ]);
  });
})
