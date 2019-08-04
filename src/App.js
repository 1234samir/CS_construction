import { BrowserRouter as Router, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Header from './header/header';
import Slides from './slides/slides';
import { Cards } from './cards/cards';
import { Featurette } from './featurette/featurette';
import { FeaturetteLeft } from './featurette_left/featurette_left';
import { Divider } from './Divider';
import { Footer } from './footer/Footer';
import PhoneNumber from './Projects';
import {useAuthState} from './hooks/auth'
function Home() {
  const [auth] = useAuthState()
  console.log(Promise.resolve(auth))
  return (
    <div className="App">
      <Slides />
      <div className="body-section">
        <Cards />

        <Divider />

        <Featurette />
        <Divider />

        <FeaturetteLeft />
        <Divider />

        <Featurette />
        <Divider />
      </div>
    </div>
  );
}

function About() {
  return <h2 style={{ margin: '100px' }}>About</h2>;
}

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <PhoneNumber />
    </div>
  );
}

function Contact() {
  return (
    <div>
      {' '}
      contact should be here
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
        <Route path="/contact/" component={Contact} />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;

// const ButtonExampleEmphasis = () => {
//   return (
//     <div  id="container">
//       <Header />
//     </div>
//   );
// };

// export default ButtonExampleEmphasis;

// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log('Constractor');
//   }
//   componentWillMount() {
//     console.log('Will Mount it');
//   }
//   componentDidMount() {
//     console.log('Did Mount');
//   }
//   render() {
//     console.log('Render');

//     return (
//       <div>
//         <h1> Hello World</h1>
//       </div>
//     );
//   }
// }

// / they only calls onece in browser
// snipers
// rfc
// rcc
