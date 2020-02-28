import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
// import 'firebase/database'; // If using Firebase database
import 'firebase/auth'; // If using Firebase database

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'Password generator';
	includeLetters = false;
	includeNums = false;
	includeSymb = false;
	password = '';
	length: number = 0;

	addLength(length: string) {
		let parsedValue = +length;
		if (!isNaN(parsedValue)) {
			this.length = parsedValue;
		}
	}
	onClick() {
		let nums = '0123456789';
		let letters = 'abcdefghjklmnopqrstuvwxyz';
		let symbols = '!@#$%&';
		let validChars = '';
		if (this.includeLetters) {
			validChars += letters;
		}
		if (this.includeNums) {
			validChars += nums;
		}
		if (this.includeSymb) {
			validChars += symbols;
		}

		let pass = '';
		for (let i = 0; i < this.length; i++) {
			let index = Math.floor(Math.random() * validChars.length);
			pass += validChars[index];
		}
		this.password = pass;
	}
	changeIncludeLetters() {
		this.includeLetters = !this.includeLetters;
	}
	changeIncludeNums() {
		this.includeNums = !this.includeNums;
	}
	changeIncludeSymbs() {
		this.includeSymb = !this.includeSymb;
	}
	ngOnInit() {
		// firebase.initializeApp({
		// 	apiKey: 'AIzaSyBU5GIx764tFNt1LnpEY-H8xh90F3-WpsU',
		// 	authDomain: 'buy-and-sell-7485e',
		// 	databaseURL: 'https://buy-and-sell-7485e.firebaseio.com/'
		// });
	}
}
