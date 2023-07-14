import { NavItemProps } from 'models';
import { DashRoutes } from 'utils';
import { ImStack } from '@react-icons/all-files/im/ImStack';
import { RiDashboardFill } from '@react-icons/all-files/ri/RiDashboardFill';
import { FaSearchPlus } from '@react-icons/all-files/fa/FaSearchPlus';
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';
import { BsCreditCard } from '@react-icons/all-files/bs/BsCreditCard';
import { nanoid } from 'nanoid';
import { RiPlayCircleLine } from '@react-icons/all-files/ri/RiPlayCircleLine';
import { AiFillShopping } from '@react-icons/all-files/ai/AiFillShopping';
import { IoMdAnalytics } from '@react-icons/all-files/io/IoMdAnalytics';

const brandNavItems = [
  {
    icon: RiDashboardFill,
    title: 'Dashboard',
    path: DashRoutes.campaigns,
    id: nanoid(12),
  },
  {
    icon: RiPlayCircleLine,
    title: 'Discover',
    path: DashRoutes.discover,
    id: nanoid(12),
  },
  {
    icon: AiFillShopping,
    title: 'Content library',
    path: DashRoutes.content,
    id: nanoid(12),
  },
  {
    icon: IoMdAnalytics,
    title: 'Performance',
    path: DashRoutes.performance,
    id: nanoid(12),
  },
];

const creatorsNavItems = [
  {
    icon: RiDashboardFill,
    title: 'Dashboard',
    path: DashRoutes.overview,
    id: nanoid(12),
  },
  {
    icon: FaSearchPlus,
    title: 'Explore',
    path: DashRoutes.explore,
    id: nanoid(12),
  },
  {
    icon: FaCopy,
    title: 'Campaign flow',
    path: DashRoutes.campaignFlow,
    id: nanoid(12),
  },
  {
    icon: ImStack,
    title: 'Accounts',
    path: DashRoutes.accounts,
    id: nanoid(12),
  },
  {
    icon: BsCreditCard,
    title: 'Cards',
    path: DashRoutes.cards,
    id: nanoid(12),
  },
];

export const navItems = (isBrand: boolean): NavItemProps[] => {
  if (isBrand) {
    return brandNavItems;
  }

  return creatorsNavItems;
};
