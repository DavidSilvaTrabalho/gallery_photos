// @flow
import * as React from 'react';
import { useState} from 'react';

import './Gallery.css'

import CloseIcon from '@mui/icons-material/Close';

import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img3 from "../../assets/img3.jpg"
import Img4 from "../../assets/img4.jpg"
import Img5 from "../../assets/img5.jpg"
import Img6 from "../../assets/img6.jpg"

export const Gallery = () => {

  const [model, setModel] = useState(false)
  const [temp, setTemp] = useState("")

  
  let data = [
    {
      id: 1,
      imgSrc: Img1
    },
    {
      id: 2,
      imgSrc: Img2
    },
    {
      id: 3,
      imgSrc: Img3
    },
    {
      id: 4,
      imgSrc: Img4
    },
    {
      id: 5,
      imgSrc: Img5
    },
    {
      id: 6,
      imgSrc: Img6
    }
  ]

  const handleImg = (img) => {
    setTemp(img)
    setModel(true)
    console.log("ueha")
  }
  
  const handleModalClose = () => {
    setModel(false)
  }

  return (
        <>
          <div className={model ? "model open" : "model"}>
            <img src={temp} alt=""/>
            <CloseIcon onClick={handleModalClose}></CloseIcon> 
          </div>

          <div className='gallery'> 
            {data.map((data, index) => {
              return(
                <div className='pictures' key={index}>
                  <img src={data.imgSrc} alt="" style={{width:"100%"}} onClick={() => handleImg(data.imgSrc)}/>
                </div>
              )
            })}
          </div>
        </>
    );
};