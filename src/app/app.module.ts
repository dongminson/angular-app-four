import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board/board.component';
import { TaskDialogComponent } from './dialogs/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFirestoreModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  entryComponents: [BoardDialogComponent, TaskDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
