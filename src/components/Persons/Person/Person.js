import React, { Component } from 'react';
import './Person.css';

class Person extends Component
{	
	render() {
		console.log('[Person.js rendering...');
		return (		
			<div className="Person">
				<p onClick={this.props.click}>Jeg er en {this.props.name} og er {this.props.age} år gammel!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</div>
		);
	} 
}

export default Person;