import Project from './Project';
import './Projects.css';
import toiletImage1 from '../../Assets/toilet-one.png';
import toiletMobile1 from '../../Assets/toilet-mobile-one.png';
import toiletMobile2 from '../../Assets/toilet-mobile-two.png';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <Project
        title={'Tokyo Toilet Accessibility Map'}
        description={'An app'}
        imageSources={[toiletImage1, toiletMobile1, toiletMobile2]}
      />
    </div>
  );
};

export default Projects;
