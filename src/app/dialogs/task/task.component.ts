import { Component, OnInit, Inject } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskDialogComponent {

  labelOptions = ['gray', 'red', 'blue', 'green', 'yellow', 'purple'];

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleTaskDelete() {
    this.boardService.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }

}
