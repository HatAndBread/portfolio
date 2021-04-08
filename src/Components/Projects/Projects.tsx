import Project from './Project';
import './Projects.css';
import toiletImage1 from '../../Assets/toilet-one.png';
import toiletImage2 from '../../Assets/toilet_two.png';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <Project
        title={'Tokyo Toilet Accessibility Map'}
        description={
          <p>
            {' '}
            Toilet Accessibility Map allows users to locate and review wheelchair / baby accessible public restrooms in
            Tokyo. Data was scraped from the Tokyo Metropolitan government's amazing{' '}
            <a href="https://portal.data.metro.tokyo.lg.jp/">Open Data Catalog Site</a>.
          </p>
        }
        imageSources={[toiletImage1, toiletImage2]}
        sourceCode={'https://github.com/HatAndBread/tokyo-toilet-accessibility-map'}
        site="https://tokyo-toilet-map.herokuapp.com/"
        tech="React ⭐️ Ruby On Rails ⭐️ MapBox"
      />
    </div>
  );
};

export default Projects;
