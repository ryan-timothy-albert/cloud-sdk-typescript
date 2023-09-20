/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class RoomV1 {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createRoomDeprecated(
        security: operations.CreateRoomDeprecatedSecurity,
        createRoomRequest: shared.CreateRoomRequest,
        appId: string,
        roomId?: string,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateRoomDeprecatedResponse> {
        const req = new operations.CreateRoomDeprecatedRequest({
            createRoomRequest: createRoomRequest,
            appId: appId,
            roomId: roomId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/rooms/v1/{appId}/create", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createRoomRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CreateRoomDeprecatedSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateRoomDeprecatedResponse =
            new operations.CreateRoomDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.roomId = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400 ||
                httpRes?.status == 403 ||
                httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                httpRes?.status == 500 ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async destroyRoomDeprecated(
        security: operations.DestroyRoomDeprecatedSecurity,
        appId: string,
        roomId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.DestroyRoomDeprecatedResponse> {
        const req = new operations.DestroyRoomDeprecatedRequest({
            appId: appId,
            roomId: roomId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/rooms/v1/{appId}/destroy/{roomId}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.DestroyRoomDeprecatedSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DestroyRoomDeprecatedResponse =
            new operations.DestroyRoomDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                break;
            case httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                httpRes?.status == 500 ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    httpRes?.data,
                    httpRes
                );
        }

        return res;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getActiveRoomsForProcessDeprecated(
        security: operations.GetActiveRoomsForProcessDeprecatedSecurity,
        appId: string,
        processId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetActiveRoomsForProcessDeprecatedResponse> {
        const req = new operations.GetActiveRoomsForProcessDeprecatedRequest({
            appId: appId,
            processId: processId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/rooms/v1/{appId}/list/{processId}/active",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetActiveRoomsForProcessDeprecatedSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetActiveRoomsForProcessDeprecatedResponse =
            new operations.GetActiveRoomsForProcessDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.roomWithoutAllocations = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.roomWithoutAllocations = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.RoomWithoutAllocations,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getConnectionInfoDeprecated(
        appId: string,
        roomId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetConnectionInfoDeprecatedResponse> {
        const req = new operations.GetConnectionInfoDeprecatedRequest({
            appId: appId,
            roomId: roomId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/rooms/v1/{appId}/connectioninfo/{roomId}",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetConnectionInfoDeprecatedResponse =
            new operations.GetConnectionInfoDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.connectionInfo = JSON.parse(decodedRes);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400 ||
                httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                httpRes?.status == 500 ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getInactiveRoomsForProcessDeprecated(
        security: operations.GetInactiveRoomsForProcessDeprecatedSecurity,
        appId: string,
        processId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetInactiveRoomsForProcessDeprecatedResponse> {
        const req = new operations.GetInactiveRoomsForProcessDeprecatedRequest({
            appId: appId,
            processId: processId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/rooms/v1/{appId}/list/{processId}/inactive",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetInactiveRoomsForProcessDeprecatedSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetInactiveRoomsForProcessDeprecatedResponse =
            new operations.GetInactiveRoomsForProcessDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.roomWithoutAllocations = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.roomWithoutAllocations = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.RoomWithoutAllocations,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getRoomInfoDeprecated(
        security: operations.GetRoomInfoDeprecatedSecurity,
        appId: string,
        roomId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.GetRoomInfoDeprecatedResponse> {
        const req = new operations.GetRoomInfoDeprecatedRequest({
            appId: appId,
            roomId: roomId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/rooms/v1/{appId}/info/{roomId}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetRoomInfoDeprecatedSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetRoomInfoDeprecatedResponse =
            new operations.GetRoomInfoDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.room = utils.objectToClass(JSON.parse(decodedRes), shared.Room);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async suspendRoomDeprecated(
        security: operations.SuspendRoomDeprecatedSecurity,
        appId: string,
        roomId: string,
        config?: AxiosRequestConfig
    ): Promise<operations.SuspendRoomDeprecatedResponse> {
        const req = new operations.SuspendRoomDeprecatedRequest({
            appId: appId,
            roomId: roomId,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/rooms/v1/{appId}/suspend/{roomId}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.SuspendRoomDeprecatedSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "*/*";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SuspendRoomDeprecatedResponse =
            new operations.SuspendRoomDeprecatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 204:
                break;
            case httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                httpRes?.status == 500 ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    httpRes?.data,
                    httpRes
                );
        }

        return res;
    }
}
