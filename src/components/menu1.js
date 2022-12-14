import React, { Component } from 'react'
import CropBeef from './cropBeef.png'
import Frydump from './frydump.png'
import Sweetricecake from './sweetricecake1.jpeg'
import videoBackground from './editedsoup.mp4'
import {motion} from 'framer-motion'
import Bottom from './bottom'
export default class menu1 extends Component {
    render() {
        const arrSource = [
            {  source: CropBeef,text : "Beef Soup" },
            {  source: Frydump,text : "Fried Dump" },
            {  source: Sweetricecake,text : "Seeet Rice Cake" }
        ];
        return (
            <div>
            <div className='menudiv'>
                
                <video src={videoBackground} autoPlay loop muted />
                <div className='editpositionmenu'>
                    
                    {
                        arrSource.map(menusource=>
                        <div className='container' key={menusource}>
                        <img className='cropbeef' src={menusource.source} alt="Sweet" layout='fill' />
                        <div className='overlay'>
                            <div className='text'>{menusource.text}</div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
            
            </div>
           

        )
    }
}
