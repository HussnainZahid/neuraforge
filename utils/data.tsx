import { Brain, Code, BarChart3, MessageSquare, Globe, Zap, Palette, Shield } from 'lucide-react';

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    title: 'AI & Machine Learning Solutions',
    slug: 'ai-ml',
    description: 'Develop custom machine learning models, automated pipelines, and scalable deployment strategies for intelligent business applications.',
    icon: <Brain className="w-6 h-6 text-primary" />,
    image: '/services/ai-ml.jpg',
    features: [
      'Custom ML model development',
      'Data pipeline automation',
      'Model deployment & monitoring',
      'Predictive analytics',
      'Computer vision & NLP'
    ],
    benefits: [
      'Improved decision-making',
      'Operational efficiency',
      'Competitive advantage',
      'Cost reduction',
      'Scalable AI infrastructure'
    ],
    useCases: [
      'Fraud detection systems',
      'Recommendation engines',
      'Predictive maintenance',
      'Customer sentiment analysis',
      'Image recognition apps'
    ]
  },
  {
    title: 'Web & App Development',
    slug: 'web-apps',
    description: 'Build performant, scalable web and mobile applications using modern frameworks like Next.js, React Native, and cloud-native architectures.',
    icon: <Code className="w-6 h-6 text-primary" />,
    image: '/services/web-apps.jpg',
    features: [
      'Full-stack development',
      'Responsive UI/UX design',
      'API integration',
      'Progressive Web Apps (PWA)',
      'Cross-platform mobile apps'
    ],
    benefits: [
      'Enhanced user experience',
      'Faster time-to-market',
      'Seamless scalability',
      'Mobile-first approach',
      'Reduced development costs'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS applications',
      'Enterprise dashboards',
      'Mobile banking apps',
      'Content management systems'
    ]
  },
  {
    title: 'SEO & Digital Growth',
    slug: 'seo-growth',
    description: 'Implement data-driven SEO strategies, content optimization, and growth hacking techniques to boost online visibility and user acquisition.',
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    image: '/services/seo-growth.jpg',
    features: [
      'Technical SEO audits',
      'Content strategy & optimization',
      'Link building campaigns',
      'Performance tracking',
      'Conversion rate optimization'
    ],
    benefits: [
      'Increased organic traffic',
      'Higher search rankings',
      'Better user engagement',
      'Improved ROI',
      'Long-term growth'
    ],
    useCases: [
      'Website traffic boost',
      'E-commerce sales growth',
      'Lead generation',
      'Brand awareness campaigns',
      'Local business optimization'
    ]
  },
  {
    title: 'Chatbots & Automation',
    slug: 'chatbots-automation',
    description: 'Create intelligent chatbots and automation workflows using NLP and AI to streamline customer service and business processes.',
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    image: '/services/chatbots.jpg',
    features: [
      'Custom chatbot development',
      'Workflow automation',
      'Multi-channel integration',
      'AI-powered responses',
      'Analytics & reporting'
    ],
    benefits: [
      '24/7 customer support',
      'Reduced operational costs',
      'Improved response times',
      'Personalized interactions',
      'Scalable automation'
    ],
    useCases: [
      'Customer service bots',
      'Sales lead qualification',
      'HR process automation',
      'E-commerce assistants',
      'Internal workflow tools'
    ]
  },
  {
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description: 'Design and implement cloud infrastructure with DevOps practices for reliable, scalable, and efficient application deployment.',
    icon: <Globe className="w-6 h-6 text-primary" />,
    image: '/services/cloud.jpg',
    features: [
      'Cloud migration',
      'CI/CD pipelines',
      'Containerization (Docker/Kubernetes)',
      'Infrastructure as Code',
      'Monitoring & security'
    ],
    benefits: [
      'High availability',
      'Cost optimization',
      'Faster deployments',
      'Better collaboration',
      'Enhanced security'
    ],
    useCases: [
      'Cloud-native applications',
      'Microservices architecture',
      'Scalable web platforms',
      'Data backup solutions',
      'Hybrid cloud setups'
    ]
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux',
    description: 'Craft intuitive and engaging user interfaces with a focus on user experience, accessibility, and modern design principles.',
    icon: <Palette className="w-6 h-6 text-primary" />,
    image: '/services/ui-ux.jpg',
    features: [
      'Wireframing & prototyping',
      'User research',
      'Responsive design',
      'Accessibility compliance',
      'Design systems'
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Brand consistency',
      'Reduced bounce rates',
      'Better retention'
    ],
    useCases: [
      'Website redesigns',
      'Mobile app interfaces',
      'Dashboard designs',
      'SaaS product UI',
      'E-learning platforms'
    ]
  }
];