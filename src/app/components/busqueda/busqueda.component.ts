import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  heroes:Heroe[] =[];
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,private router:Router) { 
    
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params=>{
     
      this.heroes=this._heroesService.buscarHeroe(params['heroe']);
    });
  }
  verHeroe(i:number){
    this.router.navigate( ['/heroe',i]);
    
  }

}
