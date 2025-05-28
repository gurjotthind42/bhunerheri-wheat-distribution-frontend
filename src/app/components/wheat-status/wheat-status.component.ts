import { Component, OnInit } from '@angular/core';
import { WheatService } from "../../services/wheat.service";
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-wheat-status',
  templateUrl: './wheat-status.component.html',
  styleUrls: ['./wheat-status.component.css'],
  imports: [CommonModule ,MatSlideToggleModule, MatTableModule ]
})
export class WheatStatusComponent implements OnInit {
  data: any[] = [];
  displayedColumns = ['fps_id', 'allocation', 'received', 'issued', 'yesterday_distribution', 'today_distribution', 'distribution_percentage', 'cb', 'updated_on'];

  constructor(private wheatService: WheatService) {}

  ngOnInit() {
    this.wheatService.getData().subscribe(res => this.data = res);
  }
}
