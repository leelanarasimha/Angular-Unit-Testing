import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/Post/post.service';
import { PostDetailComponent } from './post-detail.component';

describe('PostDetailComponent', () => {
  let fixture: ComponentFixture<PostDetailComponent>;
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };

    let mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    let mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: PostService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(PostDetailComponent);
  });
});
