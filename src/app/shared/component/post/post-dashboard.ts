import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-post-dashboard',
  imports: [NgFor, RouterOutlet],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard {

}
