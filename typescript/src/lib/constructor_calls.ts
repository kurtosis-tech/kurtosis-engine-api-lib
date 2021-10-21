// // ====================================================================================================
// //                                    Kurtosis Context
// // ====================================================================================================

import {CreateEnclaveArgs, DestroyEnclaveArgs, StopEnclaveArgs} from "../kurtosis_engine_rpc_api_bindings/engine_service_pb";

export function newCreateEnclaveArgs(
        enclaveId: string,
        apiContainerImage: string,
        apiContainerLogLevel: string,
        isPartitioningEnabled: boolean,
        shouldPublishPorts: boolean): CreateEnclaveArgs {
    const result: CreateEnclaveArgs = new CreateEnclaveArgs();
    result.setEnclaveId(enclaveId);
    result.setApiContainerImage(apiContainerImage);
    result.setApiContainerLogLevel(apiContainerLogLevel);
    result.setIsPartitioningEnabled(isPartitioningEnabled);
    result.setShouldPublishAllPorts(shouldPublishPorts);

    return result;
}

export function newStopEnclaveArgs(enclaveId:string): DestroyEnclaveArgs {
    const result: StopEnclaveArgs = new StopEnclaveArgs();
    result.setEnclaveId(enclaveId);
    return result;
}

export function newDestroyEnclaveArgs(enclaveId:string): DestroyEnclaveArgs {
    const result: DestroyEnclaveArgs = new DestroyEnclaveArgs();
    result.setEnclaveId(enclaveId);
    return result;
}
