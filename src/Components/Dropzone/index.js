import React from 'react'
import { useDropzone } from 'react-dropzone';

import { ContainerDropzone, Container, Button } from './styles';

function MyDropzone() {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <strong key={file.path}>
      {file.path} - {file.size} bytes
    </strong>
  ));

  return (
      <Container>
        <ContainerDropzone {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop files here, or click to select files</p>
        </ContainerDropzone>

        <h2>Files: {files}</h2>

        <Button type="submit">Convert</Button>
      </Container>
  )
}

export default MyDropzone;