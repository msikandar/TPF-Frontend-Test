import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-uploadtomongo',
  templateUrl: './uploadtomongo.component.html',
  styleUrls: ['./uploadtomongo.component.css']
})
export class UploadtomongoComponent implements OnInit {
  csvData: any[] = [];
  constructor(public appService: AppService,) { }

   async ngOnInit(): Promise<any> {
    let val =  (await (this.appService.getCsv())).subscribe(data => {
      this.extractData(data),
      console.log(data),
      err => this.handleError(err)
    }
      );
    console.log(val);
    
  }
  private extractData(res) {

    let csvData = res;
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    this.csvData = lines;
    console.log(this.csvData)
  }


  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

}
