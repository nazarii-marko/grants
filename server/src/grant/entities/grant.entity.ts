import { AreaOfFunding, GrantStatus } from '@prisma/client';

export class Grant {
  id: string;
  logoUrl?: string;
  name: string;
  foundationName: string;
  averageAmount: number;
  status: GrantStatus;
  location?: Location;
  locationId: string;
  areaOfFunding: AreaOfFunding[];
  deadline: Date;
  matchDate?: Date;
}

export class Location {
  id: string;
  country: string;
  state: string;
  city: string;
}
