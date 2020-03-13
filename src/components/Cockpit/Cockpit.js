import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js useEffect');

    const timer = setTimeout(() => {
      alert('Data saved!');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js Clean up');
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
            <button className="btn" onClick={props.clicked}>
                Toggle persons
            </button>
        </header>
    );
}

export default React.memo(cockpit);