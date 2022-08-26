/* User model */
export class User {
  // placeholder method that doesn't do anything
  // cannot delete one since it no longer compiles
  static firstName(firstName: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public firstName: string, public isOnline?: boolean) {}
}
