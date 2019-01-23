import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatData } from 'src/app/models/cat-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-create',
  templateUrl: './cat-create.component.html',
  styleUrls: ['./cat-create.component.scss']
})
export class CatCreateComponent implements OnInit {

  createForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', [Validators.required]]
    });
  }

  get f() { return this.createForm.controls; }

  save() {
    this.submitted = true;

    if (this.createForm.invalid) {
      return;
    }
    const allCats: CatData[] = (JSON.parse(localStorage.getItem("cats")) !== null ? JSON.parse(localStorage.getItem("cats")) : []);
    var lastId = 0;
    if (allCats !== null && allCats[allCats.length - 1] !== undefined) {
      lastId = allCats[allCats.length - 1].id;
    }
    const newCat = new CatData(lastId + 1, this.f.name.value, this.f.description.value, this.f.img.value);
    allCats.push(newCat);
    localStorage.setItem("cats", JSON.stringify(allCats));
    alert("Cat was added! :)");
    this.router.navigate(["/cats/cat-list"]);
  }

}
