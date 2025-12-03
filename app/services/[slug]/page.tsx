import { services } from '../../../utils/data';
import { notFound } from 'next/navigation';

interface Params {
  params: { slug: string };
}

export default function ServiceDetail({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <p className="text-gray-300 text-lg mb-10">{service.description}</p>
      <div className="space-y-6 text-gray-400">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          pretium, urna ut egestas sodales, lectus urna efficitur quam, at
          tincidunt elit massa id odio. 
        </p>
        <p>
          We provide end-to-end solutions including planning, implementation,
          and optimization for maximum impact.
        </p>
      </div>
    </section>
  );
}
