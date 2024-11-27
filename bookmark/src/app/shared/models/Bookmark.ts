export class Bookmark {
  id: number = 0;
  name: string = '';
  url: string = '';
  created_at: string = '';

  constructor(name: string, url: string, created_at: string) {
    this.name = name;
    this.url = url;
    this.created_at = created_at;
  }
}
