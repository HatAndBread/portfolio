import { useEffect } from 'react';
import next from '../../Assets/next.png';

type Props = {
  imageSources: string[];
};

const ImageRevolver: React.FC<Props> = ({ imageSources }) => {
  useEffect(() => {}, []);
  return (
    <div>
      {imageSources.map((src, index) => (
        <img src={src} key={index} alt="screen shot" />
      ))}
      <img src={next} alt="→" />
    </div>
  );
};

export default ImageRevolver;
