/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateBuildParams extends SpeakeasyBase {
    /**
     * Tag to associate an external version with a build. It is accessible via [`GetBuildInfo()`](https://hathora.dev/api#tag/BuildV1/operation/GetBuildInfo).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "buildTag" })
    buildTag?: string;
}
