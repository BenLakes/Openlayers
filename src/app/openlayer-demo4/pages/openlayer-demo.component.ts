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
  constructor() { 
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("页面初始化成功");
    // 使用变量缓存对象
    const map = document.getElementById("map")
    const popup = document.getElementById("popup")



    // 创建overLayer 叠加层对象用作显示弹窗
    // 绑定了 popup 容器
    // Overlay 的定位点与地图点击的坐标绑定
    // this.overlay = new ol.Overlay({
    //   element: popup,
    //   autoPanAnimation: {
    //     duration: 250
    //   }
    // })

    // // Map 对象
     var op = new ol.Map({
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
      //  叠加层
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

  //  显示用户点击的经纬度
  
     console.log("Op->>>>", op);
    //  点击地图
     op.on('singleclick', (evt :any) => {
      //  this.content = true;
      // 获取坐标并显示
       const coordinate = evt.coordinate;
      //  获取4326 正常坐标
       let hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
       this.content = hdms;
      //  设置显示的位置
      //  this.overlay.setPosition(coordinate);
     })
  }
  closePopUp() {
    // 移除弹窗

    return false;
  }

}
