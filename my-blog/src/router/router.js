//配置路由词典
const routes = [
  { name:'index',path: '/', component:()=> import('@/components/index.vue') },
  { name:'login',path: '/login', component:()=>import('@/components/login.vue') }
]


export default routes