// package: engine_api
// file: engine_service.proto

import * as jspb from "google-protobuf";

export class GetEngineInfoResponse extends jspb.Message {
  getEngineApiVersion(): string;
  setEngineApiVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEngineInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEngineInfoResponse): GetEngineInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEngineInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEngineInfoResponse;
  static deserializeBinaryFromReader(message: GetEngineInfoResponse, reader: jspb.BinaryReader): GetEngineInfoResponse;
}

export namespace GetEngineInfoResponse {
  export type AsObject = {
    engineApiVersion: string,
  }
}

export class CreateEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getApiContainerImage(): string;
  setApiContainerImage(value: string): void;

  getApiContainerLogLevel(): string;
  setApiContainerLogLevel(value: string): void;

  getIsPartitioningEnabled(): boolean;
  setIsPartitioningEnabled(value: boolean): void;

  getShouldPublishAllPorts(): boolean;
  setShouldPublishAllPorts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnclaveArgs): CreateEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnclaveArgs;
  static deserializeBinaryFromReader(message: CreateEnclaveArgs, reader: jspb.BinaryReader): CreateEnclaveArgs;
}

export namespace CreateEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
    apiContainerImage: string,
    apiContainerLogLevel: string,
    isPartitioningEnabled: boolean,
    shouldPublishAllPorts: boolean,
  }
}

export class CreateEnclaveResponse extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): void;

  getNetworkCidr(): string;
  setNetworkCidr(value: string): void;

  getApiContainerId(): string;
  setApiContainerId(value: string): void;

  getApiContainerIpInsideNetwork(): string;
  setApiContainerIpInsideNetwork(value: string): void;

  getApiContainerHostIp(): string;
  setApiContainerHostIp(value: string): void;

  getApiContainerHostPort(): string;
  setApiContainerHostPort(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEnclaveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEnclaveResponse): CreateEnclaveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEnclaveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEnclaveResponse;
  static deserializeBinaryFromReader(message: CreateEnclaveResponse, reader: jspb.BinaryReader): CreateEnclaveResponse;
}

export namespace CreateEnclaveResponse {
  export type AsObject = {
    networkId: string,
    networkCidr: string,
    apiContainerId: string,
    apiContainerIpInsideNetwork: string,
    apiContainerHostIp: string,
    apiContainerHostPort: string,
  }
}

export class EnclaveAPIContainerInfo extends jspb.Message {
  getContainerId(): string;
  setContainerId(value: string): void;

  getIpInsideEnclave(): string;
  setIpInsideEnclave(value: string): void;

  getPortInsideEnclave(): number;
  setPortInsideEnclave(value: number): void;

  getIpOnHostMachine(): string;
  setIpOnHostMachine(value: string): void;

  getPortOnHostMachine(): number;
  setPortOnHostMachine(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnclaveAPIContainerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EnclaveAPIContainerInfo): EnclaveAPIContainerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnclaveAPIContainerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnclaveAPIContainerInfo;
  static deserializeBinaryFromReader(message: EnclaveAPIContainerInfo, reader: jspb.BinaryReader): EnclaveAPIContainerInfo;
}

export namespace EnclaveAPIContainerInfo {
  export type AsObject = {
    containerId: string,
    ipInsideEnclave: string,
    portInsideEnclave: number,
    ipOnHostMachine: string,
    portOnHostMachine: number,
  }
}

export class EnclaveInfo extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  getNetworkId(): string;
  setNetworkId(value: string): void;

  getNetworkCidr(): string;
  setNetworkCidr(value: string): void;

  getContainersStatus(): EnclaveContainersStatusMap[keyof EnclaveContainersStatusMap];
  setContainersStatus(value: EnclaveContainersStatusMap[keyof EnclaveContainersStatusMap]): void;

  getApiContainerStatus(): EnclaveAPIContainerStatusMap[keyof EnclaveAPIContainerStatusMap];
  setApiContainerStatus(value: EnclaveAPIContainerStatusMap[keyof EnclaveAPIContainerStatusMap]): void;

  hasApiContainerInfo(): boolean;
  clearApiContainerInfo(): void;
  getApiContainerInfo(): EnclaveAPIContainerInfo | undefined;
  setApiContainerInfo(value?: EnclaveAPIContainerInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnclaveInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EnclaveInfo): EnclaveInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnclaveInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnclaveInfo;
  static deserializeBinaryFromReader(message: EnclaveInfo, reader: jspb.BinaryReader): EnclaveInfo;
}

export namespace EnclaveInfo {
  export type AsObject = {
    enclaveId: string,
    networkId: string,
    networkCidr: string,
    containersStatus: EnclaveContainersStatusMap[keyof EnclaveContainersStatusMap],
    apiContainerStatus: EnclaveAPIContainerStatusMap[keyof EnclaveAPIContainerStatusMap],
    apiContainerInfo?: EnclaveAPIContainerInfo.AsObject,
  }
}

export class GetEnclavesResponse extends jspb.Message {
  getEnclaveInfoMap(): jspb.Map<string, EnclaveInfo>;
  clearEnclaveInfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEnclavesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEnclavesResponse): GetEnclavesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEnclavesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEnclavesResponse;
  static deserializeBinaryFromReader(message: GetEnclavesResponse, reader: jspb.BinaryReader): GetEnclavesResponse;
}

export namespace GetEnclavesResponse {
  export type AsObject = {
    enclaveInfoMap: Array<[string, EnclaveInfo.AsObject]>,
  }
}

export class StopEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: StopEnclaveArgs): StopEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopEnclaveArgs;
  static deserializeBinaryFromReader(message: StopEnclaveArgs, reader: jspb.BinaryReader): StopEnclaveArgs;
}

export namespace StopEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export class DestroyEnclaveArgs extends jspb.Message {
  getEnclaveId(): string;
  setEnclaveId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyEnclaveArgs.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyEnclaveArgs): DestroyEnclaveArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyEnclaveArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyEnclaveArgs;
  static deserializeBinaryFromReader(message: DestroyEnclaveArgs, reader: jspb.BinaryReader): DestroyEnclaveArgs;
}

export namespace DestroyEnclaveArgs {
  export type AsObject = {
    enclaveId: string,
  }
}

export interface EnclaveContainersStatusMap {
  ENCLAVECONTAINERSSTATUS_EMPTY: 0;
  ENCLAVECONTAINERSSTATUS_RUNNING: 1;
  ENCLAVECONTAINERSSTATUS_STOPPED: 2;
}

export const EnclaveContainersStatus: EnclaveContainersStatusMap;

export interface EnclaveAPIContainerStatusMap {
  ENCLAVEAPICONTAINERSTATUS_NONEXISTENT: 0;
  ENCLAVEAPICONTAINERSTATUS_RUNNING: 1;
  ENCLAVEAPICONTAINERSTATUS_STOPPED: 2;
}

export const EnclaveAPIContainerStatus: EnclaveAPIContainerStatusMap;

