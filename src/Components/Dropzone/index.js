import React from 'react'
import { useDropzone } from 'react-dropzone';
import { PDFWorker, PDFJS } from 'pdfjs-dist';

import { ContainerDropzone, Container, Button } from './styles';

function MyDropzone() {

  function getFile(event) {
    const file = event.target.files[0];

  }

  const filereader = new FileReader();

  /**
 * Retrieves the text of a specif page within a PDF Document obtained through pdf.js 
 * 
 * @param {Integer} pageNum Specifies the number of the page 
 * @param {PDFDocument} PDFDocumentInstance The PDF document obtained 
 **/
  function getPageText(pageNum, PDFDocumentInstance) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
      PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
        // The main trick to obtain the text of the PDF page, use the getTextContent method
        pdfPage.getTextContent().then(function (textContent) {
          var textItems = textContent.items;
          var finalString = "";

          // Concatenate the string of the item to the final string
          for (var i = 0; i < textItems.length; i++) {
            var item = textItems[i];

            finalString += item.str + " ";
          }

          // Solve promise with the text retrieven from the page
          resolve(finalString);
        });
      });
    });
  }

  filereader.onload = function () {
    PDFJS.getDocument('../../assets/teste.pdf').then(function (PDFDocumentInstance) {

      // Use the PDFDocumentInstance To extract the text later

      var totalPages = PDFDocumentInstance.numPages;
      var pageNumber = 1;

      // Extract the text
      getPageText(pageNumber, PDFDocumentInstance).then(function (textPage) {
        // Show the text of the page in the console
        console.log(textPage);
      });

    }, function (reason) {
      // PDF loading error
      console.error(reason);
    });
  }
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