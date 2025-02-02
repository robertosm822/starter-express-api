import  express from 'express';
const  router = express.Router();

router.get('/', async  function(req, res, next) {
    let  data = {
      layout:  'layout.njk',
    }  
    res.render('admin/dashboard.njk', data);
});

router.get('/dashboard', async  function(req, res, next) {
    let  data = {
      layout:  'layout.njk',
    }  
    res.render('admin/dashboard.njk', data);
});

router.get('/profile', async  function(req, res, next) {
    let  data = {
      layout:  'layout.njk',
    }  
    res.render('admin/profile.njk', data);
});

router.get('/meus-lances', async  function(req, res, next) {
    let  data = {
      layout:  'layout.njk',
    }  
    res.render('admin/admin-my-bids.njk', data);
});

export default router;