import homeCmp from './cmps/home-cmp.js';
import aboutCmp from './cmps/about-cmp.js';
import booksApp from './pages/book-app-cmp.js';

const routes = [
    { path: '/', component: homeCmp },
    { path: '/books', component: booksApp },
    { path: '/about', component: aboutCmp }

];

export default routes;