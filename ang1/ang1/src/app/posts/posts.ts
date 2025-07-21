import { Component } from '@angular/core';
import { Post } from '../models/post.model';



@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts:Post[]=[
     {
    id: 1,
    userid: 1,
    username: 'novel_lover',
    title: 'A Journey Through Time',
    body: 'A captivating tale of love and loss across decades.',
    genre: 'fiction'
  },
  {
    id: 2,
    userid: 2,
    username: 'litfan',
    title: 'Whispers in the Wind',
    body: 'A heartwarming story set in a small coastal town.',
    genre: 'fiction'
  },
  {
    id: 3,
    userid: 3,
    username: 'storyteller',
    title: 'City of Secrets',
    body: 'A modern drama uncovering urban mysteries.',
    genre: 'fiction'
  },

  {
    id: 4,
    userid: 4,
    username: 'factfinder',
    title: 'The Psychology of Habits',
    body: 'Explore how habits are formed and broken.',
    genre: 'non-fiction'
  },
  {
    id: 5,
    userid: 5,
    username: 'truthseeker',
    title: 'History of Ancient Civilizations',
    body: 'An insightful dive into lost empires and cultures.',
    genre: 'non-fiction'
  },
  {
    id: 6,
    userid: 6,
    username: 'readtolearn',
    title: 'Financial Literacy 101',
    body: 'The basics of saving, investing, and budgeting.',
    genre: 'non-fiction'
  },
  {
    id: 8,
    userid: 8,
    username: 'spellbound',
    title: 'Realm of Shadows',
    body: 'A young mage battles darkness in a cursed land.',
    genre: 'fantasy'
  },
  {
    id: 9,
    userid: 9,
    username: 'epicwriter',
    title: 'Chronicles of Eloria',
    body: 'Elves, dwarves, and a hero with a secret past.',
    genre: 'fantasy'
  },
  {
    id: 10,
    userid: 10,
    username: 'talesmith',
    title: 'Moonlight Sorcery',
    body: 'A spell gone wrong, and a world in peril.',
    genre: 'fantasy'
  }
    
  ];

  selectedGenre='home';

  selectGenre(genre:string){
     this.selectedGenre=genre;
  }

  genreFilter(){
    if(this.selectedGenre == 'home') return this.posts;
    else
      return this.posts.filter(post=>post.genre==this.selectedGenre)
  }

}
