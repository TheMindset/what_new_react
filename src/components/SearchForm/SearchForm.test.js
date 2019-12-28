import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './SearchForm'

describe('SearchForm', () => {
  let wrapper
  const mockSearchStories = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<SearchForm
      searchStories={mockSearchStories}
    />)
  })

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should run searchStories on click button', () => {
    wrapper.find('button').simulate('click', mockSearchStories)

    expect(mockSearchStories).toHaveBeenCalled()
  })
  
  test('should reset state on handleSubmit', () => {
    wrapper.instance().setState({search: 'Giant'})

    expect(wrapper.state('search')).toEqual('Giant')

    wrapper.instance().handleSubmit()
    expect(wrapper.state('search')).toEqual('')
  })
})

