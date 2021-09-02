import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {

  op:any;
  constructor() { 
  }

  ngOnInit() {
  }

  
  ngAfterViewInit(){
    console.log("页面初始化成功");

    let layA = new ol.layer.Tile({
      preload: Infinity,
      source: new ol.source.TileJSON({
        url:"https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
        crossOrigin: "anonymous"
      })
    })
    let layB = new ol.layer.Tile({
      preload: 0,
      source: new ol.source.TileJSON({
        url:"https://api.tiles.mapbox.com/v4/mapbox.natural-earth-hypso-bathy.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",
        crossOrigin: "anonymous"
      })
    })

    let view = new ol.View({
      center: [0, 0],
      zoom: 1
    })

    //Map 对象
     let map = new ol.Map({
      //  layer 地图图层
       layers: [layA],
      //map 对象映射 到 div  target 作为参数，值为id
      //  target: this.ele.nativeElement,
       target: 'OSM',

      //视图 贴在图层上的一些信息
      view: view
     })


     //Map 对象
     let map1 = new ol.Map({
      //  layer 地图图层
       layers: [layB],
      //map 对象映射 到 div  target 作为参数，值为id
      //  target: this.ele.nativeElement,
       target: 'bindMap',
      //视图 贴在图层上的一些信息
      view: view
     })

  }
}
