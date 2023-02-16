import aspen1 from "./Images/2018_aspen1.jpg"
import ouray1 from "./Images/2018_ouray1.jpg"
import ouray2 from "./Images/2018_ouray2.jpg"
import rmnp1 from "./Images/2018_rmnp1.jpg"
import olymp1 from "./Images/2021_olymp1.jpg"
import olymp2 from "./Images/2021_olymp2.jpg"
import rain1 from "./Images/2021_rain1.jpg"
import rain2 from "./Images/2021_rain2.jpg"
import rain3 from "./Images/2021_rain3.jpg"
import rain4 from "./Images/2021_rain4.jpg"
import capreef1 from "./Images/2022_capreef1.jpg"
// import washington from '../../../../Dropbox/Photo Stuff/Organized Pictures/2022/07.24.22 - Mt. Washington , Sabbaday Falls/07.24.22 - Mt. Washington , Sabbaday Falls - Sun - [100, 32 mm, 1-15 s].jpg';
import './App.css';

var i = 0;
var txt = 'croll down to see a photo!'; /* The text */
var speed = 35; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
});

function App() {
  return (
    <div className="App" onLoad='typeWriter()'>
      <section>
        <div>
          <h1>CHNO.CO</h1>
          <p id="demo">S</p>
        </div>
      </section>
      <section>
        <div class="img-with-text">
            <img alt="Cracked Rocks in Capitol Reef National Park." src={capreef1}/>
            <p>Scroll down further for more images.</p>
        </div>
      </section>
      <section>
        <div class="grid">
          <div class="square fullImg container">
            <img src={aspen1} />
            <div class="overlay">
              <div class="text">Aspen, 2018</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={ouray1} />
            <div class="overlay">
              <div class="text">Ouray, 2018</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={ouray2} />
            <div class="overlay">
              <div class="text">Ouray, 2018</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={rmnp1} />
            <div class="overlay">
              <div class="text">Rocky Mountain, 2018</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={olymp1} />
            <div class="overlay">
              <div class="text">Olympic, 2021</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={olymp2} />
            <div class="overlay">
              <div class="text">Olympic, 2021</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={rain1} />
            <div class="overlay">
              <div class="text">Mt. Rainier, 2021</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={rain2} />
            <div class="overlay">
              <div class="text">Mt. Rainier, 2021</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={rain3} />
            <div class="overlay">
              <div class="text">Mt. Rainier, 2021</div>
            </div>
          </div>
          <div class="square fullImg container">
            <img src={rain4} />
            <div class="overlay">
              <div class="text">Mt. Rainier, 2021</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
