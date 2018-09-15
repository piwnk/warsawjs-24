import React from 'react';
import { mount } from 'enzyme';

import MeetupLink from './MeetupLink';

describe('MeetupLink', () => {
  test('should render as <A>', () => {
    const wrapper = mount(<MeetupLink eventId="1">Event</MeetupLink>);
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
