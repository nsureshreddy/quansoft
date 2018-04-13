import { MasterScheduleActivity } from "./MasterScheduleActivity";

export class MasterSchedule {
  code: string;
  description: string;
  costCode: string;
  costCentre: string;
  activities: Array<MasterScheduleActivity>;
}