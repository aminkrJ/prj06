import React from 'react';
import { shallow } from 'enzyme';

import Totals from '../Totals';

it('renders without crashing', () => {
  shallow(<Totals />);
});

it('shipping fee is 0 for subtotal > 100', () => {
  const wrapper = shallow(<Totals subtotal={101} />);
  expect(wrapper.contains('Free delivery on orders over $100')).toEqual(true);
  expect(wrapper.state().shippingFee).toEqual(0);
});

it('shipping fee is 8 for subtotal < 100', () => {
  const wrapper = shallow(<Totals subtotal={99} />);
  expect(wrapper.state().shippingFee).toEqual(8);
});
