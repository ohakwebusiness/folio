
import React from 'react';
import { blogPosts } from '../constants';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Insights, trends, and thoughts from the BigTink team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="group flex flex-col">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="mt-6 flex-grow flex flex-col">
                    <p className="text-sm text-gray-500">{post.date} &bull; {post.author}</p>
                    <h2 className="mt-2 text-xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{post.title}</h2>
                    <p className="mt-3 text-gray-600 flex-grow">{post.excerpt}</p>
                    <div className="mt-4">
                         <a href={`#/blog/${post.id}`} className="inline-flex items-center font-semibold text-brand-accent hover:text-brand-primary transition-colors">
                            Read More
                            <ArrowRightIcon className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
