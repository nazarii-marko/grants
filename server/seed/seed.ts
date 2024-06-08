// import { Grant } from '../src/grant/entities/grant.entity';

import { Grant, Location, PrismaClient } from '@prisma/client';

(async () => {
  const prisma = new PrismaClient();

  // id      String  @id @default(uuid())
  // country String
  // state   String?
  //   city    String
  // grant   Grant[]

  const location: Location = await prisma.location.create({
    data: {
      country: 'United States',
      state: 'Delaware',
      city: 'Wilmington',
    },
  });

  const grants = await prisma.grant.createMany({
    data: [
      {
        logoUrl: '/vite.svg',
        name: 'Robinson Foundation Grant',
        foundationName: 'Robinson Foundation',
        averageAmount: 25000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'AND_ANOTHER_ONE',
        ],
        deadline: new Date('2025-01-01'),
      },
      {
        name: 'Looking Out',
        foundationName: 'Looking Out Foundation',
        averageAmount: 100000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'AND_ANOTHER_ONE',
          'ENVIRONMENT_ART',
          'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS',
          'SOMETHING_ELSE',
        ],
        deadline: new Date('2025-02-01'),
      },
      {
        name: 'Dribble Foundation Grant',
        foundationName: 'Dribble Foundation',
        averageAmount: 75000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'ENVIRONMENT_ART',
          'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS',
          'AND_ANOTHER_ONE',
        ],
        deadline: new Date('2025-01-01'),
      },
      {
        name: 'Walki wako Foundation Grant',
        foundationName: 'Walki Foundation',
        averageAmount: 130000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'ENVIRONMENT_ART',
          'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS',
          'AND_ANOTHER_ONE',
          'SOMETHING_ELSE',
        ],
        deadline: new Date('2025-02-01'),
      },
      {
        logoUrl: '/vite.svg',
        name: 'Robinson Foundation Grant',
        foundationName: 'Robinson Foundation',
        averageAmount: 25000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'AND_ANOTHER_ONE',
        ],
        status: 'APPLIED',
        deadline: new Date('2025-01-01'),
        matchDate: new Date(),
      },
      {
        name: 'Looking Out',
        foundationName: 'Looking Out Foundation',
        averageAmount: 100000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'AND_ANOTHER_ONE',
          'ENVIRONMENT_ART',
          'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS',
          'SOMETHING_ELSE',
        ],
        status: 'REJECTED',
        deadline: new Date('2025-02-01'),
        matchDate: new Date(),
      },
      {
        name: 'Dribble Foundation Grant',
        foundationName: 'Dribble Foundation',
        averageAmount: 75000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'ENVIRONMENT_ART',
          'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS',
          'AND_ANOTHER_ONE',
        ],
        status: 'ACCEPTED',
        deadline: new Date('2025-01-01'),
        matchDate: new Date(),
      },
      {
        name: 'Walki wako Foundation Grant',
        foundationName: 'Walki Foundation',
        averageAmount: 130000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'ENVIRONMENT_ART',
          'RELIGIOUS_AND_SPIRITUAL_ENDEAVORS',
          'AND_ANOTHER_ONE',
          'SOMETHING_ELSE',
        ],
        status: 'APPLIED',
        deadline: new Date('2025-02-01'),
        matchDate: new Date(),
      },
      {
        logoUrl: '/vite.svg',
        name: 'Robinson Foundation Grant',
        foundationName: 'Robinson Foundation',
        averageAmount: 25000,
        locationId: location.id,
        areaOfFunding: [
          'PUBLIC_HEALTH_WOMEN',
          'CULTURE_FOOD',
          'MEDICAL_ASSISTANCE',
          'VETERANS_ISSUES',
          'AND_ANOTHER_ONE',
        ],
        status: 'APPLIED',
        deadline: new Date('2025-01-01'),
        matchDate: new Date(),
      },
    ],
  });

  prisma.$disconnect();
})();
