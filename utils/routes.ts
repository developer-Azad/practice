export class DashRoutes {
  // Shared routes
  static home = '/';
  static overview = '/overview';
  static help = '/help';
  static settings = '/settings';

  //Creators specific routes
  static explore = '/explore';
  static campaignFlow = '/flow';
  static accounts = '/accounts';
  static cards = '/cards';

  // Brands specific routes
  static campaigns = '/campaigns';
  static newCampaign = `${this.campaigns}/new`;
  static discover = '/discover';
  static licensing = '/licensing';
  static content = '/content';
  static performance = '/performance';
}
