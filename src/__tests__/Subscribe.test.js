import React from 'react'
import moxios from 'moxios'
import sinon from 'sinon'
import { shallow } from 'enzyme'

import Subscribe from '../Subscribe'

beforeEach(function () {
  moxios.install()
})

afterEach(() => {
  moxios.uninstall()
})

it("renders without crashing", () => {
  shallow(<Subscribe />)
})

it("handle subscribe with success", (done) => {
  const wrapper = shallow(<Subscribe campaign='test' />)
  const email = 'test@test.com'

  wrapper.setState({email: email})
  wrapper.find('button').simulate('click', { preventDefault() {} })

  moxios.wait(function () {
    let request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: {}
    }).then(function () {
      expect(wrapper.state().email).toBe('')
      done()
    })
  })
})
