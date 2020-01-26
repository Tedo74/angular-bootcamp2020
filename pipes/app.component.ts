import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	dateFromInput = '';
	amount = 0;
	dateObj = new Date();
	miles: number;

	onDateChange(val: string) {
		this.dateFromInput = val;
	}
	onAmountChange(val: number) {
		this.amount = val;
	}
	onMilesChange(val: number) {
		this.miles = val;
	}
}
