import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonserviceService } from '../../service/commonservice.service';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	customLoader: boolean = false;
	jobForm = {"value":null}
	constructor(private service: CommonserviceService) {
		
	}
	ngOnInit() {
	this.getfilterData();
	}
	
	/* GET API Calling */
	getfilterData() {
		this.customLoader = true;
		const monthVal:string = 'JANUARY';
		const yearVal:number = 2022;
		this.service.getCreditcardFilterDetailsData(monthVal, yearVal).subscribe((getListData: any) => {
			console.log(getListData.expenses)
		},
			(error: any) => {
				//	this.noData = true;
			}
		);
	}
	
	/* POST API Calling */
	postCreditcardDataData() {
		this.customLoader = true;
		this.jobForm.value = null;
		let requestVal = JSON.stringify(this.jobForm.value);
		this.service.enterCreditcardData(requestVal).subscribe((data: any) => {
			this.customLoader = false;
		},
			(error) => {


			}
		)
	}

}



