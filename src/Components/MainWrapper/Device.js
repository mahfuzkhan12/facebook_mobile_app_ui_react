import React from 'react'
import C from './Device.module.css'

const Device = (props) => {


  return (
      <div className={C.m_wrapper}>
        <div className={C.mobile}>
              <div className={C.device}>
                  <div className={C.notch}>
                      <div className={C.camera}></div>
                      <div className={C.speaker}></div>
                  </div>
                  <div className={C.screen}>
                       {props.children}
                </div>
              </div>
          </div>
      </div>
  )

  
}

export default Device;
