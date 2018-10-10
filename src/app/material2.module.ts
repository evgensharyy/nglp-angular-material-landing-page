import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
	     MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, MatTableModule, 
	     MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
            MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, 
            MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
            MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, 
            MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule]
})
export class Material2Module { }
