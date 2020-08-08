import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@NgModule({
    imports: [    
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatButtonToggleModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatButtonToggleModule,
    ]
})

export class MaterialModule {}