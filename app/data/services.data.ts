import {
  bookkeepingIcon,
  financialReportsIcon,
  invoicingIcon,
  payrollIcon,
  taxPreparationIcon
} from '../lib/icons'
import { ServicesProps } from '../types/services.types'

const services: ServicesProps[] = [
  {
    icon: bookkeepingIcon,
    title: 'Bookkeeping',
    text: 'Accurate and reliable bookkeeping services to keep your financial records organized and up-to-date.'
  },
  {
    icon: taxPreparationIcon,
    title: 'Tax Preparation',
    text: 'Comprehensive tax preparation and filing services to ensure compliance and maximize returns.'
  },
  {
    icon: invoicingIcon,
    title: 'Invoicing & Accounts Receivable',
    text: 'Professional invoicing and accounts receivable management to streamline cash flow.'
  },
  {
    icon: financialReportsIcon,
    title: 'Financial Reporting',
    text: 'Detailed financial reports to provide clarity and insight into your business performance.'
  },
  {
    icon: payrollIcon,
    title: 'Payroll Services',
    text: 'Efficient payroll processing and compliance management for businesses of all sizes.'
  }
]

export { services }
