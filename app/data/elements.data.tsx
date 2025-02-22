import {
  clientsIcon,
  financialReportsIcon,
  invoicingIcon,
  securityIcon,
  reliableSecurityIcon,
  dataInsightsIcon,
  personalizedServiceIcon,
  provenExcellenceIcon,
  clientFirstIcon
} from '@/app/lib/icons'
import DonateSVG from '../components/svg/DonateSVG'
import DiamondSVG from '../components/svg/DiamondSVG'

const stats = [
  {
    icon: clientsIcon,
    number: 50,
    subtitle: 'Clients Served'
  },
  {
    icon: financialReportsIcon,
    number: 120,
    subtitle: 'Financial Reports Prepared'
  },
  {
    icon: invoicingIcon,
    number: 5,
    subtitle: 'Tax Returns Filed'
  },
  {
    icon: securityIcon,
    number: 2,
    subtitle: 'Years of Secure Financial Solutions'
  }
]

const whoWeAre = [
  {
    icon: <DonateSVG />,
    text: 'Securing Your Financial Future'
  },
  {
    icon: <DiamondSVG />,
    text: 'Exceptional Quality, Every Time'
  }
]

const whyChooseUs = [
  {
    icon: reliableSecurityIcon,
    title: 'Reliable Security',
    description:
      'Your financial data is safeguarded with industry-standard security measures, ensuring peace of mind.',
    img: '/images/why-1.jpg'
  },
  {
    icon: dataInsightsIcon,
    title: 'Data-Driven Insights',
    description:
      'Our solutions provide actionable financial reports, helping you make informed business decisions.',
    img: '/images/why-2.jpg'
  },
  {
    icon: personalizedServiceIcon,
    title: 'Personalized Service',
    description:
      'We focus on understanding your unique needs to deliver tailored bookkeeping solutions.',
    img: '/images/why-3.jpg'
  },
  {
    icon: provenExcellenceIcon,
    title: 'Proven Excellence',
    description:
      'With a track record of satisfied clients, we are committed to exceeding your expectations.',
    img: '/images/why-4.jpg'
  },
  {
    icon: clientFirstIcon,
    title: 'Trusted Expertise',
    description:
      'Rely on our years of experience to deliver exceptional, reliable, and professional bookkeeping services.',
    img: '/images/why-5.jpg'
  }
]

export { stats, whoWeAre, whyChooseUs }
