// pathname equivalencies
const index_pathnames = ['/index.html', '/index', '/'];
const hikes_pathnames = ['/hikes.html', '/hikes'];
const dashboard_pathnames = ['/dashboard.html', '/dashboard'];
const blog_pathnames = ['/blog.html', '/blog'];
const subscribe_pathnames = ['/subscribe.html', '/subscribe'];

$(function activeTab(){
  $('.my-nav a').each(function(){
    let thisPathname = this.href.substring(this.href.lastIndexOf('/'));
    let windowPathname = window.location.href.substring(window.location.href.lastIndexOf('/'));

    let thisPathnames = [];
    if (!this.href.includes('https://www.instagram.com/big_money_biking/')) {
      if (index_pathnames.includes(thisPathname)) {
        thisPathnames = index_pathnames;
      } else if (hikes_pathnames.includes(thisPathname)) {
        thisPathnames = hikes_pathnames;
      } else if (blog_pathnames.includes(thisPathname)) {
        thisPathnames = blog_pathnames;
      } else if (dashboard_pathnames.includes(thisPathname)) {
        thisPathnames = dashboard_pathnames;
      }else if (subscribe_pathnames.includes(thisPathname)) {
        thisPathnames = subscribe_pathnames;
      }
    } 

    if (thisPathnames.includes(windowPathname)) {
      $(this).addClass('active'); $(this).parents('my-nav').addClass('active');
    }
  });
});
