import React from 'react'
import { DraggableList } from './components/tiles'

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Hey Fellas,</h1>
      <DraggableList items={'My name is saurabh patwal'.split(' ')} />
      {/* <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} /> */}
    </div>
  )
}
