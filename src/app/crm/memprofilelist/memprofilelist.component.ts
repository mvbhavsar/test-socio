import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-memprofilelist',
	templateUrl: './memprofilelist.component.html',
	styleUrls: ['./memprofilelist.component.css']
})

export class MemprofilelistComponent implements OnInit {
	@Output() parent_flag = new EventEmitter();
	
	crm_members: any = {};
	crm_membersList: any = [];
	


	constructor( private ds: DataService, private route: ActivatedRoute, private router: Router ){
	}

	ngOnInit() {
		this.parent_flag.emit(
			{
				comp_name: 'memprofilelist',
				hide_side_menu: false,
				hide_login_btn: true,
				hide_logout_btn: false,
				content_name: 'main-content'
			}
		);
	}

}