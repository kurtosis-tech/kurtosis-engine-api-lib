// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var engine_service_pb = require('./engine_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_engine_api_CreateEnclaveArgs(arg) {
  if (!(arg instanceof engine_service_pb.CreateEnclaveArgs)) {
    throw new Error('Expected argument of type engine_api.CreateEnclaveArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_CreateEnclaveArgs(buffer_arg) {
  return engine_service_pb.CreateEnclaveArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_CreateEnclaveResponse(arg) {
  if (!(arg instanceof engine_service_pb.CreateEnclaveResponse)) {
    throw new Error('Expected argument of type engine_api.CreateEnclaveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_CreateEnclaveResponse(buffer_arg) {
  return engine_service_pb.CreateEnclaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_DestroyEnclaveArgs(arg) {
  if (!(arg instanceof engine_service_pb.DestroyEnclaveArgs)) {
    throw new Error('Expected argument of type engine_api.DestroyEnclaveArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_DestroyEnclaveArgs(buffer_arg) {
  return engine_service_pb.DestroyEnclaveArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_ExecCommandArgs(arg) {
  if (!(arg instanceof engine_service_pb.ExecCommandArgs)) {
    throw new Error('Expected argument of type engine_api.ExecCommandArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_ExecCommandArgs(buffer_arg) {
  return engine_service_pb.ExecCommandArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_ExecCommandResponse(arg) {
  if (!(arg instanceof engine_service_pb.ExecCommandResponse)) {
    throw new Error('Expected argument of type engine_api.ExecCommandResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_ExecCommandResponse(buffer_arg) {
  return engine_service_pb.ExecCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_ExecuteBulkCommandsArgs(arg) {
  if (!(arg instanceof engine_service_pb.ExecuteBulkCommandsArgs)) {
    throw new Error('Expected argument of type engine_api.ExecuteBulkCommandsArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_ExecuteBulkCommandsArgs(buffer_arg) {
  return engine_service_pb.ExecuteBulkCommandsArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_ExecuteModuleArgs(arg) {
  if (!(arg instanceof engine_service_pb.ExecuteModuleArgs)) {
    throw new Error('Expected argument of type engine_api.ExecuteModuleArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_ExecuteModuleArgs(buffer_arg) {
  return engine_service_pb.ExecuteModuleArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_ExecuteModuleResponse(arg) {
  if (!(arg instanceof engine_service_pb.ExecuteModuleResponse)) {
    throw new Error('Expected argument of type engine_api.ExecuteModuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_ExecuteModuleResponse(buffer_arg) {
  return engine_service_pb.ExecuteModuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_FinishExternalContainerRegistrationArgs(arg) {
  if (!(arg instanceof engine_service_pb.FinishExternalContainerRegistrationArgs)) {
    throw new Error('Expected argument of type engine_api.FinishExternalContainerRegistrationArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_FinishExternalContainerRegistrationArgs(buffer_arg) {
  return engine_service_pb.FinishExternalContainerRegistrationArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetEnclavesResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetEnclavesResponse)) {
    throw new Error('Expected argument of type engine_api.GetEnclavesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetEnclavesResponse(buffer_arg) {
  return engine_service_pb.GetEnclavesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetEngineInfoResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetEngineInfoResponse)) {
    throw new Error('Expected argument of type engine_api.GetEngineInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetEngineInfoResponse(buffer_arg) {
  return engine_service_pb.GetEngineInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetModuleInfoArgs(arg) {
  if (!(arg instanceof engine_service_pb.GetModuleInfoArgs)) {
    throw new Error('Expected argument of type engine_api.GetModuleInfoArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetModuleInfoArgs(buffer_arg) {
  return engine_service_pb.GetModuleInfoArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetModuleInfoResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetModuleInfoResponse)) {
    throw new Error('Expected argument of type engine_api.GetModuleInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetModuleInfoResponse(buffer_arg) {
  return engine_service_pb.GetModuleInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetModulesArgs(arg) {
  if (!(arg instanceof engine_service_pb.GetModulesArgs)) {
    throw new Error('Expected argument of type engine_api.GetModulesArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetModulesArgs(buffer_arg) {
  return engine_service_pb.GetModulesArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetModulesResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetModulesResponse)) {
    throw new Error('Expected argument of type engine_api.GetModulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetModulesResponse(buffer_arg) {
  return engine_service_pb.GetModulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetServiceInfoArgs(arg) {
  if (!(arg instanceof engine_service_pb.GetServiceInfoArgs)) {
    throw new Error('Expected argument of type engine_api.GetServiceInfoArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetServiceInfoArgs(buffer_arg) {
  return engine_service_pb.GetServiceInfoArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetServiceInfoResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetServiceInfoResponse)) {
    throw new Error('Expected argument of type engine_api.GetServiceInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetServiceInfoResponse(buffer_arg) {
  return engine_service_pb.GetServiceInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetServicesArgs(arg) {
  if (!(arg instanceof engine_service_pb.GetServicesArgs)) {
    throw new Error('Expected argument of type engine_api.GetServicesArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetServicesArgs(buffer_arg) {
  return engine_service_pb.GetServicesArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_GetServicesResponse(arg) {
  if (!(arg instanceof engine_service_pb.GetServicesResponse)) {
    throw new Error('Expected argument of type engine_api.GetServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_GetServicesResponse(buffer_arg) {
  return engine_service_pb.GetServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_LoadModuleArgs(arg) {
  if (!(arg instanceof engine_service_pb.LoadModuleArgs)) {
    throw new Error('Expected argument of type engine_api.LoadModuleArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_LoadModuleArgs(buffer_arg) {
  return engine_service_pb.LoadModuleArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_RegisterFilesArtifactsArgs(arg) {
  if (!(arg instanceof engine_service_pb.RegisterFilesArtifactsArgs)) {
    throw new Error('Expected argument of type engine_api.RegisterFilesArtifactsArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_RegisterFilesArtifactsArgs(buffer_arg) {
  return engine_service_pb.RegisterFilesArtifactsArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_RegisterServiceArgs(arg) {
  if (!(arg instanceof engine_service_pb.RegisterServiceArgs)) {
    throw new Error('Expected argument of type engine_api.RegisterServiceArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_RegisterServiceArgs(buffer_arg) {
  return engine_service_pb.RegisterServiceArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_RegisterServiceResponse(arg) {
  if (!(arg instanceof engine_service_pb.RegisterServiceResponse)) {
    throw new Error('Expected argument of type engine_api.RegisterServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_RegisterServiceResponse(buffer_arg) {
  return engine_service_pb.RegisterServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_RemoveServiceArgs(arg) {
  if (!(arg instanceof engine_service_pb.RemoveServiceArgs)) {
    throw new Error('Expected argument of type engine_api.RemoveServiceArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_RemoveServiceArgs(buffer_arg) {
  return engine_service_pb.RemoveServiceArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_RepartitionArgs(arg) {
  if (!(arg instanceof engine_service_pb.RepartitionArgs)) {
    throw new Error('Expected argument of type engine_api.RepartitionArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_RepartitionArgs(buffer_arg) {
  return engine_service_pb.RepartitionArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_StartExternalContainerRegistrationResponse(arg) {
  if (!(arg instanceof engine_service_pb.StartExternalContainerRegistrationResponse)) {
    throw new Error('Expected argument of type engine_api.StartExternalContainerRegistrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_StartExternalContainerRegistrationResponse(buffer_arg) {
  return engine_service_pb.StartExternalContainerRegistrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_StartServiceArgs(arg) {
  if (!(arg instanceof engine_service_pb.StartServiceArgs)) {
    throw new Error('Expected argument of type engine_api.StartServiceArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_StartServiceArgs(buffer_arg) {
  return engine_service_pb.StartServiceArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_StartServiceResponse(arg) {
  if (!(arg instanceof engine_service_pb.StartServiceResponse)) {
    throw new Error('Expected argument of type engine_api.StartServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_StartServiceResponse(buffer_arg) {
  return engine_service_pb.StartServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_StopEnclaveArgs(arg) {
  if (!(arg instanceof engine_service_pb.StopEnclaveArgs)) {
    throw new Error('Expected argument of type engine_api.StopEnclaveArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_StopEnclaveArgs(buffer_arg) {
  return engine_service_pb.StopEnclaveArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_UnloadModuleArgs(arg) {
  if (!(arg instanceof engine_service_pb.UnloadModuleArgs)) {
    throw new Error('Expected argument of type engine_api.UnloadModuleArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_UnloadModuleArgs(buffer_arg) {
  return engine_service_pb.UnloadModuleArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_WaitForHttpGetEndpointAvailabilityArgs(arg) {
  if (!(arg instanceof engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs)) {
    throw new Error('Expected argument of type engine_api.WaitForHttpGetEndpointAvailabilityArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_WaitForHttpGetEndpointAvailabilityArgs(buffer_arg) {
  return engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_engine_api_WaitForHttpPostEndpointAvailabilityArgs(arg) {
  if (!(arg instanceof engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs)) {
    throw new Error('Expected argument of type engine_api.WaitForHttpPostEndpointAvailabilityArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_engine_api_WaitForHttpPostEndpointAvailabilityArgs(buffer_arg) {
  return engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var EngineServiceService = exports.EngineServiceService = {
  // Endpoint for getting information about the engine, which is also what we use to verify that the engine has become available
getEngineInfo: {
    path: '/engine_api.EngineService/GetEngineInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: engine_service_pb.GetEngineInfoResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_engine_api_GetEngineInfoResponse,
    responseDeserialize: deserialize_engine_api_GetEngineInfoResponse,
  },
  // ==============================================================================================
//                                   Enclave Management
// ==============================================================================================
// Creates a new Kurtosis Enclave
createEnclave: {
    path: '/engine_api.EngineService/CreateEnclave',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.CreateEnclaveArgs,
    responseType: engine_service_pb.CreateEnclaveResponse,
    requestSerialize: serialize_engine_api_CreateEnclaveArgs,
    requestDeserialize: deserialize_engine_api_CreateEnclaveArgs,
    responseSerialize: serialize_engine_api_CreateEnclaveResponse,
    responseDeserialize: deserialize_engine_api_CreateEnclaveResponse,
  },
  // Returns information about the existing enclaves
getEnclaves: {
    path: '/engine_api.EngineService/GetEnclaves',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: engine_service_pb.GetEnclavesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_engine_api_GetEnclavesResponse,
    responseDeserialize: deserialize_engine_api_GetEnclavesResponse,
  },
  // Stops all containers in an enclave
stopEnclave: {
    path: '/engine_api.EngineService/StopEnclave',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.StopEnclaveArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_StopEnclaveArgs,
    requestDeserialize: deserialize_engine_api_StopEnclaveArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Destroys an enclave, removing all artifacts associated with it
destroyEnclave: {
    path: '/engine_api.EngineService/DestroyEnclave',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.DestroyEnclaveArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_DestroyEnclaveArgs,
    requestDeserialize: deserialize_engine_api_DestroyEnclaveArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ==============================================================================================
//                                    Enclave-Internal
// ==============================================================================================
// Starts the registration of an external container (started by a third-party source, not the API container)
startExternalContainerRegistration: {
    path: '/engine_api.EngineService/StartExternalContainerRegistration',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: engine_service_pb.StartExternalContainerRegistrationResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_engine_api_StartExternalContainerRegistrationResponse,
    responseDeserialize: deserialize_engine_api_StartExternalContainerRegistrationResponse,
  },
  // Finishes the registration of an container (started by a third-party source, not the API contianer) that was started previously
// NOTE: It's important not to forget to finish this registration, else the external container won't be recognized by the API container!
finishExternalContainerRegistration: {
    path: '/engine_api.EngineService/FinishExternalContainerRegistration',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.FinishExternalContainerRegistrationArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_FinishExternalContainerRegistrationArgs,
    requestDeserialize: deserialize_engine_api_FinishExternalContainerRegistrationArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Starts a module container in the enclave
loadModule: {
    path: '/engine_api.EngineService/LoadModule',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.LoadModuleArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_LoadModuleArgs,
    requestDeserialize: deserialize_engine_api_LoadModuleArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Stop and remove a module from the enclave
unloadModule: {
    path: '/engine_api.EngineService/UnloadModule',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.UnloadModuleArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_UnloadModuleArgs,
    requestDeserialize: deserialize_engine_api_UnloadModuleArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Executes an executable module on the user's behalf
executeModule: {
    path: '/engine_api.EngineService/ExecuteModule',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.ExecuteModuleArgs,
    responseType: engine_service_pb.ExecuteModuleResponse,
    requestSerialize: serialize_engine_api_ExecuteModuleArgs,
    requestDeserialize: deserialize_engine_api_ExecuteModuleArgs,
    responseSerialize: serialize_engine_api_ExecuteModuleResponse,
    responseDeserialize: deserialize_engine_api_ExecuteModuleResponse,
  },
  // Gets information about a loaded module
getModuleInfo: {
    path: '/engine_api.EngineService/GetModuleInfo',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.GetModuleInfoArgs,
    responseType: engine_service_pb.GetModuleInfoResponse,
    requestSerialize: serialize_engine_api_GetModuleInfoArgs,
    requestDeserialize: deserialize_engine_api_GetModuleInfoArgs,
    responseSerialize: serialize_engine_api_GetModuleInfoResponse,
    responseDeserialize: deserialize_engine_api_GetModuleInfoResponse,
  },
  // Tells the API container that the client has files artifacts from the web that it would like the API container to know about
// The API container will download these artifacts locally, so they're available when launching services
registerFilesArtifacts: {
    path: '/engine_api.EngineService/RegisterFilesArtifacts',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.RegisterFilesArtifactsArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_RegisterFilesArtifactsArgs,
    requestDeserialize: deserialize_engine_api_RegisterFilesArtifactsArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Registers a service with the API container but doesn't start the container for it
registerService: {
    path: '/engine_api.EngineService/RegisterService',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.RegisterServiceArgs,
    responseType: engine_service_pb.RegisterServiceResponse,
    requestSerialize: serialize_engine_api_RegisterServiceArgs,
    requestDeserialize: deserialize_engine_api_RegisterServiceArgs,
    responseSerialize: serialize_engine_api_RegisterServiceResponse,
    responseDeserialize: deserialize_engine_api_RegisterServiceResponse,
  },
  // Starts a previously-registered service by creating a Docker container for it
startService: {
    path: '/engine_api.EngineService/StartService',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.StartServiceArgs,
    responseType: engine_service_pb.StartServiceResponse,
    requestSerialize: serialize_engine_api_StartServiceArgs,
    requestDeserialize: deserialize_engine_api_StartServiceArgs,
    responseSerialize: serialize_engine_api_StartServiceResponse,
    responseDeserialize: deserialize_engine_api_StartServiceResponse,
  },
  // Returns relevant information about the service
getServiceInfo: {
    path: '/engine_api.EngineService/GetServiceInfo',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.GetServiceInfoArgs,
    responseType: engine_service_pb.GetServiceInfoResponse,
    requestSerialize: serialize_engine_api_GetServiceInfoArgs,
    requestDeserialize: deserialize_engine_api_GetServiceInfoArgs,
    responseSerialize: serialize_engine_api_GetServiceInfoResponse,
    responseDeserialize: deserialize_engine_api_GetServiceInfoResponse,
  },
  // Instructs the API container to remove the given service
removeService: {
    path: '/engine_api.EngineService/RemoveService',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.RemoveServiceArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_RemoveServiceArgs,
    requestDeserialize: deserialize_engine_api_RemoveServiceArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Instructs the API container to repartition the test network
repartition: {
    path: '/engine_api.EngineService/Repartition',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.RepartitionArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_RepartitionArgs,
    requestDeserialize: deserialize_engine_api_RepartitionArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Executes the given command inside a running container
execCommand: {
    path: '/engine_api.EngineService/ExecCommand',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.ExecCommandArgs,
    responseType: engine_service_pb.ExecCommandResponse,
    requestSerialize: serialize_engine_api_ExecCommandArgs,
    requestDeserialize: deserialize_engine_api_ExecCommandArgs,
    responseSerialize: serialize_engine_api_ExecCommandResponse,
    responseDeserialize: deserialize_engine_api_ExecCommandResponse,
  },
  // Block until the given HTTP endpoint returns available, calling it through a HTTP Get request
waitForHttpGetEndpointAvailability: {
    path: '/engine_api.EngineService/WaitForHttpGetEndpointAvailability',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.WaitForHttpGetEndpointAvailabilityArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_WaitForHttpGetEndpointAvailabilityArgs,
    requestDeserialize: deserialize_engine_api_WaitForHttpGetEndpointAvailabilityArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Block until the given HTTP endpoint returns available, calling it through a HTTP Post request
waitForHttpPostEndpointAvailability: {
    path: '/engine_api.EngineService/WaitForHttpPostEndpointAvailability',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.WaitForHttpPostEndpointAvailabilityArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_WaitForHttpPostEndpointAvailabilityArgs,
    requestDeserialize: deserialize_engine_api_WaitForHttpPostEndpointAvailabilityArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Executes multiple commands at once
executeBulkCommands: {
    path: '/engine_api.EngineService/ExecuteBulkCommands',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.ExecuteBulkCommandsArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_engine_api_ExecuteBulkCommandsArgs,
    requestDeserialize: deserialize_engine_api_ExecuteBulkCommandsArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the IDs of the current services in the test network
getServices: {
    path: '/engine_api.EngineService/GetServices',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.GetServicesArgs,
    responseType: engine_service_pb.GetServicesResponse,
    requestSerialize: serialize_engine_api_GetServicesArgs,
    requestDeserialize: deserialize_engine_api_GetServicesArgs,
    responseSerialize: serialize_engine_api_GetServicesResponse,
    responseDeserialize: deserialize_engine_api_GetServicesResponse,
  },
  // Returns the IDs of the Kurtosis modules that have been loaded into the enclave
getModules: {
    path: '/engine_api.EngineService/GetModules',
    requestStream: false,
    responseStream: false,
    requestType: engine_service_pb.GetModulesArgs,
    responseType: engine_service_pb.GetModulesResponse,
    requestSerialize: serialize_engine_api_GetModulesArgs,
    requestDeserialize: deserialize_engine_api_GetModulesArgs,
    responseSerialize: serialize_engine_api_GetModulesResponse,
    responseDeserialize: deserialize_engine_api_GetModulesResponse,
  },
};

exports.EngineServiceClient = grpc.makeGenericClientConstructor(EngineServiceService);
