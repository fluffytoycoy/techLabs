import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "animate.css/animate.min.css";
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import Services from './components/ServicesPage/Services'
import Cloud from './components/ServicesPage/Cloud/Cloud'
import DataEngineering from './components/ServicesPage/DataEngineering/DataEngineering'
import DecisionScience from './components/ServicesPage/DecisionScience/DecisionScience'
import ScrollToTop from './components/Utils/Scroll/Scroll';
import Community from './components/CulturePage/Community/Community';
import Culture from './components/CulturePage/Culture'
import Footer from './components/Footer/Footer';
import Work from './components/WorkPage/Work';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <Router>
      <ScrollToTop >
				<Header/>
					<Switch>
						<Route exact  path="/" render={props => <Home {...props} />}/>
            <Route exact path="/Services/" render={props => <Services {...props} />}/>
            <Route exact path="/Services/Decision-Science" render={props => <DecisionScience {...props} />}/>
            <Route exact path="/Services/Data-Engineering" render={props => <DataEngineering {...props} />}/>
            <Route exact path="/Services/Cloud" render={props => <Cloud {...props} />}/>

            <Route exact path="/Work/" render={props => <Work {...props} />}/>

            <Route exact path="/Culture/" render={props => <Culture {...props} />}/>
            <Route exact path="/Culture/Community" render={props => <Community {...props} />}/>

            <Route exact path="/Blog/" render={props => <Blog {...props}/>}/>
            <Route exact path="/Blog/:blogId" render={props => <Blog {...props}/>}/>
            <Route component={NotFound}/>
				       </Switch>
        <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
