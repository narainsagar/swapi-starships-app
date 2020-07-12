import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import StarShipsList from '../StarShipsList';
import StartShipItem from '../StartShipItem';

const initialState = {
    count : 36,
    next : "http://swapi.dev/api/starships/?page=2",
    previous : null,
    results : [
        {
            "name": "CR90 corvette",
            "model": "CR90 corvette",
            "manufacturer": "Corellian Engineering Corporation",
        },
        {
            "name": "CR90",
            "model": "CR90 corvette",
            "manufacturer": "Corellian Engineering Corporation",
        },
        {
            "name": "CR80 corvette",
            "model": "CR90 corvette",
            "manufacturer": "Corellian Engineering Corporation",
        }
    ]};

it('shows the startship list with starship item', () => {
    const wrapper = mount(
        <Root initialState={initialState}>
            <StarShipsList/>
        </Root>
      );
      
    expect(wrapper.find(StartShipItem).length).toEqual(3);
    
    wrapper.unmount();
});