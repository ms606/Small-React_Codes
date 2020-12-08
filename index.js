import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
//import Conv from './app';
 
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
  	'Online Portal System.png',
    'sign_HQ.jpg',
    '../public/images1/61.jpg'

  ];
 
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
 
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
 
  return (
    <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""/>
      ))}
 
      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}
 
render(<App />, document.getElementById('root'));