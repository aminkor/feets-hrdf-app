export class UserForm {

  constructor(
    public title: string,
    public answers: any[],
    public firstname: string,
    public lastname: string,
    public email: any,
    public company: string,
    public position: string,
    public check_box: boolean,
    public countryCode?: string,
    public phone?: string,
  ) {  }

}
