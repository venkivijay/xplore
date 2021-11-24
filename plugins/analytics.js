import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'UA-152753785-1' },
      appName: 'xplore',
    },
    app.router,
  );
};
