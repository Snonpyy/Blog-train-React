 /*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

/*
 * Local import
 */
import Blog from 'src/components/Blog';

/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root');
  render(<Blog />, node);
});
