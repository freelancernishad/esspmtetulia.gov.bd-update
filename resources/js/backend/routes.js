let adminlayout = require('./components/layouts/adminlayout.vue').default;
let blanklayout = require('./components/layouts/blanklayout.vue').default;



// Auth Components

let logout = require('./components/auth/logout.vue').default;

let home = require('./components/home.vue').default;


let profile = require('./components/profile.vue').default;





let userlist = require('./components/users/list.vue').default;
let userlistedit = require('./components/users/form.vue').default;





let sonod = require('./components/sonod/index.vue').default;
let sonodedit = require('./components/sonod/form.vue').default;
let Vaccination = require('./components/sonod/Vaccination.vue').default;
let sonodview = require('./components/sonod/view.vue').default;




let PageNotFound = require('./components/404.vue').default;


let prefix = '/dashboard'
export const routes = [

  //Auth Routes

  { path: `${prefix}/logout`, component: logout, name:'logout',meta: { layout: blanklayout } },

  { path:  `${prefix}`, component: home, name:'Dashboard',meta: { layout: adminlayout } },
  { path:  `${prefix}/profile`, component: profile, name:'profile',meta: { layout: adminlayout } },




  { path:  `${prefix}/user/list`, component: userlist, name:'userlist',meta: { layout: adminlayout } },
  { path:  `${prefix}/user/list/add`, component: userlistedit, name:'userlistadd',meta: { layout: adminlayout } },
  { path:  `${prefix}/user/list/edit/:id`, component: userlistedit, name:'userlistedit',meta: { layout: adminlayout } },




  { path:  `${prefix}/application/list/:type`, component: sonod, name:'applicationlist',meta: { layout: adminlayout } },

  { path:  `${prefix}/sonod/action/Vaccination/:id`, component: Vaccination, name:'Vaccination',meta: { layout: adminlayout } },

  { path:  `${prefix}/sonod/add/by/admin`, component: sonodedit, name:'sonodeadd',meta: { layout: adminlayout } },

  { path:  `${prefix}/sonod/action/edit/:id`, component: sonodedit, name:'sonodedit',meta: { layout: adminlayout } },

  { path:  `${prefix}/sonod/action/view/:id`, component: sonodview, name:'sonodview',meta: { layout: adminlayout } },



  { path: "*", component: PageNotFound }

]
