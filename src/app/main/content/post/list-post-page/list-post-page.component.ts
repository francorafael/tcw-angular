import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post/post.service';
import { MatTableDataSource, MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { DialogDetailPostComponent } from '../../../../components/post/dialog-detail-post/dialog-detail-post.component';

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

  /**
   * @var dialog
   */
  public dialog: MatDialog

  /**
  * @var dialogDetailPost
  */
  public dialogDetailPost: MatDialogRef<DialogDetailPostComponent>;

  /**
   * @param postService 
   * @param snackBarMessage 
   */
  constructor(
    postService: PostService,
    snackBarMessage: MatSnackBar,
    dialog: MatDialog) {
    this.postService = postService;
    this.snackBarMessage = snackBarMessage
    this.dialog = dialog;
  }

  public ngOnInit(): void {
    this.displayedColumnsTable = ['id', 'title', 'date', 'action'];
    this.getPosts();
  }

  public getPosts(): void {

    this.loadingDataSource = true;

    this.postService.get().subscribe((response: any) => {

      if (typeof response !== 'undefined' && typeof response === 'object' && response.data.length > 0) {

        this.loadingDataSource = false;

        if (response.data.error == true) {
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

  public delete(id: number): void {

    this.loadingDataSource = true;

    this.postService.delete(id).subscribe((response: any) => {

      if (typeof response !== 'undefined' && typeof response === 'object') {

        if (response.error == true) {
          this.snackBarMessage.open(response.data.message, 'OK', {
            panelClass: ['bg-danger-snack'],
            duration: 12000,
          });

          this.loadingDataSource = false;
        } else {
          this.snackBarMessage.open("Post excluído com sucesso!", 'OK', {
            duration: 6000,
          });
          this.getPosts();
        }
      } else {
        this.loadingDataSource = false;
        this.snackBarMessage.open("Erro ao excluir post.", 'OK', {
          panelClass: ['bg-danger-snack'],
          duration: 12000,
        });
      }
    }, (error: any) => {
      this.loadingDataSource = false;
      this.snackBarMessage.open("Erro ao excluir post.", 'OK', {
        panelClass: ['bg-danger-snack'],
        duration: 12000,
      });
    });
  }

  /**
   * showDetailPost
   * @param element 
   */
  public showDetailPost(element: any): void {

    // Verifica se o dialog está aberto
    if (this.dialogDetailPost instanceof MatDialogRef) {
      this.dialogDetailPost.close();
    }

    // Exibe o dialog para o usuário
    this.dialogDetailPost = this.dialog.open(DialogDetailPostComponent, {
      disableClose: true,
      panelClass: 'panelClass',
      width: '650px',
      data: {
        title: element.title,
        content: element.content,
        created_at: element.created_at
      }
    });

    // Escuta a respostado dialog
    this.dialogDetailPost.afterClosed().subscribe((url: any) => {
      this.dialogDetailPost.close();
    });
  }
}
