export class Data {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly email: string,
    public readonly copyright: string,
    public readonly navLinks: NavLink[],
  ) {}
}

export class NavLink {
  constructor(
    public readonly label: string,
    public readonly url: string,
  ) {}
}

export const DATA = new Data(
  `vorant94's Digital Garden`,
  `Welcome to my digital garden, here I write about all sorts of things (mostly about technologies, a little bit on gaming, traveling and self-reflecting)`,
  'vorant94@gmail.com',
  'Mordechai Dror © 2021-present',
  [
    new NavLink('Home', '/'),
    new NavLink('About', '/about'),
    new NavLink('Posts', '/posts'),
  ],
);
