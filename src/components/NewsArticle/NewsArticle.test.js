import React from 'react'
import { shallow } from 'enzyme'
import NewsArticle from './NewsArticle'

describe('NewsArticle', () => {

  test('should match snapshoot with all data passed correctly', () => {
    const article = { 
      img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
      headline: 'TEST TEST',
      description: 'Test test'
    }

    const wrapper = shallow(<NewsArticle 
      article={article}
    />)
    
    expect(wrapper).toMatchSnapshot()
  })
  
})
