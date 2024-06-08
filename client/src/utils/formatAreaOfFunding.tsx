import { AreaOfFunding } from '../typings';

const labelsMap = {
  CULTURE_FOOD: 'Culture Food',
  PUBLIC_HEALTH_WOMEN: 'Public Health Women',
  ENVIRONMENT_ART: 'Environment Art',
  VETERANS_ISSUES: "Veterans' Issues",
  MEDICAL_ASSISTANCE: 'Medical Assistance',
  RELIGIOUS_AND_SPIRITUAL_ENDEAVORS: 'Religious And Spiritual Endeavors',
  SOMETHING_ELSE: 'Something Else',
  AND_ANOTHER_ONE: 'And Another One',
  HELLO: 'Hello',
};

export default function formatAreaOfFunding(
  areaOfFunding: (AreaOfFunding | string)[],
) {
  const array =
    areaOfFunding.length > 5
      ? areaOfFunding.slice(0, 5).concat(`+${areaOfFunding.length - 5}`)
      : areaOfFunding;
  return array.map((area: AreaOfFunding | string, i) => (
    <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1" key={i}>
      {Object.keys(labelsMap).includes(area)
        ? labelsMap[area as AreaOfFunding]
        : area}
    </p>
  ));
}
