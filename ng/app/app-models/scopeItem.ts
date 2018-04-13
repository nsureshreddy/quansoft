export class ScopeItem {
  name: string;
  workItems: Array<any>;
}

export const SCOPE_ITEMS: ScopeItem[] = [
  {
    name: 'Cost Estimates',
    workItems: [
      { name: 'Quantity Take of Civil works', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Quantity Take of Finishes', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Quantity Take of Rebar', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Quantity Take of Interiors', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Quantity Take of MEP', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Cost Estimates', uom: '', rate: 0, quantity: 0, amount: 0 }
    ]
  },
  {
    name: 'Bill Auditing',
    workItems: [
      { name: 'Valuation of Running Account bills', uom: '', rate: 0, quantity: 0, amount: 0, },
      { name: 'Change Orders if any', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Cash Flow Projections', uom: '', rate: 0, quantity: 0, amount: 0, },
      { name: 'Settlement of Claims if any', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Project Closure report', uom: '', rate: 0, quantity: 0, amount: 0 },
    ]
  },
  {
    name: 'Contracts Management',
    workItems: [
      { name: 'Preparation of Tender Document', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Prequalification of Vendors', uom: '', rate: 0, quantity: 0, amount: 0},
      { name: 'Issue of Request for Proposal for shortlisted vendors', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Floating of Tenders to shortlisted vendors', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Conducting Pre-bid Meetings', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Conducting Negotiation Meetings', uom: '', rate: 0, quantity: 0, amount: 0},
      { name: 'Evaluation of Bids on Technical & Commercial', uom: '', rate: 0, quantity: 0, amount: 0 },
      { name: 'Note for Record and Draft Order to sign off', uom: '', rate: 0, quantity: 0, amount: 0 }
    ]
  }
];
