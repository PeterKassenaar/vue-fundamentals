import CountryList from '@/components/CountryList.vue';
import CountryDetail from '@/components/CountryDetails.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: CountryList,
  },
  {
    path: '/country/:name',
    name: 'CountryDetail',
    component: CountryDetail,
  },
];
