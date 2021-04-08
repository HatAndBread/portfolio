import { useState } from 'react';
import nextRight from '../../../Assets/next-right.png';
import nextLeft from '../../../Assets/next-left.png';
import './ImageRevolver.css';

type Props = {
  imageSources: string[];
};

const ImageRevolver: React.FC<Props> = ({ imageSources }) => {
  const [currentImageNumber, setCurrentImageNumber] = useState(0);
  const handleClickRight = () => {
    currentImageNumber < imageSources.length - 1
      ? setCurrentImageNumber(currentImageNumber + 1)
      : setCurrentImageNumber(0);
  };
  const handleClickLeft = () => {
    currentImageNumber > 0
      ? setCurrentImageNumber(currentImageNumber - 1)
      : setCurrentImageNumber(imageSources.length - 1);
  };
  return (
    <div className="ImageRevolver">
      {imageSources.map((src, index) => (
        <img
          src={src}
          alt="screenshot"
          key={index}
          className="screenshot"
          loading="lazy"
          hidden={currentImageNumber === index ? false : true}
        />
      ))}
      {imageSources.length > 1 && (
        <div>
          <img src={nextLeft} alt="←" onClick={handleClickLeft} className="revolver left" />
          <img src={nextRight} alt="→" onClick={handleClickRight} className="revolver right" />
        </div>
      )}
      <div className="shader" />
    </div>
  );
};

export default ImageRevolver;
