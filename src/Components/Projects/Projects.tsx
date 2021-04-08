import Project from './Project';
import './Projects.css';
import toiletImage1 from '../../Assets/toilet-one.png';
import toiletImage2 from '../../Assets/toilet_two.png';
import pixelAnimator from '../../Assets/pixel-animator-2.png';
import pixelAnimation from '../../Assets/pixel-animator.gif';
import ohb from '../../Assets/ohb-screenshot.png';
import ohbTwo from '../../Assets/drum-machine.png';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <Project
        title={'Pixel Art Animator'}
        description={
          <p>
            {' '}
            As a programmer of retro-styled 2d games, I always wanted a simple and easy to use pixel-art sprite sheet
            generator. Since I never found one that that suited my needs, I decided to make it myself! Pixel Art
            Animator allows users to easily make animations and save them as either animated gifs or png sprite sheets.
          </p>
        }
        imageSources={[pixelAnimator, pixelAnimation]}
        sourceCode={'https://github.com/HatAndBread/pixel-animator'}
        site="https://www.pixel-art-animator.com/"
        tech="Create-React-App"
      />
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
        tech="React ⭐️ Ruby On Rails ⭐️ MapBox GL"
      />
      <Project
        title={'One Hand Band'}
        description={
          <p>
            {' '}
            One Hand Band is a progressive web app that allows users to play music wth friends across borders and
            overseas in real-time with the aid of web sockets. Imagine a chat-room (remember those?) in which your only
            mode of communication is music.
          </p>
        }
        imageSources={[ohb, ohbTwo]}
        sourceCode={'https://github.com/HatAndBread/One-Hand-Band'}
        site="https://one-hand-band.glitch.me/"
        tech="React ⭐️ Express ⭐️ SQLite3 ⭐️ Socket IO ⭐️ Tone JS "
      />
    </div>
  );
};

export default Projects;
