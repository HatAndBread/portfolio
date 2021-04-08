import Project from './Project';
import './Projects.css';
import toiletImage1 from '../../Assets/toilet-one.png';
import toiletImage2 from '../../Assets/toilet_two.png';
import pixelAnimator from '../../Assets/pixel-animator-2.png';
import pixelAnimation from '../../Assets/pixel-animator.gif';
import ohb from '../../Assets/ohb-screenshot.png';
import ohbTwo from '../../Assets/drum-machine.png';
import kanji from '../../Assets/kanji1.png';
import kanjiTwo from '../../Assets/kanji2.png';
import s2pd1 from '../../Assets/s2pd1.png';
import s2pd2 from '../../Assets/s2pd2.png';
import s2pd3 from '../../Assets/sp2d3.png';
import chin from '../../Assets/chinpun1.png';
import mumbo from '../../Assets/mumbo1.png';
import mumbo2 from '../../Assets/mumbo2.png';
import cook from '../../Assets/cook1.png';
import cook2 from '../../Assets/cook2.png';

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
            generator. Since I never found one that that suited my needs, I decided to make one myself! Pixel Art
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
            <a href="https://portal.data.metro.tokyo.lg.jp/" target="_blank" rel="noreferrer">
              Open Data Catalog Site
            </a>
            .
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
      <Project
        title={'Kanjikakikikai'}
        description={
          <p>
            {' '}
            Kanjikakikikai is another project I built because I actually wanted to use it myself. While there are a
            plethora of apps out there for studying kanji, almost all of them are focused on reading. I wanted to learn
            how to write!<br></br> Kanjikakikikai allows to quiz themselves on kanji, compare their answers to
            professionally written kanji, and create new study sets.
          </p>
        }
        imageSources={[kanji, kanjiTwo]}
        sourceCode={'https://github.com/HatAndBread/kanjikakikikai'}
        site="https://kanjikakikikai.glitch.me/"
        tech="Vanilla JS 🍦 Express ⭐️ NEDB (Mongo clone) ⭐️ P5 JS "
      />
      <Project
        title={'S2PD - A JavaScript Game Library'}
        description={
          <p>
            {' '}
            One of my first truly big coding project, S2PD started out as a very simple challenge to myself; program a
            2d game in plain vanilla JavaScript without relying on any external libraries. As the game grew more and
            more complex I realized that the small library of methods I had written for working with HTML5 canvas could
            be used for much more than just the game it was intended for. Soon I entirely threw out my original game
            idea and decided to turn the library into its own full fledged game library.
          </p>
        }
        imageSources={[s2pd1, s2pd2, s2pd3]}
        sourceCode={'https://github.com/HatAndBread/s2pd'}
        tech="Vanilla JS 🍦 "
        extraContent={
          <div>
            <div>Play the first game I ever created with S2PD! 👇</div>
            <iframe
              title="s2pd-game"
              frameBorder="0"
              src="https://itch.io/embed-upload/2710852?color=65106d"
              allowFullScreen={true}
              width="100%"
              height="520"
            >
              <a href="https://hat-and-beard.itch.io/space-s2pd">Play Space, s2pd! on itch.io</a>
            </iframe>
          </div>
        }
      />
      <Project
        title={'Chinpunkanpun - My First NPM Package'}
        description={
          <p>
            {' '}
            Tired of lorem ipsum? I am, which is what lead me to finally make and publish my first npm package,
            Chinpunkanpun. True to its name, Chinpunkanpun, Japanese for gibberish, randomly produces meaningless
            English sentences. The results can be remarkably complex and are almost always grammatically correct. Give
            it a try! 👉<code> {'>'} npm i chinpunkanpun</code>
          </p>
        }
        imageSources={[chin]}
        sourceCode={'https://github.com/HatAndBread/chinpunkanpun'}
        site="https://brassy-glimmer-buckthornpepperberry.glitch.me/"
        tech="Node JS"
      />
      <Project
        title={'Mumbo Jumbo'}
        description={
          <p>
            Vaguely inspired by surrealist writing techniques, Mumbo Jumbo is a game I made for my own high school
            students to stimulate their imaginations and practice creative writing. Here's how it works: <br />
            ⭐️Students start writing a story.
            <br />
            ⭐️The teacher shuffles the students' stories.
            <br />
            ⭐️Each student receives another student's story and has to continue it.
            <br />
          </p>
        }
        imageSources={[mumbo, mumbo2]}
        sourceCode={'https://github.com/HatAndBread/mumbo_jumbo'}
        site="https://mumbojumbo.glitch.me/"
        tech="Vanilla JS 🍦 Express ⭐️ Socket IO ⭐️ SQLite3"
      />
      <Project
        title={'Book A Cook'}
        description={
          <p>
            Book A Cook is a Rails app I built with my teammates Ryugi and Chiara at Le Wagon Tokyo's coding bootcamp.
            Book A Cook allows users to offer their services as chefs or book a meal from other users.
          </p>
        }
        imageSources={[cook, cook2]}
        sourceCode={'https://github.com/HatAndBread/book-a-cook'}
        site="https://bookachef.herokuapp.com/"
        tech="Ruby On Rails"
      />
    </div>
  );
};

export default Projects;
