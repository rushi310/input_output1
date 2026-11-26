import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModule } from "../../material/material-module";

@Component({
  imports: [RouterLink,
      RouterLinkActive,
      MaterialModule
],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.scss',
  templateUrl: './nav-bar.html',
})
export class NavBar {}
