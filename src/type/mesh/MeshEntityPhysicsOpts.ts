import { MeshEntityVehicleOpts } from "@type";

export type MeshEntityPhysicsOpts = {
  doPhysics: boolean;
  onCollideTerrain?: () => void; // Unsupported for custom code
  collidesEntities?: boolean;
  collideBits?: number; // bitmask category of this entity
  collideMask?: number; // bitmask category of entities this entity collides with
  heightExpandAmt?: number; // expand hitbox height by this amount
  widthExpandAmt?: number; // expand hitbox width by this amount
  vehicleOpts?: MeshEntityVehicleOpts; // Unsupported for custom code
};
