'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
})

// page('/', app.indexView.init);
page('/overView', app.overView.init);
page('/about', app.aboutView.init);
page('/main', app.mainView.init);
page('/login', app.loginView.init);
page('/mybit', app.mybitView.init);
page.start();