import { EntityMeshScalingMap, PlayerId } from "../../../type/index";
/**
 * Scale node of a player's mesh by 3d vector.
 * State from prior calls to this api is lost so if you want to have multiple nodes scaled, pass in all the scales at once.
 *
 * @param {PlayerId} playerId
 * @param {EntityMeshScalingMap} nodeScales
 * @returns {void}
 */
declare const scalePlayerMeshNodes: (playerId: PlayerId, nodeScales: EntityMeshScalingMap) => void;
export { scalePlayerMeshNodes };
/**
 * Scale node of a player's mesh by 3d vector.
 * State from prior calls to this api is lost so if you want to have multiple nodes scaled, pass in all the scales at once.
 *
 * @param {PlayerId} playerId
 * @param {EntityMeshScalingMap} nodeScales
 * @returns {void}
 *
 * scalePlayerMeshNodes(playerId, nodeScales);
 */
//# sourceMappingURL=scalePlayerMeshNodes.d.ts.map