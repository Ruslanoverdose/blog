const mix = require('laravel-mix');
const path = require('path');
/*x
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/admin/sass/admin.sass', 'public/css');

mix.styles([
      'resources/css/App.css',
      'resources/css/BottomFooter.css',
      'resources/css/CopyRight.css',
      'resources/css/FollowForm.css',
      'resources/css/Header.css',
      'resources/css/index.css',
      'resources/css/MenuContainer.css',
      'resources/css/NewsLetter.css',
      'resources/css/Pagination.css',
      'resources/css/Posts.css',
      'resources/css/PostContainer.css',
      'resources/css/PostsContainer.css',
      'resources/css/Search.css',
      'resources/css/SearchContainer.css',
      'resources/css/ShareList.css',
      'resources/css/TopFooter.css',
      'resources/css/TopScroll.css',
      'resources/css/TagCloud.css',
      'resources/css/TextWidget.css',
      'resources/css/Widget.css',
      'resources/css/WidgetPosts.css',
      'resources/css/FollowUs.css',
  ], 'public/css/all.css');