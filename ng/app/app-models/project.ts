import { Proposal } from './proposal';
import { ScopeItem } from './scopeItem';
import { TermsAndConditions } from './termsAndConditions';
import { CostEstimates } from './CostEstimates';

export class Project {
  jobId: number;
  name: string;
  client: string;
  location: string;
  email: string;
  region: string;
  stage: string;
  type: string;
  scope: Array<string>;
  siteArea: string;
  builtupArea: string;
  startDate: Date;
  endDate: Date;
  numberOfBuildings: number;
  numberOfFloors: number;
  orderNumber: number;
  orderValue: string;
  fsi: string;
  participants: Array<string>;
  proposal: Proposal;
  scopeItems: Array<ScopeItem>;
  termsAndonditions: TermsAndConditions;
  costEstimates: CostEstimates;
  quotations: any;
}
