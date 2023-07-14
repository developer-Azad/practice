import applied from 'assets/images/applied.png';
import collabo from 'assets/images/collabo.png';
import review from 'assets/images/review.png';
import posting from 'assets/images/posting.png';
import completed from 'assets/images/completed.png';
import cancelled from 'assets/images/cancelled.png';
import shoe from 'assets/images/shoe.png';
import timeline from 'assets/images/timeline.png';
import { nanoid } from 'nanoid';
import { FlowBtnModel, FlowModel, FlowType } from 'models';
import { RiChat1Fill } from '@react-icons/all-files/ri/RiChat1Fill';
import { AiFillInfoCircle } from '@react-icons/all-files/ai/AiFillInfoCircle';

export const flowData: FlowModel[] = [
  {
    id: nanoid(),
    num: 2,
    icon: applied,
    type: 'Applied',
    data: [
      {
        id: nanoid(12),
        icon: shoe,
        price: '$50 - $150',
        task: 'Posting',
        picNumber: 1,
        vidNum: 1,
        desc: 'Shoe product -IG',
        info: {
          icon: timeline,
          location: `Telescopic by lion paris - Paris.`,
        },
        timeline: {
          link: {
            title: 'Tea Drops',
            link: `www.myteadrops.com`,
          },
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
        },
      },
    ],
  },
  {
    id: nanoid(),
    num: 4,
    icon: collabo,
    type: 'Collaborating',
    data: [
      {
        id: nanoid(12),
        icon: shoe,
        price: '$50 - $150',
        task: 'Posting',
        picNumber: 1,
        vidNum: 1,
        desc: 'Shoe product -IG',
        info: {
          icon: timeline,
          location: `Telescopic by lion paris - Paris.`,
        },
        timeline: {
          link: {
            title: 'Tea Drops',
            link: `www.myteadrops.com`,
          },
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
        },
      },
    ],
  },
  {
    id: nanoid(),
    num: 5,
    icon: review,
    type: 'Review',
    data: [
      {
        id: nanoid(12),
        icon: shoe,
        price: '$50 - $150',
        task: 'Posting',
        picNumber: 1,
        vidNum: 1,
        desc: 'Shoe product -IG',
        info: {
          icon: timeline,
          location: `Telescopic by lion paris - Paris.`,
        },
        timeline: {
          link: {
            title: 'Tea Drops',
            link: `www.myteadrops.com`,
          },
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
        },
      },
    ],
  },
  {
    id: nanoid(),
    num: 2,
    icon: posting,
    type: 'Posting',
    data: [
      {
        id: nanoid(12),
        icon: shoe,
        price: '$50 - $150',
        task: 'Posting',
        picNumber: 1,
        vidNum: 1,
        desc: 'Shoe product -IG',
        info: {
          icon: timeline,
          location: `Telescopic by lion paris - Paris.`,
        },
        timeline: {
          link: {
            title: 'Tea Drops',
            link: `www.myteadrops.com`,
          },
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
        },
      },
    ],
  },
  {
    id: nanoid(),
    num: 1,
    icon: completed,
    type: 'Completed',
    data: [],
  },
  {
    id: nanoid(),
    num: 0,
    icon: cancelled,
    type: 'Cancelled',
    data: [],
  },
];

export const flowModalBtns: FlowBtnModel[] = [
  {
    icon: AiFillInfoCircle,
    name: 'timeline',
    id: '1',
  },
  {
    icon: RiChat1Fill,
    name: 'chat',
    id: '2',
  },
];

export const stageData = (type: FlowType) => {
  const data: { isDone: boolean; desc: string; type: FlowType }[] = [
    {
      isDone: false,
      desc: 'Your request to participate in this campaign is pending branding review.',
      type: 'Applied',
    },
    {
      isDone: false,
      desc: 'Congratulations! The brand has hired you. To deliver a satisfactory job, make sure you follow strictly the brief provided by the brand.',
      type: 'Collaborating',
    },
    {
      isDone: false,
      desc: 'Your request to participate in this campaign is pending branding review.',
      type: 'Posting',
    },
  ];

  switch (type) {
    case 'Collaborating':
    case 'Review':
      break;

    default:
      break;
  }

  return data;
};