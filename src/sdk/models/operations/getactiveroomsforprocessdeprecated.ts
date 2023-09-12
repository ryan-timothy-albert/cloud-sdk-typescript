/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetActiveRoomsForProcessDeprecatedSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    auth0: string;
}

export class GetActiveRoomsForProcessDeprecatedRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=processId" })
    processId: string;
}

export class GetActiveRoomsForProcessDeprecatedResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    getActiveRoomsForProcessDeprecated404ApplicationJSONString?: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata({ elemType: shared.RoomWithoutAllocations })
    roomWithoutAllocations?: shared.RoomWithoutAllocations[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}