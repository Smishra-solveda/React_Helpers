import React,{ useState, useEffect } from 'react';

const FetchInnerWidth = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    console.log("Hello");
    window.addEventListener('resize',checkSize)
    return ()=>{
        window.removeEventListener('resize',checkSize);
    }
  },[])

  return (
    <>
        <h1>window</h1>
        <h2>{size} px</h2>
    </>
  )
}

export default FetchInnerWidth;