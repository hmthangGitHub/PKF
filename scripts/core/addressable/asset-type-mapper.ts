export class AssetTypeMapper {
    static toCCType(name: string): typeof cc.Asset {
        switch (name) {
            case 'cc.Prefab':
                return cc.Prefab;
            case 'cc.AudioClip':
                return cc.AudioClip;
            case 'cc.SpriteFrame':
                return cc.SpriteFrame;
            case 'cc.SpriteAtlas':
                return cc.SpriteAtlas;
            case 'cc.Material':
                return cc.Material;
            case 'cc.PhysicsMaterial':
                return cc.PhysicsMaterial;
            case 'cc.Mesh':
                return cc.Mesh;
            case 'cc.LabelAtlas':
                return cc.LabelAtlas;
            case 'cc.AnimationClip':
                return cc.AnimationClip;
            case 'cc.TTFFont':
                return cc.TTFFont;
            case 'cc.BitmapFont':
                return cc.BitmapFont;
            case 'cc.Font':
                return cc.Font;
            case 'cc.EffectAsset':
                return cc.EffectAsset;
            case 'cc.TextAsset':
                return cc.TextAsset;
            case 'cc.JsonAsset':
                return cc.JsonAsset;
            case 'cc.ParticleAsset':
                return cc.ParticleAsset;
            case 'dragonBones.DragonBonesAsse':
                return dragonBones.DragonBonesAsset;
            case 'dragonBones.DragonBonesAtlasAsset':
                return dragonBones.DragonBonesAtlasAsset;
            case 'sp.SkeletonData':
                return sp.SkeletonData;

            default:
                return cc.Asset;
        }
    }
}
