import React from 'react'
import { shallow } from 'enzyme'

import Subscribe from './Subscribe'

afterEach(() => {
    mockAxios.reset()
})

it("renders without crashing", () => {
  shallow(<Subscribe />)
})

it("handle subscribe", () => {
  const wrapper = shallow(<Subscribe campaign='test' />)
  const email = 'test@test.com'

  wrapper.setState({email: email})
  wrapper.find('button').simulate('click', { preventDefault() {} })
})

