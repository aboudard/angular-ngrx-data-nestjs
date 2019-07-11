import { Injectable } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faTrashAlt,
  faCheckSquare,
  faSquare
} from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  static initFaIcons(): void {
    library.add(faTrashAlt, faEdit, faCheckSquare, faSquare);
  }
}
