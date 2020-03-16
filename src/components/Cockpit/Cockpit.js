import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css';
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
    assignedClasses.push('red'); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push('bold'); // classes = ['red', 'bold']
  }

  const buttonClasses = ['btn'];
  if (props.showPersons) {
    buttonClasses.push('red-btn')
  }

  return(
      <header className="Cockpit">
          <h1 className="Cockpit-title">{props.title}</h1>
          <p className={assignedClasses.join(' ')}>It's really WORKING!</p>
          <button 
            ref={toggleBtnRef}
            className={buttonClasses.join(' ')}
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