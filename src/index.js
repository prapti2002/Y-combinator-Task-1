import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Function to handle drag start event
function handleDragStart(event) {
    event.target.classList.add('dragging');
  }
  
  // Function to handle drag over event
  function handleDragOver(event) {
    event.preventDefault();
  }
  
  // Function to handle drop event
  function handleDrop(event) {
    event.preventDefault();
    const card = document.querySelector('.dragging');
    const targetSwimlane = event.target.closest('.swimlane');
    targetSwimlane.appendChild(card);
    card.classList.remove('dragging');
    card.classList.add('changed');
  }
  
  // Add event listeners to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragover', handleDragOver);
    card.addEventListener('drop', handleDrop);
  });
  
