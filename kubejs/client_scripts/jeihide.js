// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
    // Disabled Items Removal
    let toHide = [
        'enigmaticgraves:grave_finder',
        'ftbquests:barrier',
        'gildedarmor:gilded_enderite_helmet',
        'gildedarmor:gilded_enderite_chestplate',
        'gildedarmor:gilded_enderite_leggings',
        'gildedarmor:gilded_enderite_boots',
        'ftbquests:missing_item',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'ftbquests:loot_crate_opener',
        'ftbquests:screen_1',
        'ftbquests:screen_3',
        'ftbquests:screen_5',
        'ftbquests:screen_7',
        'ftbquests:custom_icon',
        'itemfilters:always_true',
        'itemfilters:always_false',
        'itemfilters:or',
        'itemfilters:and',
        'itemfilters:not',
        'itemfilters:xor',
        'itemfilters:tag',
        'itemfilters:mod',
        'itemfilters:item_group',
        'itemfilters:id_regex',
        'itemfilters:damage',
        'itemfilters:block',
        'itemfilters:max_count',
        'itemfilters:strong_nbt',
        'itemfilters:weak_nbt',
        'itemfilters:custom',
        'prefab:item_swift_blade_wood',
        'prefab:item_swift_blade_gold',
        'prefab:item_sickle_wood',
        'prefab:item_sickle_stone',
        'prefab:item_sickle_gold',
        'prefab:item_sickle_iron',
        'prefab:item_sickle_diamond',
        'prefab:item_sickle_netherite',
        'prefab:item_clutch_of_eggs',
        'prefab:block_boundary',
        'prefab:item_crate_of_beets',
        'prefab:item_bunch_of_beets',
        'prefab:item_bunch_of_carrots',
        'prefab:item_bunch_of_potatoes',
        'prefab:item_wooden_crate',
        'prefab:item_crate_of_potatoes',
        'prefab:item_crate_of_carrots',
        'prefab:item_swift_blade_netherite',
        'prefab:item_swift_blade_diamond',
        'prefab:item_swift_blade_steel',
        'prefab:item_swift_blade_obsidian',
        'prefab:item_swift_blade_osmium',
        'prefab:item_swift_blade_iron',
        'prefab:item_swift_blade_bronze',
        'prefab:item_swift_blade_stone',
        'prefab:item_swift_blade_copper',
        'quark:beetroot_crate',
        'quark:potato_crate',
        'quark:carrot_crate',
        'supplementaries:rope',
        'hexerei:milk_bottle',
        'delightful:animal_fat',
        'delightful:animal_oil_bottle',
        'pipez:fluid_pipe',
        'pipez:energy_pipe',
        'pipez:gas_pipe',
        'pipez:universal_pipe',
        'artifacts:flippers',
        'artifacts:golden_hook',
        'artifacts:feral_claws',
        'artifacts:helium_flamingo',
        'artifacts:everlasting_beef',
        'artifacts:eternal_steak',
        'artifacts:snorkel',
        'artifacts:umbrella',
        'quark:feeding_trough',
        'neapolitan:milk_bottle',
        'finsandtails:armored_gopjet_jetpack',
        'finsandtails:gopjet_jetpack',
        'prefab:item_carton_of_eggs',
        'sophisticatedstorage:feeding_upgrade',
        'sophisticatedstorage:advanced_feeding_upgrade',
        'toms_storage:ts.polymorphic_item_filter',
        'sophisticatedstorage:pump_upgrade',
        'sophisticatedstorage:advanced_pump_upgrade',
        'sophisticatedstorage:xp_pump_upgrade',
        'structure_gel:red_gel',
        'structure_gel:blue_gel',
        'structure_gel:green_gel',
        'structure_gel:cyan_gel',
        'structure_gel:orange_gel',
        'structure_gel:yellow_gel',
        'structure_gel:data_handler',
        'structure_gel:dynamic_spawner',
        'structure_gel:building_tool',
        'crittersandcompanions:diamond_dragonfly_armor',
        'crittersandcompanions:gold_dragonfly_armor',
        'crittersandcompanions:iron_dragonfly_armor',
        'sophisticatedstorage:jukebox_upgrade',
        'sophisticatedstorage:debug_tool',
        'delightful:cooked_venison_chops',
        'twilightforest:raw_venison',
        'twilightforest:cooked_venison',
        'twilightdelight:raw_venison_rib',
        'twilightdelight:cooked_venison_rib',
        'environmental:cherry_crate',
        'vinery:apple_crate',
        'environmental:cherries',
        'toms_storage:ts.open_crate',
        'sophisticatedstorage:shulker_box',
        'sophisticatedstorage:iron_shulker_box',
        'sophisticatedstorage:gold_shulker_box',
        'sophisticatedstorage:diamond_shulker_box',
        'sophisticatedstorage:netherite_shulker_box',
        'delightful:zinc_knife',
        'ends_delight:purpur_knife',
        'ends_delight:end_stone_knife',
        'ends_delight:dragon_egg_shell_knife',
        'farmersdelight:golden_knife',
		    'incubation:fried_egg',
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_boots',
        'aquaculture:neptunium_bow',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunes_bounty',
        'aquaculture:wooden_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:diamond_fillet_knife',
    ];
    
      for (const hide of toHide) {
        event.hide(hide);
    }
})