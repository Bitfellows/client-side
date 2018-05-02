'use strict';



page('/*', (ctx, next) => {
  $('.container').hide();
  next();
})

page('/', app.loginView.init);
page('/overView', app.overView.init);
page('/mybit', (ctx)=>app.Crypto.fetchActivity(ctx).then(app.mybitView.init));
page('/coins',(ctx)=>app.Crypto.fetchChartData(ctx).then(app.coinSearchView.init))
page('/coins/:name',(ctx) => app.Crypto.fetchAll(ctx.params.name).then(app.coinSearchView.initSearch));
page('/about', app.aboutView.init);

page.start();
