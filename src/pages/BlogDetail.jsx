import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard'; 

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null,
      relatedBlogs: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.loadBlogPost();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadBlogPost();
    }
  }

  loadBlogPost = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch('/data/blog.json');
      const data = await response.json();
      
      const blogId = parseInt(this.props.match.params.id);
      const blog = data.blogs.find(b => b.id === blogId);
      
      if (blog) {
        // İlgili blog yazılarını bul (aynı kategori, farklı yazılar)
        const relatedBlogs = data.blogs
          .filter(b => b.id !== blogId && b.category === blog.category)
          .slice(0, 3);
        
        this.setState({
          blog,
          relatedBlogs,
          loading: false,
          error: null
        });
      } else {
        this.setState({
          blog: null,
          loading: false,
          error: 'Blog post not found'
        });
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
      this.setState({
        blog: null,
        loading: false,
        error: 'Failed to load blog post'
      });
    }
  }

  handleShare = (platform) => {
    const { blog } = this.state;
    const currentUrl = window.location.href;
    const title = encodeURIComponent(blog.title);

    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${currentUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }

  render() {
    const { blog, relatedBlogs, loading, error } = this.state;

    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <Footer />
        </div>
      );
    }

    if (error || !blog) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <nav className="text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-900">{blog.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                {blog.category}
              </span>
              {blog.tags.map((tag, index) => (
                <span key={index} className="text-gray-600">{tag}</span>
              ))}
              {blog.isNew && (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  NEW
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {blog.description}
            </p>

            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{blog.author}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.views}</span>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-2">Share:</span>
                <button
                  onClick={() => this.handleShare('twitter')}
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  title="Share on Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  onClick={() => this.handleShare('facebook')}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  title="Share on Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </button>
                <button
                  onClick={() => this.handleShare('linkedin')}
                  className="p-2 text-gray-400 hover:text-blue-700 transition-colors duration-200"
                  title="Share on LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                {blog.content.introduction}
              </p>
            </div>

            {blog.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conclusion</h3>
              <p className="text-gray-700 leading-relaxed">
                {blog.content.conclusion}
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Written by {blog.author}</p>
                  <p className="text-gray-600">Content writer and digital marketing expert</p>
                </div>
              </div>
              
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Blog
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    );
  }
}

// PropTypes validation
BlogDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};