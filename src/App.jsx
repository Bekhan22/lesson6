import './App.css'


function App() {
  return (
    <div>
      <header class="container">
        <img src="./Logo.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div class="hero">
        <img src="./texts.png" alt="Hero Image" />
        <div class="text">
          <h1>Why stay hungry <br />you can order from Bella Onojie</h1>
          <p>Download the Bella Onojie's food app now on</p>
          <button className='btn'>Playstore</button>
          <button className='btn2'>App store</button>
        </div>
      </div>
      <img className='tel container' src="./tel.png" alt="" />
      <h1 className='hh container'>How the app works</h1>




      <section className='texts container'>
        <img src="telt.png" alt="" />
        <div className="text2">
          <h2>Create an account</h2>
          <h1>
            Create/login to an existing <br />
            account to get started
          </h1>
          <p>
            An account is created with your email <br />
            and a desired password
          </p>
        </div>
      </section>
      <section className='texts container' id='tt'>
        <div className="text2">
          <h2>Create an account</h2>
          <h1>
            Create/login to an existing <br />
            account to get started
          </h1>
          <p>
            An account is created with your email <br />
            and a desired password
          </p>
        </div>
        <img src="telt.png" alt="" />
      </section>
      <section className='texts container'>
        <img src="telt.png" alt="" />
        <div className="text2">
          <h2>Create an account</h2>
          <h1>
            Create/login to an existing <br />
            account to get started
          </h1>
          <p>
            An account is created with your email <br />
            and a desired password
          </p>
        </div>
      </section>
      <div class="hero">
        <img src="./hero.png" alt="Hero Image" />
        <div class="text">
          <h1>Download the app now.</h1>
          <p>Available on your favorite store. Start your premium experience now</p>
          <button className='btn'>Playstore</button>
          <button className='btn2'>App store</button>
        </div>
      </div>
      <footer className='container'>
        <img src="./Logo.png" alt="" />
        <div className="logos">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
      </footer>
    </div>
  )
}

export default App
