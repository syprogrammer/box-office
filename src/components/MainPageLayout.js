import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
      <>
          <Title
              title="box office"
              subtitle="are you looking for movie or a actor"
          />
          <Navs />
          {children}
    </>
  )
}

export default MainPageLayout