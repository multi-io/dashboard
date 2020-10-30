// Copyright 2020 The Kubermatic Kubernetes Platform contributors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogRef} from '@angular/material/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {fakePacketCluster} from '@app/testing/fake-data/cluster.fake';
import {ApiMockService} from '@app/testing/services/api-mock.service';
import {ClusterMockService} from '@app/testing/services/cluster-mock-service';
import {MatDialogRefMock} from '@app/testing/services/mat-dialog-ref-mock';
import {ApiService} from '@core/services/api/service';
import {ClusterService} from '@core/services/cluster/service';
import {SharedModule} from '@shared/shared.module';
import {AlibabaProviderSettingsComponent} from '../alibaba-provider-settings/component';
import {AWSProviderSettingsComponent} from '../aws-provider-settings/component';
import {AzureProviderSettingsComponent} from '../azure-provider-settings/component';
import {DigitaloceanProviderSettingsComponent} from '../digitalocean-provider-settings/component';
import {EditProviderSettingsComponent} from '../component';
import {GCPProviderSettingsComponent} from '../gcp-provider-settings/component';
import {HetznerProviderSettingsComponent} from '../hetzner-provider-settings/component';
import {KubevirtProviderSettingsComponent} from '../kubevirt-provider-settings/component';
import {OpenstackProviderSettingsComponent} from '../openstack-provider-settings/component';
import {VSphereProviderSettingsComponent} from '../vsphere-provider-settings/component';
import {PacketProviderSettingsComponent} from './component';

const modules: any[] = [BrowserModule, BrowserAnimationsModule, SharedModule];

describe('PacketProviderSettingsComponent', () => {
  let fixture: ComponentFixture<PacketProviderSettingsComponent>;
  let component: PacketProviderSettingsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...modules],
      declarations: [
        EditProviderSettingsComponent,
        AWSProviderSettingsComponent,
        PacketProviderSettingsComponent,
        HetznerProviderSettingsComponent,
        OpenstackProviderSettingsComponent,
        VSphereProviderSettingsComponent,
        AzureProviderSettingsComponent,
        DigitaloceanProviderSettingsComponent,
        PacketProviderSettingsComponent,
        GCPProviderSettingsComponent,
        KubevirtProviderSettingsComponent,
        AlibabaProviderSettingsComponent,
      ],
      providers: [
        {provide: ApiService, useClass: ApiMockService},
        {provide: ClusterService, useClass: ClusterMockService},
        {provide: MatDialogRef, useClass: MatDialogRefMock},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketProviderSettingsComponent);
    component = fixture.componentInstance;
    component.cluster = fakePacketCluster();
    component.cluster.spec.cloud.packet.billingCycle = '';
    component.cluster.spec.cloud.packet.apiKey = '';
    component.cluster.spec.cloud.packet.projectID = '';
    fixture.detectChanges();
  });

  it('should initialize', () => {
    expect(component).toBeTruthy();
  });

  it('form valid after creating', () => {
    expect(component.form.valid).toBeTruthy();
  });
});
