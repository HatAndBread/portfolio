import ImageRevolver from './ImageRevolver';

type Props = {
  title: string;
  description: string;
  imageSources: string[];
};

const Project: React.FC<Props> = ({ title, description, imageSources }) => {
  return (
    <div className="Project">
      <h3 className="project-title">{title}</h3>
      <ImageRevolver imageSources={imageSources} />
      <p>{description}</p>
    </div>
  );
};

export default Project;
