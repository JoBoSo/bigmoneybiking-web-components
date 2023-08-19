$(function activeTab(){
  $('a').each(function(){
    console.log(window.location.href)
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active'); $(this).parents('my-nav').addClass('active');
    }
    // bigmoneybiking.ca initially loads as "https://bigmoneybiking.ca/"
    else if ($(this).prop('pathname') == '/index.html' && window.location.pathname == '/') {
      $(this).addClass('active'); $(this).parents('my-nav').addClass('active');
    }
  });
});
