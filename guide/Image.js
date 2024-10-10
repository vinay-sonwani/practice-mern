import React from 'react'
import myImage from './assets/images/myImage.jpg';


const Image = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

      {/* First  */}
      <img src="path_to_image.jpg" alt="Description" />

      {/* Second */}
      <div className="image-grid">
        <img src="image1.jpg" alt="..." />
        <img src="image2.jpg" alt="..." />
        <img src="image3.jpg" alt="..." />
      </div>

      {/* Third  */}
      {images.map((img, idx) => (
        <img key={idx} src={img} alt="..." />
      ))}
      
      {/* fourth  */}
      <source media="(min-width: 800px)" srcSet="large-image.jpg" />
    </div>
  );
}

export default Image
