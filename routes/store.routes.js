const storeController = require('./../controllers/storeController');
const { catchErrors } = require('./../handlers/errorHandlers');

const storeRoutes = router => {
  // get
  router.get('/', catchErrors(storeController.getStores));
  router.get('/stores', catchErrors(storeController.getStores));
  router.get('/stores/:id/edit', catchErrors(storeController.editStore));
  router.get('/add', storeController.addStore);
  router.get('/stores/:slug', catchErrors(storeController.getStoreBySlug));

  //post
  router.post(
    '/add',
    storeController.upload,
    catchErrors(storeController.resize),
    catchErrors(storeController.createStore)
  );

  router.post(
    '/add/:id',
    storeController.upload,
    catchErrors(storeController.resize),
    catchErrors(storeController.updateStore)
  );
};

module.exports = storeRoutes;
