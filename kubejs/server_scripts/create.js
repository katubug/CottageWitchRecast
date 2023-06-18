ServerEvents.recipes(e => {
    e.recipes.create.compacting('brewinandchewin:unripe_flaxen_cheese_wheel', [Fluid.of('minecraft:milk', 1000), 'minecraft:brown_mushroom', 'minecraft:brown_mushroom', 'minecraft:sugar']).heated()

    e.recipes.create.compacting('brewinandchewin:unripe_scarlet_cheese_wheel', [Fluid.of('minecraft:milk', 1000), 'minecraft:crimson_fungus', 'minecraft:crimson_fungus', 'minecraft:sugar']).heated()

    e.recipes.create.haunting('brewinandchewin:flaxen_cheese_wheel', 'brewinandchewin:unripe_flaxen_cheese_wheel')

    e.recipes.create.haunting('brewinandchewin:scarlet_cheese_wheel', 'brewinandchewin:unripe_scarlet_cheese_wheel')

  })