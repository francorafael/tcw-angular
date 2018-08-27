import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../../services/post/post.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edi-page',
  templateUrl: './post-edi-page.component.html',
  styleUrls: ['./post-edi-page.component.css']
})
export class PostEdiPageComponent implements OnInit {

  public formEdiPost: FormGroup = new FormGroup({});
  private postService: PostService;
  private snackBarMessage: MatSnackBar;
  private router: Router;
  private route: ActivatedRoute
  private idPost: number = 0;
  public title = "";
  public loadingEdi = true;

  constructor(postService: PostService, snackBarMessage: MatSnackBar, router: Router, route: ActivatedRoute) {
    this.postService = postService;
    this.snackBarMessage = snackBarMessage
    this.route = route;
    this.router = router;
  }

  public ngOnInit(): void {
    this.snackBarMessage.dismiss();
    this.idPost = this.route.snapshot.params.id;

    if (this.idPost < 0) {
      this.snackBarMessage.open("Erro ao pegar código do post, verifique os parametros.", 'OK', {
        panelClass: ['bg-danger-snack'],
        duration: 12000,
      });
      this.router.navigate(['/posts/list']);
    }

    this.formEdiPost = new FormGroup(
      {
        "title": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
        "content": new FormControl("", [Validators.required, Validators.minLength(3)])
      },
    );

    this.postService.show(this.idPost).subscribe((response : any) => {
        this.title = response.data[0].title;
        this.formEdiPost.controls['title'].setValue(response.data[0].title);
        this.formEdiPost.controls['content'].setValue(response.data[0].content);
        this.formEdiPost.updateValueAndValidity();
        this.loadingEdi = false;
    });

    
  }

  public save(): void {
    if (!this.formEdiPost.invalid) {

      let data = {
        title: this.formEdiPost.controls['title'].value,
        content: this.formEdiPost.controls['content'].value,
      }

      this.postService.update(data, this.idPost).subscribe((response: any) => {

        if (typeof response !== 'undefined' && typeof response === 'object') {

          if (response.error == true) {
            this.snackBarMessage.open(response.data.message, 'OK', {
              panelClass: ['bg-danger-snack'],
              duration: 12000,
            });
          } else {
            this.snackBarMessage.open("Post atualizado com sucesso!", 'OK', {
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


