import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';


@Component({
  selector: 'app-uploadcsv',
  templateUrl: './uploadcsv.component.html',
  styleUrls: ['./uploadcsv.component.css']
})
export class UploadcsvComponent implements OnInit {
  csvRecords: any[] = [];
  header = false;
  selectedFile = null;
  constructor(private ngxCsvParser: NgxCsvParser, public http: HttpClient) {
  }
  ngOnInit(): void {
  }
  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;
 
  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {
 
    // Select the files from the event
    const files = $event.srcElement.files;
 
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
 
        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
 
  }

  onFileSelectedEvent(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log("button clicked");
    const fd = new FormData();
    fd.append('file',this.selectedFile);
    this.http.post('https://nodepractice-atrmy.run-ap-south1.goorm.io/upload',fd,{headers: {enctype:"multipart/form-data"}}).subscribe(res => console.log(res));
    console.log(this.selectedFile);
    console.log(fd)
  }
}
