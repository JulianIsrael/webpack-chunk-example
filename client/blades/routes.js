import App from 'containers/App';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('blades/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'blog', //test
      getComponent(location, cb) {
        System.import('blades/Blog')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('blades/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
  ]
};
