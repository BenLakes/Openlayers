import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// const data = require('./test.json')

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {

  geojson = {}

  map: any;

  constructor() { 
  }

  ngOnInit() {
  }

  changeSize(){
    const container:any  = document.getElementById('map');
    container.style.height = '300px';

  }

  changeMapSize(){
   if(this.map) {
     this.map.updateSize();
   }
  }
  
  ngAfterViewInit(){
    

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        // center: ol.proj.fromLonLat([120,30]),
        // 设置坐标从 WGS 84 转 3857   fromLonLat 与 transform 是一样的
        /**
         * 地理坐标系：Geographic Coordinate System 使用三维球面来定义地球的表面位置，地理坐标系就是用经度、纬度、高程
         * 这三个值来描述空间中一个点的位置信息，应用较广的是 WGS84 代号 ESPG:4326 (地理坐标系)
         * 投影坐标系：Projected Coordinate System 地图单位通常是米，是通过三维椭圆球体投影得到的。 在WebGis 的开发中，
         * 常用的投影是 墨卡托投影，代号是 EPGS:3857（投影坐标系）
         * 相互转换的方法：
         *    地理坐标系 转 墨卡托投影
         *    ol.proj.fromLonLat([120,30])
         *    墨卡托投影 转 地理坐标系
         *    ol.proj.transform([120,30], "EPSG:4326", "EPSG:3857")
         *   墨卡托转 地理坐标函数
         *    var point = ol.proj.toLonLat([13358338.89519283, 3503549.843504374], 'EPSG:3857');
         *   
         */
        center: ol.proj.transform([120,30], "EPSG:4326", "EPSG:3857"),
        zoom: 10
      })
    })
  }
}
