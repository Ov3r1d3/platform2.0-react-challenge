/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const FavoritesPage = lazyLoad(
  () => import('./index'),
  module => module.FavoritesPage,
);
