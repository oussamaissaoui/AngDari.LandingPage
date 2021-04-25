import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { AdServiceService } from '../ad-service.service';


@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  products2: any[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  sortKey: string;
  details: any;
  imgtodisp:any="../../assets/4.jpg";

  myThumbnail="../../assets/5.jpg";
  myFullresImage:any;

  constructor(private productService: AdServiceService,private primengConfig: PrimeNGConfig, private sanitizer: DomSanitizer, private modalService: NgbModal) { }
  open(content) {

    this.modalService.open(content, {
      centered: true,
      size: 'xl',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 
    });
  }
  
  btndetails(products2) {
    this.details = products2;

    console.log('DETAILS UNITAIRe' + this.details.date)

  }

  showimg1(){
    this.myThumbnail="../../assets/1.jpg"
    this.myFullresImage="../../assets/1.jpg"

  }
  showimg0(){
    this.myThumbnail="../../assets/4.jpg"
    this.myFullresImage="../../assets/4.jpg"

  }


ngOnInit(): void {




//// spring get test 

this.productService.getSpring().subscribe(data => {
this.products2 = data.content;
console.log(data);





for (var img of this.products2) {

console.log()


if (img.imgdesc.length > 0) {
  console.log("desc" + img.imgdesc[0].data);
  let objectURL = 'data:image/jpeg;base64,' + img.imgdesc[0].data;
  img.imgdesc[0].data = this.sanitizer.bypassSecurityTrustUrl(objectURL);

  console.log(img.imgdesc[0].data);

  console.log("URL" + objectURL);



}
}






console.log(this.products2);

console.log(data);





})

this.sortOptions = [
{ label: 'Price High to Low', value: '!prixEstim' },
{ label: 'Price Low to High', value: 'prixEstim' }
];

this.primengConfig.ripple = true;

}

onSortChange(event: { value: any; }) {
let value = event.value;

if (value.indexOf('!') === 0) {
this.sortOrder = -1;
this.sortField = value.substring(1, value.length);
}
else {
this.sortOrder = 1;
this.sortField = value;
}


}


}
