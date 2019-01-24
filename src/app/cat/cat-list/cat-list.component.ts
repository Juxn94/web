import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatData } from 'src/app/models/cat-data';
import { CatResponse } from 'src/app/models/cat-response';
import { Observable } from 'rxjs';
import * as faker from 'faker'

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  cats: CatData[] = [];
  catsToDisplay: CatData[] = []
  catApiUrl = "https://api.thecatapi.com/v1/images/search";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.updateCats();
  }

  updateCats() {
    const currentCats = JSON.parse(localStorage.getItem('cats'))
    this.cats = currentCats !== null ? currentCats : [];
    this.catsToDisplay = currentCats;
  }

  delete(id, name) {
    if (confirm("Do you really want to delete " + name + "? D:")) {
      const index = this.cats.findIndex(cat => cat.id == id);
      this.cats.splice(index, 1);
      localStorage.setItem("cats", JSON.stringify(this.cats));
    }
  }

  createRandomCat() {
    this.getRandomCat().subscribe(
      data => {
        var currentId = 0;
        if (this.cats !== null && this.cats[this.cats.length - 1] !== undefined) {
          currentId = this.cats[this.cats.length - 1].id + 1;
        }

        const randomCat = new CatData(currentId, faker.fake("{{name.firstName}}"), faker.fake("{{random.words}} {{random.words}} {{random.words}}"), data[0].url)
        this.cats.push(randomCat);
        localStorage.setItem("cats", JSON.stringify(this.cats));
        this.updateCats()
      }
    );
  }

  updateSearch(event) {
    this.catsToDisplay = this.cats.filter(cat => cat.name.toUpperCase().includes(event.target.value.toUpperCase()));
  }

  getRandomCat(): Observable<CatResponse[]> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-api-key', '6154a215-f197-4ae6-8f38-bf5244139e53');
    return this.httpClient
      .get<CatResponse[]>(this.catApiUrl, { headers, responseType: 'json' });
  }


}
