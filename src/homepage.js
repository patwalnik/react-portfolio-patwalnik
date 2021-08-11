import React from 'react'
import { DraggableList } from './components/tiles'

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Hey Fellas,</h1>
      <DraggableList items={'My name is saurabh patwal'.split(' ')} />
      <h2>
        github :{' '}
        <a href="https://github.com/patwalnik" target="_blank">
          https://github.com/patwalnik
        </a>
      </h2>
      <h2>
        linkedin :{' '}
        <a href="https://www.linkedin.com/in/patwalnik/" target="_blank">
          https://www.linkedin.com/in/patwalnik/
        </a>
      </h2>
    </div>
  )
}
