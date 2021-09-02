import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {
  // @ViewChild('map', {read: ElementRef, static: true}) ele: ElementRef;
  content = false;
  overlay:any = null;

  op:any;
  constructor() { 
  }

  ngOnInit() {
  }

  
  ngAfterViewInit(){
    console.log("页面初始化成功");
    // 使用变量缓存对象
    const map = document.getElementById("map")
     
    // // Map 对象
     this.op = new ol.Map({
      //  地图的交互属性
      interactions: ol.interaction.defaults({
        //  这里可以配置 默认的一些 交互行为
        onFocusOnly: true,
        doubleClickZoom: false,
        
      }),
      //  layer 地图图层
       layers: [
        //  指定地图图层 类型  Image 单一图片数据类型/Tile网格切片的图片 瓦片/Vector 矢量图图层类型
         new ol.layer.Tile({
           source: new ol.source.TileJSON({
            url:"https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
            crossOrigin: 'anonymous'
           })
         })
       ],
      //map 对象映射 到 div  target 作为参数，值为id
      //  target: this.ele.nativeElement,
       target: map,
      //  叠加层  用于文字、图片、气泡等
      overlays: [],
      //视图 贴在图层上的一些信息
      view: new ol.View({
        //地图中心
         center: [0, 0],
        //  缩放层级
         zoom: 2,
         minZoom: 2, 
         maxZoom: 10,
       })
     })

  }
}
