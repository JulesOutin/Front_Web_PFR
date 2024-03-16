import { Component, OnInit } from '@angular/core';
import { Open5Service } from '../../services/open5.service';
import { FormComponent } from '../../components/form/form.component';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    console.log('Fonctionnement de la page home');
  }
 
}