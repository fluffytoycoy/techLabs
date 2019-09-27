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
      blogs:  [
          {
          src: 'https://www.placecage.com/gif/500/300',
          title: 'Modernize Data Management',
          category: 'data engineering',
          description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews',
          author: "Matt Coy"
        },{
          src: 'https://www.placecage.com/gif/500/500',
          title: 'Agile Data Management',
          category: 'agile',
          author: "Matt Coy",
          description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
        },{
          src: 'https://www.placecage.com/gif/500/249',
          title: 'Agile Testing',
          category: 'agile',
          author: "Matt Coy",
          description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
        },{
          src: 'https://www.placecage.com/gif/500/252',
          title: 'News',
          category: 'news',
          author: "Rob Cage",
          description: 'St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
        },
        {
          src: 'https://www.placecage.com/gif/500/253',
          title: 'Cage it up',
          category: 'culture',
          author: "Nick Coy",
          description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
        },{
          src: 'https://www.placecage.com/gif/500/251',
          title: 'New Resources',
          category: 'resource',
          author: "Joe Ukee",
          description: 'That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
        },
        {
          src: 'https://www.placecage.com/gif/500/250',
          title: 'Life Like Cage',
          category: 'culture',
          author: "Rob Cage",
          description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
        },
        {
          id: 3,
          title: 'Breaking MonoLiths',
          category: 'case study',
          author: "Joe Ukee",
          description: 'A telecommunications client needed to scale its individual applications and services independently and deliver to production faster to provide greater business value.',
          src: '/img/HeroSquares/mono.jpg'
        },
        {
          title: 'The Green Fields',
          category: 'case study',
          author: "Joe Ukee",
          description: 'A multinational pharmaceutical and life sciences company endured tedious, time-intensive processes to compare large sets of crop trial data. We combined reporting platforms into a single solution that offered more powerful analytic capabilities and improved the overall user experience.',
          src: '/img/HeroSquares/field.jpeg'
        },
      ]
    };
  };

  render(props) {
    return (
      <Router>
      <ScrollToTop >
				<Header/>
					<Switch>
						<Route exact  path="/" render={props => <Home {...props} blogs={this.state.blogs} />}/>
            <Route exact path="/Services/" render={props => <Services {...props} />}/>
            <Route exact path="/Services/Decision-Science" render={props => <DecisionScience {...props} />}/>
            <Route exact path="/Services/Data-Engineering" render={props => <DataEngineering {...props} />}/>
            <Route exact path="/Services/Cloud" render={props => <Cloud {...props} />}/>

            <Route exact path="/Work/" render={props => <Work blogs={this.state.blogs} {...props} />}/>

            <Route exact path="/Culture/" render={props => <Culture {...props} />}/>
            <Route exact path="/Culture/Community" render={props => <Community {...props} />}/>

            <Route exact path="/Blog/" render={props => <Blog blogs={this.state.blogs} {...props}/>}/>
            <Route exact path="/Blog/Category/" render={props => <Blog {...props} blogs={this.state.blogs} {...props}/>}/>
            <Route exact path="/Blog/Category/:category" render={props => <Blog {...props} blogs={this.state.blogs} {...props}/>}/>
            <Route exact path="/Blog/Article/:blogId" render={props => <Blog {...props} blogs={this.state.blogs} {...props}/>}/>
            <Route component={NotFound}/>
				   </Switch>
        <Route render={props => <Footer {...props}/>}/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
