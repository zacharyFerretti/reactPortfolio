import logo from './logo.svg';
import image from './img.jpg';
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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <section>
        <div>
          <h1>CHNO.CO</h1>
          <p id="demo">S</p>
        </div>
      </section>
      <section>

        <img alt="The narrows in Zion National Park." src={image}/>
        {/* <h1>SOME PHOTO</h1> */}
      </section>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
