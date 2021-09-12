import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const ol: any;
@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer-demo.component.html',
  styleUrls: ['./openlayer-demo.component.scss']
})
export class OpanlayerDemoComponent implements OnInit {

  op:any;

  selectValue:any = "EPSG:4326";
  inputNumber:any = 0;
  overviewMapControl:any = null;
  mousePositionControl:any = null;

  constructor() { 
  }

  ngOnInit() {
  }

  
  ngAfterViewInit(){
    console.log("页面初始化成功");
    setTimeout(() => {
      let layA = new ol.layer.Tile({
        preload: Infinity,
        source: new ol.source.OSM()
      })
    //  配置 缩小地图
      this.overviewMapControl = new ol.control.OverviewMap({
        className: 'ol-overviewmap ol-custom-overviewmap',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM({
              'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
                '?apikey=0e6fc415256d4fbb9b5166a718591d71'
            })
          })
        ],
        collapseLabel: '\u00BB',
        label: '\u00AB',
        collapsed: false
      })
  
  
      let view = new ol.View({
        center: [0, 0],
        zoom: 1
      })

      // 鼠标位置监听
      this.mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        target: document.getElementById("mouse-positon")
      })
  
      //Map 对象
      this.op = new ol.Map({
        controls: ol.control.defaults().extend([
          new ol.control.FullScreen(),
          new ol.control.ScaleLine(),
          this.overviewMapControl,
          this.mousePositionControl
        ]),
        interactions: ol.interaction.defaults().extend([
          new ol.interaction.DragRotateAndZoom()
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
    console.log(e)
    this.mousePositionControl.setProjection(e)
  }

  inputNumChange(e:any) {
    console.log(e);
    let format = ol.coordinate.createStringXY(e);
    this.mousePositionControl.setCoordinateFormat(format)
  }
}
