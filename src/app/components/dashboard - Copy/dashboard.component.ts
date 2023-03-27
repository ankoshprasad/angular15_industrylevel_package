import { Component,OnInit,AfterViewInit,  ViewChild} from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
  }
  
  export interface Dessert {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
  }
  
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
	desserts: Dessert[] = [
		{name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
		{name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
		{name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
		{name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
		{name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
	  ];
	ELEMENT_DATA: PeriodicElement[] = [
		{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
		{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
		{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
		{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
		{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
		{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
		{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
		{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
		{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
		{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
	  ];
	sortedData: PeriodicElement[];
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator :any = MatPaginator;
  config: any;
  searchText :any;
  employeList:any = [];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(public dialog: MatDialog) {
	this.sortedData = this.ELEMENT_DATA.slice();
  }
  ngOnInit() {
	this.employeList =[{
		"firstName": "Celestine",
		"lastName": "Schimmel",
		"address": "7687 Jadon Port"
	},
	{
		"firstName": "Johan",
		"lastName": "Ziemann PhD",
		"address": "156 Streich Ports"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	},
	{
		"firstName": "Lizzie",
		"lastName": "Schumm",
		"address": "5203 Jordon Center"
	}
];
this.config = {
  itemsPerPage: 5,
  currentPage: 1,
  totalItems: this.employeList.count
};
  }
  sortData(sort: Sort) {
    const data = this.ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
	
	this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
		case 'position':
			return compare(a.position, b.position, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'weight':
          return compare(a.weight, b.weight, isAsc);
        case 'symbol':
          return compare(a.symbol, b.symbol, isAsc);
        default:
          return 0;
      }
    });
  
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  pageChanged(event:any){
    console.log(event)
    this.config.currentPage = event;
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dashboard-modal.html',
})
export class DialogElementsExampleDialog {
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}
  addUser(){
    this.dialogRef.close(0);
  }
}
