import { ROLES } from './roles.enum';
export class User {
	user = '';
	email = '';
	password = '';
	role = ROLES.USER;

	constructor(user, email, password, role) {
		this.user = user;
		this.email = email;
		this.password = password;
		this.role = role;
	}
}
