import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-srmenu',
	templateUrl: './srmenu.component.html',
	styleUrls: ['./srmenu.component.css']
})

export class SrmenuComponent implements OnInit {
	@Output() parent_flag = new EventEmitter();
	side_menu_list: any = [];


	constructor( private ds: DataService, private route: ActivatedRoute, private router: Router ){
	}

	ngOnInit() {
		this.parent_flag.emit(
			{
				comp_name: 'srmenu',
				hide_side_menu: false,
				hide_login_btn: true,
				hide_logout_btn: false,
				content_name: 'main-content'
			}
		);
		
		this.side_menu_list = this.ds.getSidemenus(362);
	}

}