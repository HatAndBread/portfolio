import ImageRevolver from './ImageRevolver/ImageRevolver';

type Props = {
  title: string;
  description: React.ReactNode;
  imageSources: string[];
  sourceCode: string;
  site?: string;
  tech: string;
  extraContent?: React.ReactNode;
};

const Project: React.FC<Props> = ({ title, description, imageSources, sourceCode, site, tech, extraContent }) => {
  return (
    <div className="Project">
      <h3 className="project-title">{title}</h3>
      <div className="project-content">
        <ImageRevolver imageSources={imageSources} />
        <div className="project-info">
          {description}
          <p>Tech Stack: {tech}</p>
          {site && (
            <a href={site} className="link-btn">
              View Site
            </a>
          )}
          <a href={sourceCode} className="link-btn">
            Source Code
          </a>
        </div>
      </div>
      {extraContent && extraContent}
    </div>
  );
};

export default Project;
