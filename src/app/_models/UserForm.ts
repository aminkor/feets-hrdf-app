export class UserForm {

  constructor(
    public id: number,
    public titles: string,
    public firstName: string,
    public lastName: string,
    public emailAdd?: any,
    public countryCode?: string,
    public phoneNumber?: number,
    public companyName?: string,
    public position?: string,
    public likeToKnowMore?: boolean
  ) {  }

}
