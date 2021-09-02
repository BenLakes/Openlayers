import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {

  op:any;

  source: any;
  style: any;

  view:any;


  constructor() { 
  }

  ngAfterViewInit(){
    console.log("页面初始化成功");
    
    this.source = new ol.source.Vector({
      url: 'assets/mock_data/switzerland.geojson',
      format: new ol.format.GeoJSON()
    })

    this.style = new ol.style.Style({
      // 划线的填充颜色
      fill: new ol.style.Fill({
        color: 'red',
      }),
      //边线的填充颜色
      stroke: new ol.style.Stroke({
        color: 'blue',
        width: 1
      }),
      // 点的配置
      image: new ol.style.Circle({
        radius: 5,
        // 填充色
        fill: new ol.style.Fill({
          color: "pink",
        }),
        // 当边线够宽 的时候会覆盖底色
        stroke: new ol.style.Stroke({
          color: 'green',
          width: 1
        })
      })
    })

    let vectorLayer = new ol.layer.Vector({
       source: this.source,
       style: this.style
    })

    this.view = new ol.View({
      center: [118.162722,24.516285],
      zoom: 4
    })

    this.op = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        vectorLayer
      ],
      target: 'map',
      view: this.view
    })
   
   
  }

  ngOnInit() {
  }

  sfdrs(){
    // 获取 源的 要素集合
    let feature = this.source.getFeatures()[0]
    // 获取要素里的 图形
    let polygon = feature.getGeometry();
    // constrainResolution 不考虑分辨率
    // this.view.fit(polygon, { padding: [170, 50, 30, 150], constrainResolution: false });
    this.view.fit(polygon, { constrainResolution: false });
    console.log(this.op.getView().getZoom())
  }
  sfdrs2(){
     // 获取 源的 要素集合
     let feature = this.source.getFeatures()[0]
     // 获取要素里的 图形
     let polygon = feature.getGeometry();
     // constrainResolution 不考虑分辨率
    //  在考虑分辨的情况下 zoom 会是整数  
    // 尽量在合适 的分辨率下 显示 区域
    //  this.view.fit(polygon, { padding: [170, 50, 30, 150]});
     this.view.fit(polygon);
     console.log(this.op.getView().getZoom())
  }
  sfdrs3(){
     // 获取 源的 要素集合
     let feature = this.source.getFeatures()[0]
     // 获取要素里的 图形
     let polygon = feature.getGeometry();
     // constrainResolution false不考虑分辨率
    //  如果视图 constrainResolution 选项为 true，
    // nearest 则获取最近的范围而不是实际适合视图的最接近的范围。
    // 就是考虑宽度 大小
     this.view.fit(polygon, { padding: [170, 50, 30, 150], nearest: true, constrainResolution: true});
     console.log(this.op.getView().getZoom())
  }
  sfdls(){
    let feature =  this.source.getFeatures()[1];
    let point = feature.getGeometry();
    this.view.fit(point, {padding: [170, 50, 30, 150],minResolution: 600})
  }
  zxddwdls(){
    let feature = this.source.getFeatures()[1];
    let point = feature.getGeometry();
    let size = this.op.getSize();
    console.log("view Size->>", size);
    this.view.centerOn(point.getCoordinates(), size, [470, 400])
  }
}
