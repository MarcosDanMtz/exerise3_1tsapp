import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent{
    @Output() opcSelected = new EventEmitter<string>();
    
    onSelect(opc: string){
        this.opcSelected.emit(opc);
    }

}