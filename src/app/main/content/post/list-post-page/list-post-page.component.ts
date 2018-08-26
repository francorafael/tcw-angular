import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post/post.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-post-page',
  templateUrl: './list-post-page.component.html',
  styleUrls: ['./list-post-page.component.css']
})
export class ListPostPageComponent implements OnInit {


  /**
   * @var dataSourceTable
   */
  public dataSourceTable: MatTableDataSource<any>;

  /**
   * @var displayedColumnsTable
   */
  public displayedColumnsTable: Array<string> = [];

  /**
   * @var loadingDataSource
   */
  public loadingDataSource: Boolean = false;

  /**
   * Serviço de API para os posts.
   * @var postService
   */
  private postService: PostService;

  /**
   * @var snackBarMessage
   */
  private snackBarMessage: MatSnackBar;

  constructor(
    postService: PostService,
    snackBarMessage: MatSnackBar) {
    this.postService = postService;
    this.snackBarMessage = snackBarMessage
  }

  public ngOnInit():void {
    this.displayedColumnsTable = ['id', 'title', 'date', 'action'];
    this.getPosts();
  }

  public getPosts():void {

    this.loadingDataSource = true;

    this.postService.get().subscribe((response: any) => {

      if (typeof response !== 'undefined' && typeof response === 'object' && response.data.length > 0) {

        this.loadingDataSource = false;

        if (response.data.error == false) {
          this.snackBarMessage.open(response.data.message, 'OK', {
            panelClass: ['bg-danger-snack'],
            duration: 12000,
          });
        } else {
          this.dataSourceTable = new MatTableDataSource(response.data);
          this.snackBarMessage.open("Registros carregado com sucesso!", 'OK', {
            duration: 6000,
          });
        }
      } else {
        this.loadingDataSource = false;
        this.dataSourceTable = null;
        this.snackBarMessage.open("Erro ao carregar dados.", 'OK', {
          panelClass: ['bg-danger-snack'],
          duration: 12000,
        });
      }
    }, (error: any) => {
      this.loadingDataSource = false;
      this.dataSourceTable = null;
      this.snackBarMessage.open("Erro ao carregar dados.", 'OK', {
        panelClass: ['bg-danger-snack'],
        duration: 12000,
      });
    });
  }
}
