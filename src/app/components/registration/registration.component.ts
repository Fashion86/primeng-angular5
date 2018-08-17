import { Component, OnInit, SecurityContext } from '@angular/core';
import {Registration} from '../../models/registdata';
import {RegisterDataService} from '../../services/register-data.service';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegisterDataService, MessageService]
})
export class RegistrationComponent implements OnInit {
  registrations: any = [];
  regModel: Registration;
  msgs: Message[] = [];
  display = false;
  isCollapsed: Boolean = true;
  searchItem: string;
  numbers: number[] = [1, 2, 3];
  totalpoint: number;
  constructor(private regservice: RegisterDataService,
              private messageService: MessageService,
              private _sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.onInit();
  }
  getalldata() {
    this.regservice.getallData().subscribe(data => {
      this.registrations = data;
    });
  }

  onInit() {
    // Initiate new registration.
    this.regModel = new Registration();
    this.regModel.phone = '+972';
    this.regModel.point = 10;
  }

  onSelectChoice(number) {
    this.regModel.choicenumber = parseInt(number);
  }

  onReset() {
    this.onInit();
  }

  onSave() {
    this.display = false;
    this.msgs = [];
    // Register Data
    this.regservice.registerData(this.regModel).subscribe(data => {
      if (data['success']) {
        // this.getalldata();
        this.msgs.push({severity: 'success', summary: 'Success Message', detail: 'Data submitted'});
      } else {
        this.msgs.push({severity: 'error', summary: 'Error Message', detail: data['err']});
      }
    });
  }

  onEdit(index: number) {

  }

  onDelete(index: number) {

  }

  onSearchEvents() {
    this.searchItem  = this.searchItem.replace(/\D/g,'');
      const param = {strparams: this.searchItem};
      this.regservice.searchData(param).subscribe(events => {
          this.registrations = events;
          this.totalpoint = 0;
          this.registrations.forEach(item => {
            this.totalpoint += item.point;
          });
        },
        err => {
          console.log(err);
          return false;
        }
      );
  }

  onCancelEdit() {
    this.display = false;
  }

}
