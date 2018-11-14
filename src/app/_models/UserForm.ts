export class UserForm {

  constructor(
    public id: number,
    public titles: string,
    public firstName: string,
    public lastName: string,
    public emailAdd?: any,
    public countryCode?: string,
    public phoneNumber?: string,
    public companyName?: string,
    public position?: string,
    public likeToKnowMore?: boolean
  ) {  }

}
