namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 4 4 . . . . . . . . . . . 
. . . 4 4 . . . . . . . . . . . 
. 4 4 4 4 4 4 . . . . . . . . . 
. 4 . 4 4 . 4 . . . . . . . . . 
. . . 4 4 . . . . . . . . . . . 
. . 4 4 4 4 . . . . . . . . . . 
. . 4 . . 4 . . . . . . . . . . 
. . 4 . . 4 . . . . . . . . . . 
. . 4 . . 4 . . . . . . . . . . 
. . 4 . . 4 . . . . . . . . . . 
. . 4 . . 4 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`18001000040404040404040404040404040404040404040404040404040d0707070c040d07070707070707070707070707070c04180e0707070b040804040404040404040404040404040804040e0707070a0408040d090707070707090707070c040804040804040404040f070a08040404040408040404080408040408040d070c040404040804040404040804040408040804040804080d0a040404040804040408040804040408040804040e07100a0404040404080404040804080404040804080404080404040d070707070a04040408040e09070c0804080404080404040e07070707070907070a040808040808040804040f070c04080404040404080404040408080408080408040404040804080404040d071007070909100a040e0a040804040d070b040804040408040404040808040404080404080404040d10090a04040408040d0c040808040d0c08040d0a04040f0a0408040404040804080804080804080f0a04080404040404040f070707071007101007100a040f071904110405`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . . . . . . . . . 2 
. . . . . . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . 2 . 2 . . . . . . . . . . . . 2 . 2 
2 . 2 2 2 2 2 . . . . 2 2 2 2 2 . 2 2 2 . 2 . 2 
2 . 2 . . . 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 . 2 
2 . 2 . . . 2 2 2 2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 
2 . . . . 2 2 2 2 2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 
2 . 2 2 2 . . . . . . 2 2 2 . 2 . . . . . 2 . 2 
2 . 2 2 2 . . . . . . . . . . 2 . . 2 . . 2 . 2 
2 . . . 2 . 2 2 2 2 2 . 2 2 2 2 . . 2 . . 2 . 2 
2 2 2 . 2 . 2 2 2 . . . . . . . . . 2 . . 2 . 2 
2 . . . 2 . 2 2 2 . 2 2 2 2 . . 2 2 2 . 2 2 . 2 
2 2 . . . . 2 2 2 . 2 . . 2 . . 2 . . . 2 . . 2 
2 . . 2 . 2 2 2 2 . 2 . . 2 . . 2 . . . 2 . 2 2 
2 2 2 2 . . . . . . . . . . . . 2 . . . 2 . 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection1,sprites.dungeon.stairSouth,sprites.builtin.crowd9,sprites.builtin.field0,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedWest,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
info.startCountdown(20)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
