import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

describe('Menu', () => {
  let wrapper
  const mockHandleButton = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Menu 
      handleButton={mockHandleButton}
    />)
  })

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should run handleButton when the first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click', mockHandleButton)

    expect(mockHandleButton).toHaveBeenCalled()
  })
    
  test('should run handleButton when the second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click', mockHandleButton)

    expect(mockHandleButton).toHaveBeenCalled()
  })

  test('should run handleButton when the third button is clicked', () => {
    wrapper.find('button').at(2).simulate('click', mockHandleButton)

    expect(mockHandleButton).toHaveBeenCalled()
  })

  test('should run handleButton when the fourth button is clicked', () => {
    wrapper.find('button').at(3).simulate('click', mockHandleButton)

    expect(mockHandleButton).toHaveBeenCalled()
  })

  test('should run handleButton when the fifth button is clicked', () => {
    wrapper.find('button').at(4).simulate('click', mockHandleButton)

    expect(mockHandleButton).toHaveBeenCalled()
  })
})

