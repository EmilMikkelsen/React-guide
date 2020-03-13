import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
import authContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js useEffect');
    // http request....
    // const timer = setTimeout(() => {
    //   alert('Data saved!');
    // }, 1000);
    
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js Clean up in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js 2nd useEffect');
    return () => {
      console.log('[Cockpit.js 2nd Clean up');
    };
  });

    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return(
        <header className="Cockpit">
            <h1 className="Cockpit-title">{props.title}</h1>
            <button 
              ref={toggleBtnRef}
              className="btn" 
              onClick={props.clicked}>
                Toggle persons
            </button>          
                <button
                  className="btn" 
                  onClick={authContext.login}>
                    Log in
                </button>
        </header>
    );
}

export default React.memo(cockpit);