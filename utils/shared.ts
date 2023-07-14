import instagram from 'assets/images/instagram.png';
import youtube from 'assets/images/youtube.png';
import tikTok from 'assets/images/tiktok.png';
import facebook from 'assets/images/facebook.png';
import twitter from 'assets/images/twitter.png';
import { SocialMedia } from 'models';
import { StaticImageData } from 'next/image';
import { IconType } from '@react-icons/all-files';
import { HiOutlineDotsCircleHorizontal } from '@react-icons/all-files/hi/HiOutlineDotsCircleHorizontal';
import { FaTiktok, FaMusic, FaInstagram } from 'react-icons/fa';

export const socialMediaImgs: Record<SocialMedia, StaticImageData> = {
  instagram,
  youtube,
  tikTok,
  facebook,
  twitter,
};

export const sharedIcons: Record<string, IconType> = {
  tikTok: FaTiktok,
  sound: FaMusic,
  instagram: FaInstagram,
  creative: HiOutlineDotsCircleHorizontal,
};