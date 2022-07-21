import {Component, OnInit} from '@angular/core';

import {Store, select} from "@ngrx/store";
import {Observable} from "rxjs";
import {Cat} from "../cat.model";

import * as catActions from "../state/cat.actions";
import * as fromCat from "../state/cat.reducer";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  getBreedForm: FormGroup = new FormGroup({
    selectedBreeds: new FormArray([])
  });
  allComplete: boolean = true;

  cats$?: Observable<Cat[]>;

  allCats: Cat[] = [];
  activeCats: Cat[] = [];
  selectedBreeds = (this.getBreedForm.controls['selectedBreeds'] as FormArray);
  catQuantity: number = 10;
  valid: boolean = true;

  constructor(private store: Store<fromCat.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new catActions.LoadCats());
    this.cats$ = this.store.pipe(select(fromCat.getCats));
    this.cats$?.pipe((res) => {
      res.forEach((el) => {
        el.forEach((element) => {
          this.selectedBreeds.push(new FormControl(element.name));
          if (this.activeCats.length < 10) {
            this.activeCats.push(element);
          } else {
            // pass
          }
        })
        this.allCats = el;
      })
      return res;
    });
  }

  changeQuantity(event: any) {
    this.catQuantity = event.value;
    this.activeCats = this.allCats.filter((cat) => {
      return this.selectedBreeds.value.includes(cat.name);
    }).slice(0, this.catQuantity);
  }

  selectBreed(event: any) {
    console.log(event);
    if (event.checked) {
      this.selectedBreeds.push(new FormControl(event.source.value));
    } else if (!event.checked) {
      const index = this.selectedBreeds.controls
        .findIndex(x => x.value === event.source.value);
      this.selectedBreeds.removeAt(index);
    }
    this.activeCats = this.allCats.filter((cat) => {
      return this.selectedBreeds.value.includes(cat.name);
    }).slice(0, this.catQuantity);
  }
}
