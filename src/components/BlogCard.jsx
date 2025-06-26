import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        {blog.isNew && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            NEW
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="text-blue-600">{blog.category}</span>
          {blog.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <i className="far fa-clock"></i>
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-chart-line"></i>
            <span>{blog.views}</span>
          </div>
        </div>
                  <Link to={`/blog/${blog.id}`} className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200">
          Read More <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      </div>
    </article>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired
  }).isRequired
};

export default BlogCard;