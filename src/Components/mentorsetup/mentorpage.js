import React  from 'react'
import Menteenav from '../menteesetup/menteenav'
import Menteefooter from '../menteesetup/menteefooter'
import Body1 from './body1'
export default function Mentorpage() {
    return (
        <>
        <div className="menteepage">
        <Menteenav/>
        <Body1/>
        <Menteefooter/>
        </div>   
        </>
    )
}
