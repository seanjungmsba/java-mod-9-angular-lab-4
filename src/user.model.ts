export class User {
  static firstName(firstName: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public firstName: string, public isOnline?: boolean) {}
}
