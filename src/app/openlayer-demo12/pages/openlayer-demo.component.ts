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

  ngOnInit() {}


  constructor() { 
  }

  ngAfterViewInit(){
    console.log("页面初始化成功");
    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      view: new ol.View({
        center: ol.proj.fromLonLat([4.8, 47.75]),
        zoom: 5
      })
    })

    // 画网格线  类
    var graticule = new ol.Graticule({

      strokeStyle: new ol.style.Stroke({
        color: 'rgba(255,120,0,0.9)',
        width: 2,
        lineDash: [4]
      }),

      showLabels: true
    });

    graticule.setMap(map);

  }  
    
}
