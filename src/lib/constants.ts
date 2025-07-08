
import type { Category, PaymentOption } from './types';
import { Banknote, BookOpen, Briefcase, CreditCard, Cpu, Globe, HeartPulse, Languages as LanguagesIcon, LineChart, Palette, PersonStanding, ShieldCheck, TestTube2, UploadCloud, Wallet, Camera, Music, Sprout, PenTool } from 'lucide-react';

export const APP_NAME = "EdTechCart";
export const APP_DESCRIPTION = "The All-in-One Marketplace for Online Courses";

export const CATEGORIES: Category[] = [
  { id: 'iit-jee', name: 'IIT-JEE', slug: 'iit-jee', icon: TestTube2 },
  { id: 'neet', name: 'NEET', slug: 'neet', icon: HeartPulse },
  { id: 'cs', name: 'Computer Science', slug: 'computer-science', icon: Cpu },
  { id: 'gov-exams', name: 'Government Exams', slug: 'gov-exams', icon: ShieldCheck },
  { id: 'business', name: 'Business & Finance', slug: 'business-finance', icon: LineChart },
  { id: 'arts', name: 'Arts & Humanities', slug: 'arts-humanities', icon: Palette },
  { id: 'lang', name: 'Language Learning', slug: 'language-learning', icon: LanguagesIcon },
  { id: 'personal-dev', name: 'Personal Development', slug: 'personal-development', icon: PersonStanding },
  { id: 'photo-video', name: 'Photography & Video', slug: 'photography-video', icon: Camera },
  { id: 'music-arts', name: 'Music & Performing Arts', slug: 'music-performing-arts', icon: Music },
  { id: 'health-fitness', name: 'Health & Fitness', slug: 'health-fitness', icon: Sprout },
  { id: 'design-illustration', name: 'Design & Illustration', slug: 'design-illustration', icon: PenTool },
];

export const CATEGORIES2: Category[] = [
  { id: 'courses', name: 'Courses', slug: 'courses', icon: TestTube2 },
  { id: 'ebooks', name: 'E-Books', slug: 'ebooks', icon: HeartPulse },
  { id: 'subscriptions', name: 'Subscriptions', slug: 'subscriptions', icon: Cpu },
  { id: 'gift-cards', name: 'Gift Cards', slug: 'gift-cards', icon: ShieldCheck },
  { id: 'games', name: 'Games', slug: 'games', icon: LineChart },
];

export const INSTRUCTOR_TYPES = [ 
  'Individual Teacher',
  'Verified Educator',
  'Institute',
  'Coaching Center',
];

export const DIFFICULTY_LEVELS: Array<'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'> = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'All Levels',
];

export const LANGUAGES = [
  'English',
  'Hindi',
  'Spanish',
  'French',
  'German',
  'Mandarin Chinese',
  'Japanese',
  'Tamil',
  'Telugu',
  'Bengali',
];

export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating_desc', label: 'Rating: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'popularity', label: 'Popularity (Most Enrolled)'}
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
    { id: 'upi', name: 'UPI / QR Code', icon: Wallet }, 
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'netbanking', name: 'Net Banking', icon: Banknote },
    { id: 'wallet', name: 'Digital Wallet (PayTM, PhonePe etc.)', icon: Wallet },
];


export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  community: [
    { name: 'Blog', href: '/blog' },
    { name: 'Forums', href: '/forums' },
    { name: 'Sell on EdTechCart', href: '/sell-courses' }, 
  ]
};
export const PLATFORMS = [
  'Udemy',
  'Coursera',
  'Unacademy',
  'Physics Wallah',
  'Skillshare',
  'edX',
];
// export const FOOTER_LINKS = {
//   company: [
//     { name: 'About Us', href: '/about' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Press', href: '/press' },
//   ],
//   support: [
//     { name: 'Help Center', href: '/help' },
//     { name: 'Contact Us', href: '/contact' },
//     { name: 'Privacy Policy', href: '/privacy' },
//     { name: 'Terms of Service', href: '/terms' },
//   ],
//   community: [
//     { name: 'Blog', href: '/blog' },
//     { name: 'Forums', href: '/forums' },
//     { name: 'Sell on EdTechCart', href: '/sell-courses' }, 
//   ]
// };

export const ITEMS_PER_PAGE = 12;
