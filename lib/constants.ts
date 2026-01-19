import type { Service, PortfolioItem } from '@/types/index';

export const SERVICES: Service[] = [
  {
    title: 'CNC Machining',
    description:
      'Precision computer-controlled machining for complex parts and components with exceptional accuracy.',
    image: '/pictures/CNC-machines.jpeg',
  },
  {
    title: 'Sheet Metal Cutting and Bending',
    description:
      'Expert sheet metal fabrication, cutting, bending, and forming for various industrial applications.',
    image: '/pictures/sheet metal.jpg',
  },
  {
    title: 'Laser Cutting',
    description:
      'High-precision laser cutting services for metals and materials with clean, accurate edges.',
    image: '/pictures/laser cutting.jpg',
  },
  {
    title: 'Acrylic',
    description:
      'Custom acrylic fabrication, cutting, and shaping for displays, signage, and custom projects.',
    image: '/pictures/Clear-Acrylic-Sheet-1-1.jpg',
  },
  {
    title: 'Powder Coating',
    description:
      'Durable powder coating finishes for protection and aesthetic enhancement of metal surfaces.',
    image: '/pictures/Powder-Coating-Metal-Parts.jpg',
  },
  {
    title: '3D Printing',
    description:
      'Advanced 3D printing services for prototypes, custom parts, and complex geometries.',
    image: '/pictures/3d printing.jpg',
  },
  {
    title: 'Engraving',
    description:
      'Precision engraving services for metal, acrylic, and other materials with detailed customization.',
    image: '/pictures/engraving.png',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'Defender Car Company Event',
    description: 'Custom iron poster creation for Defender car company event',
    image: '/pictures/defender project.jpg',
  },
];

export const COMPANY_INFO = {
  name: 'Alsarraf Numercial Machining',
  phone: '+965 558 84746',
  location: 'Shuwaikh Industrial, Street 37, Kuwait City',
  instagram: 'https://www.instagram.com/anmcnc',
  googleMaps:
    'https://www.google.com/maps?q=Alsarraf+Numerical+Machining+شركة+الصراف+قص+ليزر,+Shuwaikh+Industrial,+Street+37,+Kuwait+City&ftid=0x3fcf9b7bb03917a9:0xdca4f29838d67188&entry=gps',
} as const;
