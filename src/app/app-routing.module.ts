import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * ng g module app-routing --flat --module=app
 * --flat 把这个文件放到 src/app中 而不是单独的目录中
 * --module=app 告诉cli把它注册到AppModule的imports数组中
 *  */ 
 const routes: Routes = [
  // Routes 是路由配置，告诉路由器 什么样的url 要显示怎么样的视图
  // 这个路由会把一个与空路径 完全匹配的 URL 重定向 到 /dashboard
  {path:'openlayerDemo1', loadChildren: ()=>import('./openlayer-demo1/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo2', loadChildren: ()=>import('./openlayer-demo2/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo3', loadChildren: ()=>import('./openlayer-demo3/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo4', loadChildren: ()=>import('./openlayer-demo4/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo5', loadChildren: ()=>import('./openlayer-demo5/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo6', loadChildren: ()=>import('./openlayer-demo6/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo7', loadChildren: ()=>import('./openlayer-demo7/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo8', loadChildren: ()=>import('./openlayer-demo8/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo9', loadChildren: ()=>import('./openlayer-demo9/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo10', loadChildren: ()=>import('./openlayer-demo10/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo11', loadChildren: ()=>import('./openlayer-demo11/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
  {path:'openlayerDemo12', loadChildren: ()=>import('./openlayer-demo12/openlayer-demo.module').then(module => module.OpenlayerDemoModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
