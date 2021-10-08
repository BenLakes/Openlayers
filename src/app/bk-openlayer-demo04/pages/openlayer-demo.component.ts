import { viewClassName } from '@angular/compiler';
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

  ngAfterViewInit(){
    /**
     * Openlayers 地图控件   放大、缩小、全图等 Openlayers 的地图控件继承了 ol.control.Control
     * 缩放控件Openlayer 默认就加载了，对应 ol.Control.Zoom 
     * 属性， 右下角 的 i 号  主要是显示版权信息，对应ol.Control.Attribution
     * 旋转 Rotate 右上角 箭头图标   对应的是  ol.control.Rotate  
     */
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        projection: 'EPSG:3857',
        center: ol.proj.transform([120,30], 'EPSG:4326', 'EPSG:3857'),
        zoom: 15
      })
    })


  }
}
