import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';
import entertainment from '../../data/entertainment'
import health from '../../data/science'
import science from '../../data/science'
import technology from '../../data/technology'


describe('App', () => {
  let wrapper
  const mockEvent = {target: { name: 'technology' }}

  const searchedStories = [{
      id: 1,
      headline: 'Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval',
      img: 'https://media.wired.com/photos/5d8e600f34cab0000861c48d/master/w_2560%2Cc_limit/security_jailbreak_MADEPD.jpg',
      description: 'Any iPhone device from 2011 to 2017 could soon be jailbroken, thanks to an underlying flaw that there\'s no way to patch.',
      url: 'https://www.wired.com/story/ios-exploit-jailbreak-iphone-ipad/'
    }]
  
  beforeEach(() =>{
    wrapper = shallow(<App />)
  })

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the current state using an event', () => {
    expect(wrapper.state('current')).toEqual(local)
    wrapper.instance().handleButton(mockEvent)
    expect(wrapper.state('current')).toEqual(technology)
  })

  test('should search stories based on a string', () => {
    wrapper.instance().handleButton(mockEvent)
    expect(wrapper.state('current')).toEqual(technology)
    wrapper.instance().searchStories('jailbroken')
    expect(wrapper.state('current')).toEqual(searchedStories)
  })
  
  
})
