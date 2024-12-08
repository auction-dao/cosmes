// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/oracle/v1beta1/proposal.proto (package injective.oracle.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BandIBCParams, BandOracleRequest } from "./oracle_pb.js";

/**
 * @generated from message injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal
 */
export class GrantBandOraclePrivilegeProposal extends Message<GrantBandOraclePrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated string relayers = 3;
   */
  relayers: string[] = [];

  constructor(data?: PartialMessage<GrantBandOraclePrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantBandOraclePrivilegeProposal {
    return new GrantBandOraclePrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantBandOraclePrivilegeProposal {
    return new GrantBandOraclePrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantBandOraclePrivilegeProposal {
    return new GrantBandOraclePrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: GrantBandOraclePrivilegeProposal | PlainMessage<GrantBandOraclePrivilegeProposal> | undefined, b: GrantBandOraclePrivilegeProposal | PlainMessage<GrantBandOraclePrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(GrantBandOraclePrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal
 */
export class RevokeBandOraclePrivilegeProposal extends Message<RevokeBandOraclePrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated string relayers = 3;
   */
  relayers: string[] = [];

  constructor(data?: PartialMessage<RevokeBandOraclePrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeBandOraclePrivilegeProposal {
    return new RevokeBandOraclePrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeBandOraclePrivilegeProposal {
    return new RevokeBandOraclePrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeBandOraclePrivilegeProposal {
    return new RevokeBandOraclePrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: RevokeBandOraclePrivilegeProposal | PlainMessage<RevokeBandOraclePrivilegeProposal> | undefined, b: RevokeBandOraclePrivilegeProposal | PlainMessage<RevokeBandOraclePrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(RevokeBandOraclePrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal
 */
export class GrantPriceFeederPrivilegeProposal extends Message<GrantPriceFeederPrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: string base = 3;
   */
  base = "";

  /**
   * @generated from field: string quote = 4;
   */
  quote = "";

  /**
   * @generated from field: repeated string relayers = 5;
   */
  relayers: string[] = [];

  constructor(data?: PartialMessage<GrantPriceFeederPrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantPriceFeederPrivilegeProposal {
    return new GrantPriceFeederPrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantPriceFeederPrivilegeProposal {
    return new GrantPriceFeederPrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantPriceFeederPrivilegeProposal {
    return new GrantPriceFeederPrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: GrantPriceFeederPrivilegeProposal | PlainMessage<GrantPriceFeederPrivilegeProposal> | undefined, b: GrantPriceFeederPrivilegeProposal | PlainMessage<GrantPriceFeederPrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(GrantPriceFeederPrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.GrantProviderPrivilegeProposal
 */
export class GrantProviderPrivilegeProposal extends Message<GrantProviderPrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: string provider = 3;
   */
  provider = "";

  /**
   * @generated from field: repeated string relayers = 4;
   */
  relayers: string[] = [];

  constructor(data?: PartialMessage<GrantProviderPrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantProviderPrivilegeProposal {
    return new GrantProviderPrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantProviderPrivilegeProposal {
    return new GrantProviderPrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantProviderPrivilegeProposal {
    return new GrantProviderPrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: GrantProviderPrivilegeProposal | PlainMessage<GrantProviderPrivilegeProposal> | undefined, b: GrantProviderPrivilegeProposal | PlainMessage<GrantProviderPrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(GrantProviderPrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.RevokeProviderPrivilegeProposal
 */
export class RevokeProviderPrivilegeProposal extends Message<RevokeProviderPrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: string provider = 3;
   */
  provider = "";

  /**
   * @generated from field: repeated string relayers = 5;
   */
  relayers: string[] = [];

  constructor(data?: PartialMessage<RevokeProviderPrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeProviderPrivilegeProposal {
    return new RevokeProviderPrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeProviderPrivilegeProposal {
    return new RevokeProviderPrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeProviderPrivilegeProposal {
    return new RevokeProviderPrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: RevokeProviderPrivilegeProposal | PlainMessage<RevokeProviderPrivilegeProposal> | undefined, b: RevokeProviderPrivilegeProposal | PlainMessage<RevokeProviderPrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(RevokeProviderPrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal
 */
export class RevokePriceFeederPrivilegeProposal extends Message<RevokePriceFeederPrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: string base = 3;
   */
  base = "";

  /**
   * @generated from field: string quote = 4;
   */
  quote = "";

  /**
   * @generated from field: repeated string relayers = 5;
   */
  relayers: string[] = [];

  constructor(data?: PartialMessage<RevokePriceFeederPrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokePriceFeederPrivilegeProposal {
    return new RevokePriceFeederPrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokePriceFeederPrivilegeProposal {
    return new RevokePriceFeederPrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokePriceFeederPrivilegeProposal {
    return new RevokePriceFeederPrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: RevokePriceFeederPrivilegeProposal | PlainMessage<RevokePriceFeederPrivilegeProposal> | undefined, b: RevokePriceFeederPrivilegeProposal | PlainMessage<RevokePriceFeederPrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(RevokePriceFeederPrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal
 */
export class AuthorizeBandOracleRequestProposal extends Message<AuthorizeBandOracleRequestProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: injective.oracle.v1beta1.BandOracleRequest request = 3;
   */
  request?: BandOracleRequest;

  constructor(data?: PartialMessage<AuthorizeBandOracleRequestProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "request", kind: "message", T: BandOracleRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizeBandOracleRequestProposal {
    return new AuthorizeBandOracleRequestProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizeBandOracleRequestProposal {
    return new AuthorizeBandOracleRequestProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizeBandOracleRequestProposal {
    return new AuthorizeBandOracleRequestProposal().fromJsonString(jsonString, options);
  }

  static equals(a: AuthorizeBandOracleRequestProposal | PlainMessage<AuthorizeBandOracleRequestProposal> | undefined, b: AuthorizeBandOracleRequestProposal | PlainMessage<AuthorizeBandOracleRequestProposal> | undefined): boolean {
    return proto3.util.equals(AuthorizeBandOracleRequestProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.UpdateBandOracleRequestProposal
 */
export class UpdateBandOracleRequestProposal extends Message<UpdateBandOracleRequestProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated uint64 delete_request_ids = 3;
   */
  deleteRequestIds: bigint[] = [];

  /**
   * @generated from field: injective.oracle.v1beta1.BandOracleRequest update_oracle_request = 4;
   */
  updateOracleRequest?: BandOracleRequest;

  constructor(data?: PartialMessage<UpdateBandOracleRequestProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "delete_request_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 4, name: "update_oracle_request", kind: "message", T: BandOracleRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBandOracleRequestProposal {
    return new UpdateBandOracleRequestProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBandOracleRequestProposal {
    return new UpdateBandOracleRequestProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBandOracleRequestProposal {
    return new UpdateBandOracleRequestProposal().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateBandOracleRequestProposal | PlainMessage<UpdateBandOracleRequestProposal> | undefined, b: UpdateBandOracleRequestProposal | PlainMessage<UpdateBandOracleRequestProposal> | undefined): boolean {
    return proto3.util.equals(UpdateBandOracleRequestProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.EnableBandIBCProposal
 */
export class EnableBandIBCProposal extends Message<EnableBandIBCProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: injective.oracle.v1beta1.BandIBCParams band_ibc_params = 3;
   */
  bandIbcParams?: BandIBCParams;

  constructor(data?: PartialMessage<EnableBandIBCProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.EnableBandIBCProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "band_ibc_params", kind: "message", T: BandIBCParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableBandIBCProposal {
    return new EnableBandIBCProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableBandIBCProposal {
    return new EnableBandIBCProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableBandIBCProposal {
    return new EnableBandIBCProposal().fromJsonString(jsonString, options);
  }

  static equals(a: EnableBandIBCProposal | PlainMessage<EnableBandIBCProposal> | undefined, b: EnableBandIBCProposal | PlainMessage<EnableBandIBCProposal> | undefined): boolean {
    return proto3.util.equals(EnableBandIBCProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.GrantStorkPublisherPrivilegeProposal
 */
export class GrantStorkPublisherPrivilegeProposal extends Message<GrantStorkPublisherPrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated string stork_publishers = 3;
   */
  storkPublishers: string[] = [];

  constructor(data?: PartialMessage<GrantStorkPublisherPrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.GrantStorkPublisherPrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "stork_publishers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GrantStorkPublisherPrivilegeProposal {
    return new GrantStorkPublisherPrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GrantStorkPublisherPrivilegeProposal {
    return new GrantStorkPublisherPrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GrantStorkPublisherPrivilegeProposal {
    return new GrantStorkPublisherPrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: GrantStorkPublisherPrivilegeProposal | PlainMessage<GrantStorkPublisherPrivilegeProposal> | undefined, b: GrantStorkPublisherPrivilegeProposal | PlainMessage<GrantStorkPublisherPrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(GrantStorkPublisherPrivilegeProposal, a, b);
  }
}

/**
 * @generated from message injective.oracle.v1beta1.RevokeStorkPublisherPrivilegeProposal
 */
export class RevokeStorkPublisherPrivilegeProposal extends Message<RevokeStorkPublisherPrivilegeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated string stork_publishers = 3;
   */
  storkPublishers: string[] = [];

  constructor(data?: PartialMessage<RevokeStorkPublisherPrivilegeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.oracle.v1beta1.RevokeStorkPublisherPrivilegeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "stork_publishers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeStorkPublisherPrivilegeProposal {
    return new RevokeStorkPublisherPrivilegeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeStorkPublisherPrivilegeProposal {
    return new RevokeStorkPublisherPrivilegeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeStorkPublisherPrivilegeProposal {
    return new RevokeStorkPublisherPrivilegeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: RevokeStorkPublisherPrivilegeProposal | PlainMessage<RevokeStorkPublisherPrivilegeProposal> | undefined, b: RevokeStorkPublisherPrivilegeProposal | PlainMessage<RevokeStorkPublisherPrivilegeProposal> | undefined): boolean {
    return proto3.util.equals(RevokeStorkPublisherPrivilegeProposal, a, b);
  }
}

