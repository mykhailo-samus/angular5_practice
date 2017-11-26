export class Config  {
	 readonly id: number;
	 readonly login: string;
	 readonly email: string;

	constructor(id: number, login: string, email: string) {
		this.id = id;
		this.login = login;
		this.email = email;
	}
}