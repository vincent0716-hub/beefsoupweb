import React, { Component } from 'react'
import HQimage from './headquarter-trans.png'
import FB from './facebook.png'
import SRB from './srb2.png'
import IG from './instagram.png'
export default class bottom extends Component {
  render() {
    return (
      <div className='bottomDiv'>
        <div className='bottomFather'>
          <div className='headquartersPosition'><h1 className='HQwords'>Headquarters</h1></div>

          <div className='HQDetailPoisition'>

            <div >
              <img src={HQimage} className='HQSize ' />
            </div>

            <div>
              <div className='AddressDivFather'>
                <h3 className='textcolorGreen'>ADDRESS</h3>
                <h4 className='textcolorGreennormal'>Suite 2119,

                  34333 Little Collins Sreet,

                  Melbourne VIC 3000</h4>
              </div>
            </div>

            <div>
              <div className='ContactDivFather'>
                <h3 className='textcolorGreen'>CONTACT</h3>
                <h4 className='textcolorGreennormal'>
                  (03) 9999 9999
                  test@gmail.com.au
                  testHQ@gmail.com.au
                </h4>
              </div>
            </div>

            <div>
              <div className='OpenDivFather'>
                <h3 className='textcolorGreen'>OFFICE HOURS</h3>
                <h4 className='textcolorGreennormal'>Mon - Friday:

                  9:30am - 5:00pm</h4>
              </div>
            </div>

          </div>
          <div className='thirdPoisitioninBottom'>
            <div className='thirdPoisitioninBottomFather'>
              <div >
                <h4 className='textcolorGreennormal'>©2022 by Bowl Bowl Beef Australia</h4>
              </div>

              <div className='ICONDiv'>
                <div>
                  <h3 className='textcolorGreen'>FOLLOW</h3>
                </div>
                <div>
                  <a href='' ><img src={FB} className='fb' /></a>
                  <a href=''> <img src={IG} className='ig' /></a>
                  <a href="https://www.xiaohongshu.com/user/profile/5ac096d311be10132f0b6d21?xhsshare=CopyLink&appuid=5e6f262b000000000100baa5&apptime=1671014037"> <img src={SRB} className='srb' /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
