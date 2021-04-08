import ImageRevolver from './ImageRevolver/ImageRevolver';

type Props = {
  title: string;
  description: React.ReactNode;
  imageSources: string[];
  sourceCode: string;
  site: string;
  tech: string;
};

const Project: React.FC<Props> = ({ title, description, imageSources, sourceCode, site, tech }) => {
  return (
    <div className="Project">
      <h3 className="project-title">{title}</h3>
      <div className="project-content">
        <ImageRevolver imageSources={imageSources} />
        <div className="project-info">
          {description}
          <p>Tech Stack: {tech}</p>
          <a href={sourceCode} className="link-btn">
            Source Code
          </a>
          <a href={site} className="link-btn">
            View Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
