'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt({app})
  //用户相关
  router.get('/', controller.home.index);
  router.get('/userinfo', controller.user.info);
  router.get('/user/captcha',controller.user.captcha);
  router.post('/user/register',controller.user.create);
  router.post('/user/login',controller.user.login);
  router.get('/user/info',jwt, controller.user.info);
  //文章相关
  router.group({ name:'article',prefix:'/article'},router=>{
    let {detail,create}=controller.article
    router.post('/create',jwt,create)
    router.get('/:id',detail)
  })
};
