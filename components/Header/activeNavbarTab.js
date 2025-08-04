// pathname equivalencies
const index_pathnames = ["/index.html", "/index", "/"];
const hikes_pathnames = ["/hikes.html", "/hikes"];
const dashboard_pathnames = ["/dashboard.html", "/dashboard"];
const subscribe_pathnames = ["/subscribe.html", "/subscribe"];

$(function activeTab() {
  $(".navbar a").each(function () {
    let thisPathname = this.href.substring(this.href.lastIndexOf("/"));
    let windowPathname = window.location.href.substring(
      window.location.href.lastIndexOf("/"),
    );

    let thisPathnames = [];
    if (!this.href.includes("https://www.instagram.com/bigmoneybiking/")) {
      if (index_pathnames.includes(thisPathname)) {
        thisPathnames = index_pathnames;
      } else if (hikes_pathnames.includes(thisPathname)) {
        thisPathnames = hikes_pathnames;
      } else if (dashboard_pathnames.includes(thisPathname)) {
        thisPathnames = dashboard_pathnames;
      } else if (subscribe_pathnames.includes(thisPathname)) {
        thisPathnames = subscribe_pathnames;
      }
    }

    if (thisPathnames.includes(windowPathname)) {
      $(this).addClass("active");
      $(this).parents("navbar").addClass("active");
    }
  });
});
