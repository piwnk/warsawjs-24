import React from 'react';
import { mount } from 'enzyme';

import ExchangeSummaryDialog from './ExchangeSummaryDialog';

describe('ExchangeSummaryDialog', () => {
  test.only('should call callback', () => {
    const closeSummary = jest.fn();
    const dialog = (
      <ExchangeSummaryDialog
        summary={{
          currency: 'USD',
          amount: '1234.56',
        }}
        onCloseSummary={closeSummary}
      />
    );
    const wrapper = mount(dialog);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(closeSummary).not.toHaveBeenCalled();
    wrapper.find('button').simulate('click');
    expect(closeSummary).toHaveBeenCalled();
  });
});
