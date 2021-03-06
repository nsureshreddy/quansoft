import { Component, OnInit } from '@angular/core';
import { MastersService } from '../../services/masters.service';
import { MasterResource } from '../../app-models/masterResource';

@Component({
  selector: 'app-machineries-costs',
  templateUrl: './machineries-costs.component.html',
  styleUrls: ['./machineries-costs.component.css']
})
export class MachineriesCostsComponent implements OnInit {
  resources: any = [];
  updatedResources: any = [];
  resourceType = 'machineries';

  constructor(private mastersService: MastersService) { }

  ngOnInit() {
    this.getMasterResources();
  }

  getMasterResources() {
    this.mastersService.getMasterResources().subscribe((response: any) => {
      if (response.data) {
        this.resources = response.data.filter((item) => {
          return item.resourceType === this.resourceType;
        });
        this.loadHandson();
      }
    });
  }

  removeResource(index) {
    const resource = this.resources[index];
    if (resource && resource._id) {
      this.mastersService.deleteResource(resource._id).subscribe((response) => {
      });
    }
  }

  loadHandson() {
    const self = this;
    this.mastersService.loadHandOnTable(self, document.querySelector('#hot'));
  }

  onFileChange(event: any) {
    this.mastersService.readFile(event).then((data) => {
      this.resources = this.resources.concat(data);
      this.updatedResources = this.updatedResources.concat(this.resources);
      this.loadHandson();
    });
  }

  saveResources() {
    this.mastersService.saveResources(this.updatedResources, this.resourceType).subscribe(results => {
      this.updatedResources = [];
    });
  }

  onResourceUpdate(data) {
    if (data) {
      const self = this;
      data.forEach((item) => {
        let resource = self.resources[item[0]];
        resource[item[1]] = item[3];
        resource.resourceType = self.resourceType;
        self.addToUpdatedReSources(resource);
      });
    }
  }

  addToUpdatedReSources(resource: MasterResource) {
    const index = this.updatedResources.findIndex((item: MasterResource) => {
      return resource._id === item._id;
    });

    if (index < 0) {
      this.updatedResources.push(resource);
    } else {
      this.updatedResources[index] = resource;
    }
  }

}
