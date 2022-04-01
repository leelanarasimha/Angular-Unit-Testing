import { first } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  it('should raise an event when the delete post is clicked', () => {
    const comp = new PostComponent();
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});
