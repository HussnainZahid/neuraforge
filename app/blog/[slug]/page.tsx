import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaCheckCircle, FaChevronLeft, FaBrain, FaRobot, FaChartLine, FaCode, FaMobile, FaCloud } from 'react-icons/fa';
import { services } from '@/utils/data';
import { Metadata } from 'next';

interface Params {
  params: { slug: string };
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  FaBrain: <FaBrain className="text-4xl text-primary" />,
  FaRobot: <FaRobot className="text-4xl text-primary" />,
  FaChartLine: <FaChartLine className="text-4xl text-primary" />,
  FaCode: <FaCode className="text-4xl text-primary" />,
  FaMobile: <FaMobile className="text-4xl text-primary" />,
  FaCloud: <FaCloud className="text-4xl text-primary" />
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | NeuraForge Services`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default function ServiceDetail({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Get the icon component from the mapping
  const serviceIcon = service.iconName ? iconMap[service.iconName] : null;

  // Use features from data or fallback to defaults
  const features = service.features || [
    'Scalable architecture',
    'AI-powered optimization',
    'Seamless integration',
    '24/7 support',
    'Custom implementation',
    'Ongoing maintenance'
  ];

  const benefits = service.benefits || [
    'Increased efficiency',
    'Cost reduction',
    'Better insights'
  ];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
        >
          <FaChevronLeft className="text-sm" />
          Back to Services
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          {serviceIcon && (
            <div className="flex justify-center mb-6">
              {serviceIcon}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Featured Image */}
        {service.image && (
          <div className="mb-12">
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={600}
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        )}

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Key Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-primary text-2xl" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At NeuraForge, we combine cutting-edge technology with industry expertise to deliver 
            solutions that drive real business value. Our {service.title.toLowerCase()} service is 
            designed to scale with your needs, ensuring long-term success.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're a startup or an enterprise, our tailored approach guarantees optimal 
            results. We work closely with you to understand your unique challenges and deliver 
            solutions that exceed expectations.
          </p>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related) => {
                const relatedIcon = related.iconName ? iconMap[related.iconName] : null;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    {relatedIcon && (
                      <div className="mb-4">{relatedIcon}</div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {related.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Learn More <FaChevronRight className="text-xs" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how {service.title} can transform your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition-all"
          >
            Get Started with {service.title} <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}