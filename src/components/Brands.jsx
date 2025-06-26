import { Component } from 'react';

export default class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [
        {
          name: "Hooli",
          logo: "./images/hooli.svg",
          description: "Technology Solutions"
        },
        {
          name: "Lyft", 
          logo: "./images/lyat.svg",
          description: "Transportation"
        },
        {
          name: "Stripe",
          logo: "./images/stripe.svg",
          description: "Payment Processing"
        },
        {
          name: "AWS",
          logo: "./images/aws.svg",
          description: "Cloud Services"
        },
        {
          name: "Reddit",
          logo: "./images/Vector.svg",
          description: "Social Platform"
        }
      ]
    };
  }

  render() {
    const { brands } = this.state;

    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              Trusted Partners
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Brands That Trust Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to work with industry leaders who share our commitment to excellence and innovation
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Brand Logo */}
                <div className="flex items-center justify-center h-12 mb-4">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Brand Info - Hidden by default, shown on hover */}
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {brand.description}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Brand Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Want to join our growing list of satisfied partners?
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <i className="fas fa-handshake mr-2"></i>
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    );
  }
}