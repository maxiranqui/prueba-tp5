import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validator,Validators,FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  @Input() crearPersona : any;
  
  itemForm: FormGroup;
  persona: any;
  param: any;

 //crearPersona: any;
  showConsultarPersona: Boolean= false;
  showCrearPersona: boolean = true;


  constructor(private fb: FormBuilder, private router: ActivatedRoute) {}

  

  ngOnInit(): void {
      this.param = this.router.snapshot.params;

      if(Object.keys(this.param).length){
        this.persona = this.param
      }else{
        this.persona = this.param;
      }

    this.initForm(this.persona);
  }

  initForm(item){
    this.itemForm = this.fb.group({
      nombre: [item.nombre],
      apellido:[item.apellido],
      edad: [item.edad],
      domicilio: [item.domicilio]
    })
  }
  submit(){
      this.crearPersona = this.itemForm.value;
      this.showConsultarPersona = true;
      this.showCrearPersona = false;

  }

}
