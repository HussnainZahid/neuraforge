import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

export const metadata = {
  title: 'NeuraForge Blog - AI Insights & Tech Innovations',
  description: 'Explore our latest articles on AI, machine learning, web development, and digital transformation.',
  openGraph: {
    title: 'NeuraForge Blog',
    description: 'Stay updated with cutting-edge AI insights and tech trends.',
    url: 'https://neuraforge.com/blog',
    siteName: 'NeuraForge',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default async function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-800 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">NeuraForge Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights on AI, machine learning, web development, and digital innovation from our team of experts.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No posts available yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description || post.excerpt || 'No description available'}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Read More <FaChevronRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}