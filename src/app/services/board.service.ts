import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Task } from '../models/task.model' 
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class BoardService {
  createBoard(data: Board) {
    return this.db.collection('boards').add({
      ...data,
      tasks: [{description: 'Hello!', label: 'yellow'}]
    });
  }

  deleteBoard(boardId: string) {
    return this.db.collection('boards').doc(boardId).delete();
  }

  updateTasks(boardId: string, tasks: Task[]) {
    return this.db.collection('boards').doc(boardId).update({ tasks });
  }

  removeTask(boardId: string, task: Task) {
    return this.db.collection('boards').doc(boardId).update({
      tasks: firebase.firestore.FieldValue.arrayRemove(task)
    })
  }

  getBoards() {
    return this.db.collection<Board>('boards', ref => 
      ref.orderBy('priority')
    ).valueChanges({ idField: 'id'});
  }

  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('boards').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }


  constructor(private db: AngularFirestore) { }
}  
