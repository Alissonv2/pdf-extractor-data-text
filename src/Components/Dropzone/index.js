import React from 'react'
import { useDropzone } from 'react-dropzone';
import Iframe from 'react-iframe';
import axios from 'axios';

import { ContainerDropzone, Container, Button } from './styles';

const MyDropzone = () => {

  axios.get('https://cors-anywhere.herokuapp.com/https://pdftotext.com/').then((resp) => {
    console.log(resp.data);
  })

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <strong key={file.path}>
      {file.path} - {file.size} bytes
    </strong>
  ));
  

  return (
    <Container>
      <Iframe url="https://pdftotext.com#main"
        width="500px"
        height="500px"
        id="myId"
        className="myClassname"
        scrolling="no"
        display="initial"
        position="relative" 
        styles={{padding: "10px"}}
        />
    </Container>
  )
}

export default MyDropzone;