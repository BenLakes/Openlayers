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

  constructor() { 
  }

  ngOnInit() {
  }

  
  ngAfterViewInit(){
    let layer = new ol.layer.Vector({
      title: 'add Layer',
      source: new ol.source.Vector({
        //  projection: 'EPSG:4326',
        //  需启动 http-server 服务 加载 json 数据
         url: 'http://127.0.0.1:8999/pages/test.json',
        //  表示使用的数据格式， 如果设置了 url 则必须指定  format
         format: new ol.format.GeoJSON()
      })
    });

    let map = new ol.Map({
      target: 'map',
      layers: [layer],
      view: new ol.View({
        center: ol.proj.fromLonLat([120,30]),
        zoom: 5
      })
    })
  }
}
