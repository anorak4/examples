import * as pulumi from "@pulumi/pulumi";

import { Dummy } from "./dummy";

const resourceCount: number = Number(process.env.RESOURCE_COUNT || 64);
const resourcePayloadBytes: number = Number(process.env.RESOURCE_PAYLOAD_BYTES || 1024);

function pad8(num: number): string {
    return ('00000000' + num).slice(-8);
}

function newDummy(i: number): Dummy {
    const deadweight = pad8(i).repeat(resourcePayloadBytes/8);
    return new Dummy(`dummy-${i}`, deadweight);
}

export const ResourceCount = resourceCount;

const dummy0 = newDummy(0);

export const ResourcePayloadBytes = dummy0.deadweight.apply(x => x.length);

for (var i = 1;  i < resourceCount; i++) {
    newDummy(i)
}
