import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      filteredBlogs: [],
      selectedCategory: 'All',
      searchTerm: '',
      loading: true,
      error: null
    };
  }

  // Fetch blog data when component mounts
  componentDidMount() {
    this.fetchBlogData();
  }

  // Fetch blog data from public directory
  fetchBlogData = async () => {
    try {
      const response = await fetch('/data/blog.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog data');
      }
      const data = await response.json();
      this.setState({
        blogs: data.blogs,
        filteredBlogs: data.blogs,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching blog data:', error);
      this.setState({
        error: error.message,
        loading: false
      });
    }
  }

  // Kategori filtreleme
  handleCategoryFilter = (category) => {
    this.setState({
      selectedCategory: category,
      filteredBlogs: category === 'All' 
        ? this.state.blogs 
        : this.state.blogs.filter(blog => blog.category === category)
    });
  }

  // Arama işlevi
  handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    this.setState({
      searchTerm,
      filteredBlogs: this.state.blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.description.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
      )
    });
  }

  // Kategorileri al
  getCategories = () => {
    const categories = ['All', ...new Set(this.state.blogs.map(blog => blog.category))];
    return categories;
  }

  render() {
    const { filteredBlogs, selectedCategory, searchTerm, loading, error } = this.state;
    const categories = this.getCategories();

    // Loading state
    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <i className="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Blog Posts</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button 
                onClick={this.fetchBlogData}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-blue-100 text-lg">
              Stay updated with the latest news, trends, and insights from our experts
            </p>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={this.handleSearch}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => this.handleCategoryFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No blog posts found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-600">
                    Showing {filteredBlogs.length} of {this.state.blogs.length} blog posts
                    {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
                    {searchTerm && ` matching "${searchTerm}"`}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}