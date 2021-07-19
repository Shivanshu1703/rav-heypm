import React from 'react'
import Menteenav from './menteenav'
import Menteefooter from './menteefooter'
import Body from './body'

export default function Menteepage() {
    return (
      <>  
        <div className="menteepage">
        <Menteenav/>
        <Body/>
        <Menteefooter/>
        </div>
      </>  
    )
}
