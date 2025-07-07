import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forumPost } from '../app';
import { ForumService } from '../forum-service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit {

  //constructor(private forumService: ForumService) { }
  forumService=inject (ForumService);

  forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  forums: forumPost[] = [];

  ngOnInit(): void {
    this.forumService.getForums().subscribe(
      data => {
        this.forums = data;
        console.log('Forums loaded:', this.forums);
      });
      console.log('algo');
  }

  onSubmit(forum: forumPost): void {
    console.log('Form submitted:', this.forum);
  }
}
