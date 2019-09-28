import  {useEffect } from 'react';
import { withRouter } from 'react-router-dom';


const ScrollToTop = ({ children, location: { pathname }}) => {

  // Wrap with useCallback to avoid change on every render

  //If location is blog dont scroll
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
