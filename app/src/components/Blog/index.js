/*
* Npm import
*/
import React from 'react';

/*
* Local import
*/
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// Datas
import categories from 'src/datas/categories';
import posts from 'src/datas/posts';


/*
* Code
*/
class Blog extends React.Component {
/*
 * State initial
 */
state = {
  selectedCategory: 'O’clock',
}
  /*
  * Action
  */
handleClick = selectedCategory => () => {
  this.setState({ selectedCategory });
}

/*
* Render
*/
render() {
  const { selectedCategory } = this.state.selectedCategory;
  const selectedPosts = posts.filter(post => (
    post.category === selectedCategory
    ||
    selectedCategory === 'Accueil'
  ));
  return (
    <div id="blog" onClick={this.handleClick}>
      <Header
        categories={categories}
        onCategoryClick={this.handleClick}
      />
      <Posts posts={selectedPosts} />
      <Footer />
    </div>
  );
}
}

/*
 * Export default
 */
export default Blog;
