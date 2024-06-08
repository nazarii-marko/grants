export interface Grant {
  id: string;
  logoUrl?: string;
  name: string;
  foundationName: string;
  averageAmount: number;
  status: GrantStatus;
  location: Location;
  locationId: string;
  areaOfFunding: AreaOfFunding[];
  deadline: number;
  matchDate?: number;
}

export type AreaOfFunding =
  | 'CULTURE_FOOD'
  | 'PUBLIC_HEALTH_WOMEN'
  | 'ENVIRONMENT_ART'
  | 'VETERANS_ISSUES'
  | 'MEDICAL_ASSISTANCE'
  | 'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS'
  | 'SOMETHING_ELSE'
  | 'AND_ANOTHER_ONE'
  | 'HELLO';

type GrantStatus = 'NEW' | 'APPLIED' | 'REJECTED' | 'ACCEPTED';

export interface Location {
  id: string;
  country: string;
  state: string;
  city: string;
}
