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
  // 放大
  zoomIn(e:any) {
    let mapView = this.map.getView();
    let zoom = mapView.getZoom();
    mapView.setZoom(zoom + 1);
  }
  // 缩小
  zoomOut(e:any) {
    let mapView = this.map.getView();
    let zoom = mapView.getZoom();
    mapView.setZoom(zoom - 1);
  }
  // 左移
  toLeft(e:any) {
    let mapView = this.map.getView();
    // 获取中心点
    let center = mapView.getCenter();
    center[0] += 5000;
    mapView.setCenter(center);
    // 地图重新加载
    this.map.render()
  }
  // 右移
  toRight(e:any) {
    let mapView = this.map.getView();
    // 获取中心点
    let center = mapView.getCenter();
    center[0] -= 5000;
    mapView.setCenter(center);
    // 地图重新加载
    this.map.render()
  }
  // 上移
  toTop(e:any) {
    let mapView = this.map.getView();
    // 获取中心点
    let center = mapView.getCenter();
    center[1] += 5000;
    mapView.setCenter(center);
    // 地图重新加载
    this.map.render()
  }
  // 下移
  topBottom(e:any) {
    let mapView = this.map.getView();
    // 获取中心点
    let center = mapView.getCenter();
    center[1] -= 5000;
    mapView.setCenter(center);
    // 地图重新加载
    this.map.render()
  }
  // 移动到北京
  topBeijing(e:any) {
    // 设置中心点的数组
    let center = ol.proj.fromLonLat([116.20, 39.56])
    let mapView = this.map.getView();
    mapView.setCenter(center);
    mapView.setZoom(9)
    // 地图重新加载
    this.map.render()
  }

  // 视图联动  其实就是 让两个地图 共享同一个 view 即可

  
  ngAfterViewInit(){
    
    let view = new ol.View({
      // 指定当前的 投影坐标系的 类型
      projection: 'EPSG:4326',
      // 限制地图范围
      extent: [117, 20, 120, 30],//限制范围
      center: [118, 25], //
      zoom: 15,
      minZoom: 5, //最小缩放等级
      maxZoom: 15 //最大缩放等级
    })

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: view
    })

    let map = new ol.Map({
      target: 'map2',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: view
    })
  }
}
