import { ExploreData, ExploreType } from 'models';
import { socialMediaImgs } from 'utils';
import { nanoid } from 'nanoid';
import { AiOutlineDollar } from '@react-icons/all-files/ai/AiOutlineDollar';
import { BiBoltCircle } from '@react-icons/all-files/bi/BiBoltCircle';
import { HiOutlinePhotograph } from '@react-icons/all-files/hi/HiOutlinePhotograph';
import { TfiTruck } from 'react-icons/tfi';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { GiSoundWaves } from '@react-icons/all-files/gi/GiSoundWaves';
import { BsStar } from '@react-icons/all-files/bs/BsStar';

export const exploreTypeBtns = [
  {
    title: ExploreType.Deals,
    id: '1',
  },
  {
    title: ExploreType.Specials,
    id: '2',
  },
];

// Refactor
export const exploreDealsAndSpecials: ExploreData[] = [
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    type: ExploreType.Deals,
    contents: [
      {
        desc: 'Posting to your feed',
        title: 'Video Testimonial 1min - 1min 30sec',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        id: nanoid(12),
        title: 'Video Unboxing 30sec - 1min ',
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Creator Ads campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Shipment',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        id: nanoid(12),
        title: 'Video Testimonial 1min - 1min 30sec',
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    type: ExploreType.Specials,
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Content only campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Video Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Not required',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    type: ExploreType.Deals,
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        id: nanoid(12),
        title: 'Video Testimonial 1min - 1min 30sec',
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Organic posting campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Reimbursement ',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        title: 'Video Testimonial 1min - 1min 30sec',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    type: ExploreType.Specials,
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Creator Ads campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Shipment',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    type: ExploreType.Deals,
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        title: 'Video Testimonial 1min - 1min 30sec',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Creator Ads campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Shipment',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    type: ExploreType.Specials,
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        title: 'Video Testimonial 1min - 1min 30sec',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Creator Ads campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Shipment',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        title: 'Video Testimonial 1min - 1min 30sec',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    type: ExploreType.Deals,
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],
    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Creator Ads campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Shipment',
      },
    ],
  },
  {
    id: nanoid(5),
    title: 'Light Tea Campaign',
    icon: socialMediaImgs['instagram'],
    important: [
      {
        icon: BiBoltCircle,
        title: 'Spark Ads for 30 days',
      },
      {
        icon: BsStar,
        title: 'Influencer Partnership',
      },
    ],
    contents: [
      {
        desc: 'Posting to your feed',
        title: 'Video Testimonial 1min - 1min 30sec',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
      {
        desc: 'Posting to your feed',
        title: 'Video Unboxing 30sec - 1min ',
        id: nanoid(12),
        requirements: [
          {
            icon: HiOutlineMusicNote,
            title: 'Add music in background',
          },
          {
            icon: GiSoundWaves,
            title: 'Add music in background',
          },
        ],
        details: [
          {
            desc: 'Please choose a happy/upbeat music. Focus on creating a young and modern vibe',
            title: 'Music',
          },
          {
            desc: 'Please avoid being overly dramatic about the product and its benefits, but instead, focus on being authentic and genuine.',
            title: 'Music',
          },
        ],
      },
    ],
    type: ExploreType.Specials,
    desc: [
      {
        details:
          '-Rosehip +  Hyaluronic Acid Oil Serum-\nThis is a special serum designed for mixed and oily skin. Along with natural Rose hip oil and 3% of Hyaluronic Acid, this serum also contains Green Tea Extract, which reduces skin inflammation and fights acne.',
      },
      {
        title: 'Main content messaging',
        details:
          'Explain for how long you’ve been using the product and how it helped you to achieve a healthier skin, making clear to the audience that this is a high-quality serum that will have a great impact/benefit for them.',
      },
      {
        title: 'Main product features',
        details: [
          'Moisturizes dry and tired  skin',
          'Fights blemishes',
          'Reduces inflammation',
        ],
      },
      {
        title: 'Required actions',
        details:
          'Talk directly into the camera, while holding (Product name) with packaging in view, discussing your experience with our product, and show the results. The video contents needs to appear authentic & unscripted',
      },
      {
        title: 'Creator must be sure to: (avoid refilming)',
        details: [
          'Express feelings and emotions when talking/ explaining how the product helped you;',
          'Explain how you’ve been using the serum and for how long;',
        ],
      },
    ],

    list: [
      {
        icon: AiOutlineDollar,
        id: nanoid(5),
        title: '#50,000 - #150,000 budget',
      },
      {
        icon: BiBoltCircle,
        id: nanoid(5),
        title: 'Creator Ads campaign',
      },
      {
        icon: HiOutlinePhotograph,
        id: nanoid(5),
        title: 'Photo Creative asset',
      },
      {
        icon: TfiTruck,
        id: nanoid(5),
        title: 'Shipment',
      },
    ],
  },
];
