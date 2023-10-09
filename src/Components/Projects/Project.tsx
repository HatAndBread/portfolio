import ImageRevolver from "./ImageRevolver/ImageRevolver"

type Props = {
  title: string
  description: React.ReactNode
  imageSources: string[]
  sourceCode: string
  site?: string
  play?: string
  youtube?: string
  tech: string
  extraContent?: React.ReactNode
}

const Project: React.FC<Props> = ({
  title,
  description,
  imageSources,
  sourceCode,
  site,
  play,
  youtube,
  tech,
  extraContent,
}) => {
  return (
    <div className="Project">
      <h3 className="project-title">{title}</h3>
      <div className="project-content">
        {youtube ? (
          <div className="youtube-container">
            <iframe height="315" src={youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        ) : (
          <ImageRevolver imageSources={imageSources} />
        )}
        <div className="project-info">
          {description}
          <p>Tech Stack: {tech}</p>
          {site && (
            <a href={site} className="link-btn" target="_blank" rel="noreferrer">
              View Site
            </a>
          )}
          <a href={sourceCode} className="link-btn" target="_blank" rel="noreferrer">
            Source Code
          </a>
          {play && (
            <a href={play} className="link-btn" target="_blank" rel="noreferrer">
              Google Play
            </a>
          )}
        </div>
      </div>
      {extraContent && extraContent}
    </div>
  )
}

export default Project
