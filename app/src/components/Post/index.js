/*
* Npm import
*/
import React from 'react';
import PropTypes from 'prop-types';
/*
* Local import
*/


/*
* Code
*/
const Post = ({ title, category, excerpt }) => (
  <div className="post">
    <h1 className="post-title">{title}</h1>
    <div className="post-category">{category}</div>
    <div className="post-excerpt">{excerpt}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
);
Post.propType = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

/*
 * Export default
 */
export default Post;
