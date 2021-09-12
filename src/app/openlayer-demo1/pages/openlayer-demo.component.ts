import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {
  // @ViewChild('map', {read: ElementRef, static: true}) ele: ElementRef;
  op:any = null
  constructor() { 
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("页面初始化成功");
  
    // // Map 对象
    setTimeout(()=> {
      const doc = document.getElementById("map")
       this.op = new ol.Map({
        //  layer 地图图层
         layers: [
          //  指定地图图层 类型  Image 单一图片数据类型/Tile网格切片的图片 瓦片/Vector 矢量图图层类型
           new ol.layer.Tile({
            //  对应图层数据源  OSM 数据源
             source: new ol.source.OSM(),
  
            //  crossOrigin: "anonymous"
           })
         ],
        //map 对象映射 到 div  target 作为参数，值为id
        //  target: this.ele.nativeElement,
         target: doc,
        //视图 贴在图层上的一些信息
         view: new ol.View({
          //地图中心
           center: [0, 0],
          //  缩放层级
           zoom: 2
         })
       })
           
     console.log("Op->>>>", this.op);
    }, 0);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("销毁了");
    this.op = null;
  }

}
