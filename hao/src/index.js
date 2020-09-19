import React from 'react';
import ReactDOM from 'react-dom';
import Tickets from './pages/tickets';
import './components/style/button.css';
import './components/style/input.css';

const content = document.getElementById('menu');
const contentBanner = document.getElementById('ticketsBanner');

ReactDOM.render(<Tickets />, content);
ReactDOM.render(<Tickets />, contentBanner);
