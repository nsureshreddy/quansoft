import { MasterScheduleActivity } from "./MasterScheduleActivity";

export class MasterSchedule {
  _id: string;
  code: string;
  description: string;
  costCode: string;
  costCentre: string;
  __v: string;
  activities: Array<MasterScheduleActivity>;
}