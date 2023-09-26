import { Component } from '@angular/core';

import { UserService } from 'src/app/core/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users = new UserService().getUsers();

  deleteUser(id:number){
    const indexToDelete = this.users.findIndex(
      (user) => user.idCustomer === id
    );
    if (indexToDelete !== -1) {
      this.users.splice(indexToDelete, 1);
    }
  }
}
