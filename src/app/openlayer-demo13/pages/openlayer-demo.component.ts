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

  vector:any;

  view:any;

  banjdx:any;

  mhbj:any;



  constructor() { 
  }

  ngAfterViewInit(){
    this.vector = new ol.layer.Heatmap({
      source: new ol.source.Vector({
        //  url: './src/assets/mock_data/2012_Earthquakes_Mag5.kml',
         url: 'http://0.0.0.0:8888/2012_Earthquakes_Mag5.kml',
         format: new ol.format.KML({
          // 是否提取 文件中的 样式
           extractStyles: false
         })
      }),
      radius: parseInt(this.banjdx, 10),
      blur: parseInt(this.mhbj, 10)
    })

    this.vector.getSource().on('addfeature', (event: { feature: { get: (arg0: string) => any; set: (arg0: string, arg1: number) => void; }; }) =>{
      let name = event.feature.get('name');
      let magnitude = parseFloat(name.substr(2));
      event.feature.set('weight', magnitude - 5);
    })

    let raster = new ol.layer.Tile({
      source: new ol.source.Stamen({
        layer: 'toner'
      })
    })
    this.op = new ol.Map({
      layers: [raster, this.vector],
      target: 'map',
      view: new ol.View({
        center: [0,0],
        zoom: 2
      })
    })
  }

  banjdxChange(e: any){
     console.log("banjdxChange e->>>", e)
    // 更新 对应的 热力图大小
    this.vector.setRadius(parseInt(e, 10))
  }

  mhbjChange(e: any){
    // 更新对应的 热力图模糊半径
    console.log("mhbjChange e->>>", e)
    this.vector.setBlur(parseInt(e, 10))
  }

  ngOnInit() {
  }

}
