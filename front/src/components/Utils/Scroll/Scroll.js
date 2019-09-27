import  {useEffect} from 'react';
import { withRouter } from 'react-router-dom';


const ScrollToTop = ({ children, location: { pathname }}) => {

  function shouldScroll(){
    const serviceRegex = '(/Blog/)([A-Z])+';
    return !pathname.match(serviceRegex);
  }

  useEffect(() => {
    if(shouldScroll()){
      window.scrollTo(0, 0);
    }else{
      
    }
  }, [pathname]);

  return children || null;


};

export default withRouter(ScrollToTop);
