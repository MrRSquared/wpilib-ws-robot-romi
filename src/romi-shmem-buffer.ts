// AUTOGENERATED FILE. DO NOT MODIFY.
// Generated via `npm run gen-shmem`

export enum ShmemDataType {
    BOOL,
    UINT8_T,
    INT8_T,
    UINT16_T,
    INT16_T,
}

export default {
    heartbeat: { offset: 0, type: ShmemDataType.BOOL},
    builtinConfig: { offset: 1, type: ShmemDataType.UINT8_T},
    builtinDioValues: { offset: 2, type: ShmemDataType.BOOL, arraySize: 4},
    dio8Input: { offset: 6, type: ShmemDataType.BOOL},
    dio8Value: { offset: 7, type: ShmemDataType.BOOL},
    analog: { offset: 8, type: ShmemDataType.UINT16_T, arraySize: 2},
    pwm: { offset: 12, type: ShmemDataType.INT16_T, arraySize: 4},
    batteryMillivolts: { offset: 20, type: ShmemDataType.UINT16_T},
    resetLeftEncoder: { offset: 22, type: ShmemDataType.BOOL},
    resetRightEncoder: { offset: 23, type: ShmemDataType.BOOL},
    leftEncoder: { offset: 24, type: ShmemDataType.INT16_T},
    rightEncoder: { offset: 26, type: ShmemDataType.INT16_T},
};
