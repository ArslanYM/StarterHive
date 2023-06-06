import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// 
const ScrollToTop = (props) => {

    // Determinate current location
    const location = useLocation();

    // If page change scroll to the top of the page
    useEffect(() =>{
        window.scrollTo(0,0);        
    },[location])

  return (
    <>{props.children}</>
  )
}

export default ScrollToTop;

ScrollToTop.propTypes = {
    children: PropTypes.node.isRequired,
}