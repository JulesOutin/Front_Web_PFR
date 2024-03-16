import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Open5Service } from '../../services/open5.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // Define an array to store the races data
  races: any[] = [];
  classes: any[] = [];

  constructor(
    private router: Router,
    private open5Service: Open5Service
  ) {}

  ngOnInit() {
    this.LoadRaces();
    this.LoadClasses();
  }

  LoadRaces() { 
    this.open5Service.getAllRaces().subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log('Races data:', data);
      this.races = data.results;
    });
  }

  LoadClasses() {
    this.open5Service.getAllClasses().subscribe((data: any) => { // Specify the type of 'data' as 'any'
      console.log('Classes data:', data);
      this.classes = data.results;
    });
  }

  fg = new FormGroup({
    perso_name: new FormControl('', [Validators.required]),
    race: new FormControl('',[Validators.required]),
    classe: new FormControl('',[Validators.required]),
    history: new FormControl('',[Validators.required]),
    alignment: new FormControl('', [Validators.required]),
    name_player: new FormControl('', [Validators.required]),
    pts_exp: new FormControl('', [Validators.required]),
  });

  submit() {
    console.log(this.fg.value);
  }
  get perso_name() {
    return this.fg.get('perso_name');
  }
  get race() {
    return this.fg.get('race');
  }
  get classe() {
    return this.fg.get('classe');
  }
  get history() {
    return this.fg.get('history');
  }
  get alignment() {
    return this.fg.get('alignment');
  }
  get name_player() {
    return this.fg.get('name_player');
  }
  get pts_exp() {
    return this.fg.get('pts_exp');
  }
}


