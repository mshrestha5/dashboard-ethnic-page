export interface EthnicityOption{
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const ethnicityOption: readonly EthnicityOption[] = [
  { value: 'Select all that apply...', label: 'Select all that apply...', isFixed: true},
  { value: 'American Indian or Alaskan Native' , label :'American Indian or Alaskan Native'},
  { value: 'Asian', label: 'Asian' },
  { value: 'Black or African American', label: 'Black or African American'},
  { value: 'White', label: 'White' },
  { value: 'Native Hawaiian or Other Pacific Islander', label: 'Native Hawaiian or Other Pacific Islander' },
  { value: 'Two or More Races', label: 'Two or More Races' },
  { value: 'Decline to self identify', label: 'Decline to self identify' },
];
