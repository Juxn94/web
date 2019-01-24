import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatData } from 'src/app/models/cat-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit, OnDestroy {

  audio = new Audio();
  id: number;
  currentCat: CatData;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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
    this.playAudio()
  }

  ngOnDestroy() {
    this.audio.pause();
  }

  playAudio() {
    this.audio.src = "assets/cat.mp3";
    this.audio.load();
    this.audio.play();
  }

}
