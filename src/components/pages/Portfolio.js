import '../styles/Style.css';
import jetAway from '../../img/portfolio/JetAway.jpg'
import foodApedia from '../../img/portfolio/foodImg.jpg'
import weather from '../../img/portfolio/weather.jpg'
import Notes from '../../img/portfolio/Notes.jpg'
import scheduler from '../../img/portfolio/planner.jpg'
import trivia from '../../img/portfolio/quiz.jpg'

function Portfolio() {
  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Click on the images below to see a sample of some of my most recent projects. You will find an option to
            explore and read more about each project and a link to navigate to the live website. </p>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <a target='_blank' rel="noreferrer" href="https://jetaway1.herokuapp.com/">
              <div class="portfolio-wrap">
                <img src={jetAway} class="img-fluid" alt="Photographer: Boxed Water"></img>
                <div class="portfolio-info">
                  <h4>JetAway</h4>
                  <p>HTML/CSS/JavaScript / Node.js / mySQL</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <a target='_blank' rel="noreferrer" href="https://santipalacios2002.github.io/foodApedia/">
              <div class="portfolio-wrap">
                <img src={foodApedia} class="img-fluid" alt="Photographer: Cooker King"></img>
                <div class="portfolio-info">
                  <h4>FoodApedia</h4>
                  <p>JavaScript / REST APIs</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <a target='_blank' rel="noreferrer" href="https://snk923.github.io/homework6-weather-dashboard/">
              <div class="portfolio-wrap">
                <img src={weather} class="img-fluid" alt="Weather Dashboard Photographer: Henruk Donnestad"></img>
                <div class="portfolio-info">
                  <h4>Weather Dashboard</h4>
                  <p>JavaScript / APIs</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <a target='_blank' rel="noreferrer" href="https://skolb-note-taker.herokuapp.com/notes">
              <div class="portfolio-wrap">
                <img src={Notes} class="img-fluid"
                  alt="NoteTaker Photographer: Charles Deluvio"></img>
                <div class="portfolio-info">
                  <h4>NoteTaker</h4>
                  <p>JavaScript / Express.js / Node.js</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <a target='_blank' rel="noreferrer" href="https://snk923.github.io/homework5-workdayScheduler/">
              <div class="portfolio-wrap">
                <img src={scheduler} class="img-fluid"
                  alt="Workday Scheduler Photographer: Emma Matthews Digital Content"></img>
                <div class="portfolio-info">
                  <h4>Work Day Scheduler</h4>
                  <p>JavaScript</p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <a target='_blank' rel="noreferrer" href="https://snk923.github.io/homework4_code_quiz/">
              <div class="portfolio-wrap">
                <img src={trivia} class="img-fluid" alt="Trivia Game Photographer Emma Matthews Digital Content"></img>
                <div class="portfolio-info">
                  <h4>Trivia Challenge</h4>
                  <p>JavaScript</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
