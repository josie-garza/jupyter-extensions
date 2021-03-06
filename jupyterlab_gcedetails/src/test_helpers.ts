/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const DETAILS_RESPONSE = `{
  "gpu": {
    "cuda_version": "10.1",
    "driver_version": "418.87.01",
    "gpu": 100,
    "memory": 6,
    "name": "Tesla K80",
    "temperature": "42 C"
  },
  "instance": {
    "attributes": {
      "framework": "PyTorch:1.4",
      "install-nvidia-driver": "True",
      "notebooks-api": "PROD",
      "proxy-mode": "service_account",
      "proxy-url": "44dcc67790e9c556-dot-us-west1.notebooks.googleusercontent.com",
      "shutdown-script": "timeout 30 gcloud compute instances remove-metadata pytorch --keys=proxy-url --zone us-west1-b",
      "title": "PyTorch/fastai/CUDA10.0",
      "version": "44"
    },
    "cpuPlatform": "Intel Broadwell",
    "description": "",
    "disks": [
      {
        "deviceName": "persistent-disk-0",
        "index": 0,
        "mode": "READ_WRITE",
        "type": "PERSISTENT"
      }
    ],
    "guestAttributes": {},
    "hostname": "pytorch.c.test-project.internal",
    "id": 127546640929027970,
    "image": "projects/deeplearning-platform-release/global/images/pytorch-1-4-cu101-notebooks-20200302",
    "legacyEndpointAccess": {
      "0.1": 0,
      "v1beta1": 0
    },
    "licenses": [
      {
        "id": "1000205"
      },
      {
        "id": "5638175847114525401"
      },
      {
        "id": "6695225044516563714"
      }
    ],
    "machineType": {
      "description": "4 vCPU, 15 GB RAM",
      "name": "n1-standard-4"
    },
    "maintenanceEvent": "NONE",
    "name": "pytorch",
    "networkInterfaces": [
      {
        "accessConfigs": [
          {
            "externalIp": "34.83.159.72",
            "type": "ONE_TO_ONE_NAT"
          }
        ],
        "dnsServers": [
          "169.254.169.254"
        ],
        "forwardedIps": [],
        "gateway": "10.138.0.1",
        "ip": "10.138.0.16",
        "ipAliases": [],
        "mac": "42:01:0a:8a:00:10",
        "mtu": 1460,
        "network": "projects/123456/networks/default",
        "subnetmask": "255.255.240.0",
        "targetInstanceIps": []
      }
    ],
    "preempted": "FALSE",
    "remainingCpuTime": -1,
    "scheduling": {
      "automaticRestart": "TRUE",
      "onHostMaintenance": "TERMINATE",
      "preemptible": "FALSE"
    },
    "serviceAccounts": {
      "123456-compute@developer.gserviceaccount.com": {
        "aliases": [
          "default"
        ],
        "email": "123456-compute@developer.gserviceaccount.com",
        "scopes": [
          "https://www.googleapis.com/auth/cloud-platform",
          "https://www.googleapis.com/auth/userinfo.email"
        ]
      },
      "default": {
        "aliases": [
          "default"
        ],
        "email": "123456-compute@developer.gserviceaccount.com",
        "scopes": [
          "https://www.googleapis.com/auth/cloud-platform",
          "https://www.googleapis.com/auth/userinfo.email"
        ]
      }
    },
    "tags": [
      "deeplearning-vm",
      "notebook-instance"
    ],
    "virtualClock": {
      "driftToken": "0"
    },
    "zone": "projects/123456/zones/us-west1-b"
  },
  "oslogin": {
    "authenticate": {
      "sessions": {}
    }
  },
  "project": {
    "attributes": {},
    "numericProjectId": 123456,
    "projectId": "test-project"
  },
  "utilization": {
    "cpu": 50,
    "memory": 16
  }
}`;

/** Returns a Promise that resolves a JSON response akin to the fetch API */
export function asFetchResponse(result: any, ok = true): Promise<Response> {
  return Promise.resolve({
    ok,
    json: () => Promise.resolve(result),
  } as Response);
}
