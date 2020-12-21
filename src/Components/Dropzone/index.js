import React from 'react'
import Iframe from 'react-iframe';

import { Container } from './styles';

const MyDropzone = () => {
  return (
    <Container>
      <Iframe url="https://pdftotext.com#main"
        width="500px"
        height="100%"
        id="myId"
        className="myClassname"
        scrolling="no"
        display="initial"
        position="relative" 
        styles={{padding: "10px"}}
        sandbox="allow-popups allow-scripts"
        />
    </Container>
  )
}

export default MyDropzone;
