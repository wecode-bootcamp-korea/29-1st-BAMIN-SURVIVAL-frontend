const CATEGORIES = [
  {
    id: 1,
    title: '전체',
    name: 'all',
    url: '/main?&offset=0',
  },
  {
    id: 2,
    title: '멘토',
    name: 'mentor',
    url: '/mentor',
  },
  {
    id: 3,
    title: '매거진',
    name: 'magazine',

    url: '/magazine?category=magazine&limit=16&offset=0',
  },
  {
    id: 4,
    title: '회사에서',
    name: 'company',
    url: `/company?category=company&limit=16&offset=0`,
  },
  {
    id: 5,
    title: '학교에서',
    name: 'school',
    url: '/school?category=school&limit=16&offset=0',
  },
  {
    id: 6,
    title: '코로나에서',
    name: 'covid',
    url: '/covid?category=covid&limit=16&offset=0',
  },
  {
    id: 7,
    title: '랜덤박스',
    name: 'randombox',
    url: '/randombox?category=randombox&limit=16&offset=0',
  },
  {
    id: 8,
    title: '커뮤니티',
    name: 'community',
    url: 'community?category=community&limit=16&offset=0',
  },
];

export default CATEGORIES;
