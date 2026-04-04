import { PlayerId } from "@type";
/**
 * RGBA array [r, g, b, a] for camera screen tint effect. Values fall between 0 and 1.
 * @type {[number, number, number, number]}
 */
type ValueType = [number, number, number, number];
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cameraTint"} option
     * @param {[number, number, number, number]} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "cameraTint", value: [number, number, number, number]): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cameraTint"} option
     * @returns {[number, number, number, number]}
     */
    getClientOption(playerId: PlayerId, option: "cameraTint"): [number, number, number, number];
}
interface SetClientOptionToDefault {
    /**
     * set cameraTint option to default
     * cameraTint default is `null`
     *
     * option document:
     * RGBA array [r, g, b, a] for camera screen tint effect. Values fall between 0 and 1.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cameraTint"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "cameraTint"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "cameraTint";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=cameraTint.d.ts.map