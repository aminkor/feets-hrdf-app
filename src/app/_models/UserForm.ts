export class UserForm {

  constructor(
    public id: number,
    public titles: string,
    public name: string,
    public alterEgo?: string,
    public emailAdd?: any,
    public phoneNumber?: string,
    public companyName?: string,
    public position?: string,
    public likeToKnowMore?: boolean
  ) {  }

}
