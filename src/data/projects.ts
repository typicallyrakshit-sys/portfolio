export interface Project {
  id: string;
  title: string;
  category: 'marketing' | 'brand' | 'web' | 'ecommerce';
  tags: string[];
  role: string;
  problem: string;
  approach: string;
  deliverables: string[];
  result: string;
  accentColor: string;
  bgColor: string;
  featured: boolean;
  statusBadge?: string;
  liveUrl?: string;
  caseStudyAvailable: boolean;
}

export const projects: Project[] = [
  {
    id: 'petzi',
    title: 'PETZI',
    category: 'ecommerce',
    tags: ['E-Commerce', 'Social Media', 'Digital Marketing', 'Graphic Design', 'Video Content'],
    role: 'Digital Marketing Lead & Web Manager',
    statusBadge: 'Active Client • Work In Progress',
    problem:
      'PETZI required a high-energy, trustworthy digital presence capable of turning curious pet parents into loyal recurring shoppers across both web and social storefronts.',
    approach:
      'Approached PETZI as a continuous omnichannel flywheel. Designed dynamic social assets, planned promotional campaigns, produced engaging short-form video content, and optimized the online store architecture for frictionless navigation and checkout.',
    deliverables: [
      'Online store management & conversion UI optimisation',
      'Social media strategy, visual aesthetics & content calendar',
      'Graphic design: product campaigns, banners, story templates',
      'Short-form video editing for Instagram Reels & TikTok',
      'Cross-channel digital marketing campaigns',
      'Holistic brand consistency across all customer touchpoints',
    ],
    result:
      'Currently in active progress — establishing core e-commerce workflows, brand design standards, and scalable social content engines.',
    accentColor: '#C8F135',
    bgColor: '#0A0A0A',
    featured: true,
    caseStudyAvailable: true,
  },
  {
    id: 'nydc',
    title: 'NYDC',
    category: 'web',
    tags: ['Web Platform', 'Community', 'Frontend Architecture', 'Brand Growth'],
    role: 'Lead Web Developer & Creative Director',
    statusBadge: 'Live Platform',
    problem:
      'National Youth Development Council needed an authoritative, modern digital home to unite youth-centric initiatives, communicate vision, and facilitate state-level program participation.',
    approach:
      'Architected a bold, accessible web platform built with clean responsive interfaces, structured information architecture, rapid load times, and intuitive pathways for announcements, events, and initiatives.',
    deliverables: [
      'Complete web architecture & UI engineering',
      'Responsive design across mobile, tablet, and widescreen',
      'Program and initiative documentation hub',
      'Community engagement and contact funnel',
    ],
    result:
      'Active official platform serving students and youth leaders nationwide at nydc.co.in.',
    accentColor: '#FF5C00',
    bgColor: '#F5F0E8',
    featured: false,
    liveUrl: 'https://nydc.co.in',
    caseStudyAvailable: true,
  },
  {
    id: 'bgsmun',
    title: 'BGSMUN',
    category: 'brand',
    tags: ['Conference Portal', 'Event Branding', 'Delegate Portal', 'UX Design'],
    role: 'Lead Developer & Visual Strategist',
    statusBadge: 'Live Event Portal',
    problem:
      'A prestigious Model United Nations conference needed an editorial-grade web portal to handle committee disclosures, executive board profiles, delegate guidelines, and event schedules.',
    approach:
      'Engineered an immersive, high-contrast digital portal blending diplomatic prestige with modern brutalist accents, swift client-side routing, and crystal-clear committee matrices.',
    deliverables: [
      'Full conference portal & secretariat hub',
      'Committee briefs, agendas, and backgrounder guides',
      'Responsive registration and announcement systems',
      'Visual identity and digital campaign collateral',
    ],
    result:
      'Successfully deployed at bgsmun.in, providing hundreds of delegates and advisors with instant access to conference resources.',
    accentColor: '#1A1AFF',
    bgColor: '#F5F0E8',
    featured: false,
    liveUrl: 'https://bgsmun.in',
    caseStudyAvailable: true,
  },
  {
    id: 'fresherscommunity',
    title: 'FRESHERS COMMUNITY',
    category: 'marketing',
    tags: ['Community Growth', 'Social Strategy', 'Web Hub', 'Gen-Z Engagement'],
    role: 'Co-Founder, Strategist & Developer',
    statusBadge: 'Live Community',
    problem:
      'Incoming university freshers lacked a single trustworthy launchpad to connect with peers, find verified college updates, and discover essential academic and cultural resources.',
    approach:
      'Combined grassroots digital marketing with a clean, mobile-first web hub. Paired high-impact viral social media content with practical digital tools and guidebooks.',
    deliverables: [
      'Community web portal at fresherscommunity.site',
      'Social media growth strategy and campaign creative',
      'Resource directory and peer onboarding funnels',
      'Interactive student interaction touchpoints',
    ],
    result:
      'Built a vibrant, active student hub with organic traction and daily active community engagement.',
    accentColor: '#C8F135',
    bgColor: '#0A0A0A',
    featured: false,
    liveUrl: 'https://fresherscommunity.site',
    caseStudyAvailable: true,
  },
  {
    id: 'rakshit-nydc',
    title: 'RAKSHIT @ NYDC',
    category: 'web',
    tags: ['Institutional Node', 'Personal Hub', 'Interactive Portfolio'],
    role: 'Creative Technologist',
    statusBadge: 'Live Subdomain',
    problem:
      'Needed an authenticated, high-performance personal initiative portal hosted directly under the official NYDC domain structure.',
    approach:
      'Engineered a lightweight, high-performance web experience highlighting key leadership milestones, digital experiments, and direct access for strategic collaboration.',
    deliverables: [
      'Subdomain infrastructure & hosting deployment',
      'Interactive layout with neo-brutalist accents',
      'Direct contact & project index routing',
    ],
    result:
      'Live and verified at rakshit.nydc.co.in as a direct gateway for institutional partnerships.',
    accentColor: '#FF5C00',
    bgColor: '#F5F0E8',
    featured: false,
    liveUrl: 'https://rakshit.nydc.co.in',
    caseStudyAvailable: true,
  },
];
