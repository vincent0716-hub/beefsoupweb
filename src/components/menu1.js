import React, { Component } from 'react'
import CropBeef from './cropBeef.png'
import Frydump from './frydump.png'
import Sweetricecake from './sweetricecake1.jpeg'
export default class menu1 extends Component {
    render() {
        return (
            <div className='menudiv'>
               
                <div  className='editpositionmenu'>
                <img className='cropbeef'src={CropBeef} alt="cropbeef" layout='fill'/>
                <img className='cropbeef'src={Frydump} alt="Fry" layout='fill'/>
                <img className='cropbeef'src={Sweetricecake} alt="Sweet" layout='fill'/>
                <h2 className ='testcolorInGitandVercel'>price:14.8 AUD</h2><h2 className ='testcolorInGitandVercel'>price:12 AUD</h2>
                <h2 className ='testcolorInGitandVercel'> price:8 AUD</h2>
                </div>
            </div>
            
        )
    }
}
