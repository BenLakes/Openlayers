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
    this.op = new ol.Map({
       layers: [
         new ol.layer.Tile({
           source: new ol.source.OSM()
         })
       ],
       target: 'map',
       view: new ol.View({
        center: [14200000, 4130000],
        rotation: Math.PI / 2,
        zoom: 10
       })
    })
    this.sleep(2500);
  }
  sleep(time:number) {
    setTimeout(() => {
      this.op.getView().setRotation(Math.PI * 2);
    }, time)
  }



  ngOnInit() {
  }

}
