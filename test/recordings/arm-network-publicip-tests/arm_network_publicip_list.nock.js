// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip5946\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5946\",\r\n      \"etag\": \"W/\\\"6816b719-423b-4202-8b3f-68c57fd0a151\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipAddress\": \"104.40.91.89\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 6,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip\",\r\n          \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip17754.westus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    },\r\n    {\r\n      \"name\": \"armpublicipnew8182\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew8182\",\r\n      \"etag\": \"W/\\\"54620afe-41d9-425b-8e30-899c23142636\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip17754\",\r\n          \"fqdn\": \"dnstestpubip17754.westus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip1625.westus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1455',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1cdce256-177e-4874-a250-d132770e9406',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31909',
  'x-ms-correlation-request-id': '56d6f95f-1032-4fa4-95ae-641767240e91',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T115957Z:56d6f95f-1032-4fa4-95ae-641767240e91',
  date: 'Wed, 22 Apr 2015 11:59:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"armpublicip5946\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicip5946\",\r\n      \"etag\": \"W/\\\"6816b719-423b-4202-8b3f-68c57fd0a151\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipAddress\": \"104.40.91.89\",\r\n        \"publicIPAllocationMethod\": \"Static\",\r\n        \"idleTimeoutInMinutes\": 6,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip\",\r\n          \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip17754.westus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    },\r\n    {\r\n      \"name\": \"armpublicipnew8182\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew8182\",\r\n      \"etag\": \"W/\\\"54620afe-41d9-425b-8e30-899c23142636\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 4,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"dnstestpubip17754\",\r\n          \"fqdn\": \"dnstestpubip17754.westus.cloudapp.azure.com.\",\r\n          \"reverseFqdn\": \"dnstestpubip1625.westus.cloudapp.azure.com.\"\r\n        }\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1455',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1cdce256-177e-4874-a250-d132770e9406',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31909',
  'x-ms-correlation-request-id': '56d6f95f-1032-4fa4-95ae-641767240e91',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T115957Z:56d6f95f-1032-4fa4-95ae-641767240e91',
  date: 'Wed, 22 Apr 2015 11:59:57 GMT',
  connection: 'close' });
 return result; }]];