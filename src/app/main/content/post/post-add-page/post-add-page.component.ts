import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../../services/post/post.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add-page',
  templateUrl: './post-add-page.component.html',
  styleUrls: ['./post-add-page.component.css']
})
export class PostAddPageComponent implements OnInit {

  public formCadPost: FormGroup = new FormGroup({});
  private postService: PostService;
  private snackBarMessage: MatSnackBar;
  private router: Router;

  constructor(postService: PostService, snackBarMessage: MatSnackBar, router: Router) {
    this.postService = postService;
    this.snackBarMessage = snackBarMessage
    this.router = router;
  }

  public ngOnInit(): void {
    this.formCadPost = new FormGroup(
      {
        "title": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
        "content": new FormControl("", [Validators.required, Validators.minLength(3)])
      },
    );
  }

  public save(): void {
    if (!this.formCadPost.invalid) {

      let data = {
        title: this.formCadPost.controls['title'].value,
        content: this.formCadPost.controls['content'].value,
      }

      this.postService.post(data).subscribe((response: any) => {

        if (typeof response !== 'undefined' && typeof response === 'object') {

          if (response.error == true) {
            this.snackBarMessage.open(response.data.message, 'OK', {
              panelClass: ['bg-danger-snack'],
              duration: 12000,
            });
          } else {
            this.snackBarMessage.open("Post criado com sucesso!", 'OK', {
              duration: 6000,
            });

            this.router.navigate(['/posts/list']);

          }
        } else {
          this.snackBarMessage.open("Erro ao salvar post.", 'OK', {
            panelClass: ['bg-danger-snack'],
            duration: 12000,
          });
        }
      }, (error: any) => {
        this.snackBarMessage.open("Erro ao salvar post.", 'OK', {
          panelClass: ['bg-danger-snack'],
          duration: 12000,
        });
      });
    }
  }

}
