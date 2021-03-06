import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {

  op:any;
  selectValue:any = null;
  scaleLineControl:any;
  constructor() { 
  }

  ngOnInit() {
  }

  
  ngAfterViewInit(){
    console.log("页面初始化成功");
    setTimeout(() => {
      this.scaleLineControl = new ol.control.ScaleLine();
      let layA = new ol.layer.Tile({
        preload: Infinity,
        source: new ol.source.OSM()
      })
  
  
      let view = new ol.View({
        center: [0, 0],
        zoom: 1
      })
  
      //Map 对象
       let map = new ol.Map({
        controls: ol.control.defaults().extend([
          this.scaleLineControl
        ]),
        //  layer 地图图层
         layers: [layA],
        //map 对象映射 到 div  target 作为参数，值为id
        //  target: this.ele.nativeElement,
         target: 'map',
  
        //视图 贴在图层上的一些信息
        view: view
       })
    },1000)
   
  }

  selectChange(e:any){
    this.scaleLineControl.setUnits(e)
  }
}
