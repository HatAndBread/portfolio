import Project from "./Project"
import "./Projects.css"
import pixelAnimator from "../../Assets/pixel-animator-2.png"
import pixelAnimation from "../../Assets/pixel-animator.gif"
import kanji from "../../Assets/kanji1.png"
import s2pd1 from "../../Assets/s2pd1.png"
import s2pd2 from "../../Assets/s2pd2.png"
import s2pd3 from "../../Assets/sp2d3.png"
import map1 from "../../Assets/map1.png"
import map2 from "../../Assets/map2.png"
import map3 from "../../Assets/map3.png"
import beer1 from "../../Assets/beer1.png"
import beer2 from "../../Assets/beer2.png"

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <Project
        title={"Touch Theremin"}
        description={
          <p>
            {" "}
            A musical instrument for your touchscreen device. Inspired by the theremin, but really
            more of slide theremin. Move up to five fingers vertically to change pitch. Move fingers
            diagonally to reduce gain. Adjust effects and envelope on the fly with any spare fingers
            you have left. Record and mutate loops for mutant dance beats. If you like noisy things
            you will like this.
            <p>Available on Google Play!</p>
          </p>
        }
        imageSources={[kanji]}
        youtube="https://www.youtube.com/embed/wT79Y1oy-pw?si=phd_HLl1CW33lBru"
        sourceCode={"https://github.com/HatAndBread/theremin"}
        play="https://play.google.com/store/apps/details?id=app.vercel.the_theremin.twa"
        tech="Svelte ⭐️ Web Audio API"
      />
      <Project
        title={"Kanji College"}
        description={
          <p>
            {" "}
            An application for intermediate to advanced learners of Japanese. There are a plethora
            of applications out there for learning how to read kanji, but very few options for those
            who have advanced reading skills but for whom writing is a challenge. I made this app to
            fill that void. Users can create and share their own study sets, or choose from a
            variety of pre-made study sets. Utilizes Google's Hand Writing API to check the validity
            of the user's answers.
            <p>Available on Google Play!</p>
          </p>
        }
        imageSources={[kanji]}
        sourceCode={"https://github.com/HatAndBread/kanji-campus"}
        site="https://kanji.college/"
        play="https://play.google.com/store/apps/details?id=college.kanji.twa"
        tech="Ruby On Rails ⭐️ Hotwire"
      />
      <Project
        title={"Japan Craft Beer Map"}
        description={
          <p>
            {" "}
            A database / map of purveyors of craft brews in Japan. Built this as an excuse to learn
            Ruby on Rail's new default frontend framework, Hotwire. Members can track their visits
            and race others to be the first to visit every craft beer pub in the country.
          </p>
        }
        imageSources={[beer1, beer2]}
        sourceCode={"https://github.com/HatAndBread/japan-beer-map"}
        site="https://www.japanbeermap.com/"
        tech="Ruby On Rails ⭐️ MapBox GL ⭐️ Hotwire"
      />
      <Project
        title={"Japan Adventure Maps"}
        description={
          <p>
            {" "}
            My passion project. Japan Adventure Maps allows users to design hiking and cycling
            routes using detailed trail information supplied by Open Street Maps. There are too many
            features to list, but here are some of my favorites: export routes to your gps device,
            find routes by location, heat maps, 3d navigation, etc etc. Try it for yourself and see
            what it can do.
          </p>
        }
        imageSources={[map1, map2, map3]}
        sourceCode={"https://github.com/HatAndBread/japan-adventure-maps"}
        site="https://japan-adventure-maps.com/"
        tech="React ⭐️ Ruby On Rails ⭐️ MapBox GL ⭐️ TypeScript"
      />
      <Project
        title={"Pixel Art Animator"}
        description={
          <p>
            {" "}
            As a programmer of retro-styled 2d games, I always wanted a simple and easy to use
            pixel-art sprite sheet generator. Since I never found one that that suited my needs, I
            decided to make one myself! Pixel Art Animator allows users to easily make animations
            and save them as either animated gifs or png sprite sheets.
          </p>
        }
        imageSources={[pixelAnimator, pixelAnimation]}
        sourceCode={"https://github.com/HatAndBread/pixel-animator"}
        site="https://www.pixel-art-animator.com/"
        tech="Create-React-App"
      />
      <Project
        title={"S2PD - A JavaScript Game Library"}
        description={
          <p>
            {" "}
            One of my first truly big projects, S2PD started out as a very simple challenge to
            myself; program a 2d game in plain vanilla JavaScript without relying on any external
            libraries. As the game grew more and more complex I realized that the small library of
            methods I had written for working with HTML5 canvas could be used for much more than
            just the game it was intended for. Soon I entirely threw out my original game idea and
            decided to turn the library into its own full fledged game library.
          </p>
        }
        imageSources={[s2pd1, s2pd2, s2pd3]}
        sourceCode={"https://github.com/HatAndBread/s2pd"}
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
    </div>
  )
}

export default Projects
