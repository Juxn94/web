import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatData } from 'src/app/models/cat-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.scss']
})
export class CatEditComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  id: number;
  currentCat: CatData;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(Number(this.route.snapshot.queryParamMap.get("id")));
    if (Number(this.route.snapshot.queryParamMap.get("id")) === undefined || isNaN(Number(this.route.snapshot.queryParamMap.get("id")))) {
      alert("Id is invalid");
      this.router.navigate(["/cats/cat-list"]);
    }

    this.id = Number(this.route.snapshot.queryParamMap.get("id"));
    const allCats: CatData[] = (JSON.parse(localStorage.getItem("cats")) !== null ? JSON.parse(localStorage.getItem("cats")) : []);
    if (allCats.find(cat => cat.id == this.id) === undefined) {
      alert("Cat not found!");
      this.router.navigate(["/cats/cat-list"]);
    }

    this.currentCat = allCats.find(cat => cat.id == this.id);

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', [Validators.required]]
    });
  }

  get f() { return this.editForm.controls; }

  save() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    const allCats: CatData[] = (JSON.parse(localStorage.getItem("cats")) !== null ? JSON.parse(localStorage.getItem("cats")) : []);
    const index = allCats.findIndex(cat => cat.id == this.id);
    allCats[index] = this.currentCat;
    localStorage.setItem("cats", JSON.stringify(allCats));
    alert("Cat was updated! :)");
  }
}
