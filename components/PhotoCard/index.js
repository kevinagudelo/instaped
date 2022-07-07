import React, {useRef, useEffect, useState, Fragment} from "react"
import { ImgWrapper, Img, Button, Article } from "./styles";
import {MdFavoriteBorder} from "react-icons/md"
MdFavoriteBorder
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src=DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show,setShow] = useState(false)
  useEffect(function(){
    import('intersection-observer')
    .then(()=>{
      const observer = new window.IntersectionObserver(function
        (entries){
          const {isIntersecting} = entries[0]
          console.log(isIntersecting)
          
          if(isIntersecting){
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
    })
    
  },[ref])
  
    return (
    <Article ref={ref}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='23px'/>{likes} likes!</Button>
        </Fragment>
      }
      
    </Article>
  );
};
