import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	currentPage = 0;
	classApply = false;

	ngOnInit(): void {
		setTimeout(() => {
			this.classApply = true;
		}, 2500);
	}

	checkIndex(i: number) {
		return Math.abs(this.currentPage - i) < 3;
	}

	images = [
		{
			title: 'landscape1',
			imgUrl:
				'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'landscape2',
			imgUrl:
				'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'landscape3',
			imgUrl:
				'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'landscape4',
			imgUrl:
				'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		}
	];
}
