import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import App from '../App';
import StarShipsList from '../StarShipsList';

it('shows the app with StarShipsList', () => {
    const wrapper = mount(
        <Root>
            <App/>
        </Root>
      );
    expect(wrapper.find(StarShipsList).length).toEqual(1);
    
    wrapper.unmount();
});