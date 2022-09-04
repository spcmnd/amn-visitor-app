export interface ExhibitionDTO {
  exhibitionId: number;
  begindate: string;
  description: string;
  enddate: string;
  shortdescription: string;
  title: string;
  venue: {
    zipcode: string;
    country: string;
    begindate: string;
    enddate: string;
    address2: string;
    city: string;
    address1: string;
    venueid: number;
    ishamvenue: number;
    name: string;
    fullname: string;
    state: string;
  };
  id: string;
  forecast: {
    today: string;
    tomorrow: string;
  };
}

export class Exhibition {
  public exhibitionId: number;
  public begindate: Date;
  public description: string;
  public enddate: Date;
  public shortdescription: string;
  public title: string;
  public venue: {
    zipcode: string;
    country: string;
    begindate: Date;
    enddate: Date;
    address2: string;
    city: string;
    address1: string;
    venueid: number;
    ishamvenue: number;
    name: string;
    fullname: string;
    state: string;
  };
  public id: string;
  public forecast: {
    today: string;
    tomorrow: string;
  };

  constructor(init: ExhibitionDTO) {
    this.exhibitionId = init.exhibitionId;
    this.begindate = new Date(init.begindate);
    this.description = init.description;
    this.enddate = new Date(init.enddate);
    this.shortdescription = init.shortdescription;
    this.title = init.title;
    this.venue = {
      zipcode: init.venue.zipcode,
      country: init.venue.country,
      begindate: new Date(init.venue.begindate),
      enddate: new Date(init.venue.enddate),
      address2: init.venue.address2,
      city: init.venue.city,
      address1: init.venue.address1,
      venueid: init.venue.venueid,
      ishamvenue: init.venue.ishamvenue,
      name: init.venue.name,
      fullname: init.venue.fullname,
      state: init.venue.state,
    };
    this.id = init.id;
    this.forecast = init.forecast;
  }
}
