const _SappItems = require("SappItems");
const _SER_SappLiquids = require("serpulo/SappLiquids")
const SappLiquids = require("SappLiquids")

const charged_cylinder = Vars.content.getByName(ContentType.item, "sapphirium-charged-cylinder");
const charged_ingot = Vars.content.getByName(ContentType.item, "sapphirium-charged-ingot");
const charged_lead = Vars.content.getByName(ContentType.item, "sapphirium-charged-lead");
const charged_stick = Vars.content.getByName(ContentType.item, "sapphirium-charged-stick");
const cryo_cube = Vars.content.getByName(ContentType.item, "sapphirium-cryo-cube");
const dense_alloy = Vars.content.getByName(ContentType.item, "sapphirium-dense-alloy");
const diamond = Vars.content.getByName(ContentType.item, "sapphirium-diamond");
const emerald = Vars.content.getByName(ContentType.item, "sapphirium-emerald");
const globium = Vars.content.getByName(ContentType.item, "sapphirium-globium");
const ice_cube = Vars.content.getByName(ContentType.item, "sapphirium-ice-cube");
const ledonite_cube = Vars.content.getByName(ContentType.item, "sapphirium-ledonite-cube");
const stone = Vars.content.getByName(ContentType.item, "sapphirium-stone");
const surge_stone = Vars.content.getByName(ContentType.item, "sapphirium-surge-stone");
const tinorium = Vars.content.getByName(ContentType.item, "sapphirium-tinorium");

const carved_alloy = Vars.content.getByName(ContentType.item, "sapphirium-carved-alloy");
const creostone = Vars.content.getByName(ContentType.item, "sapphirium-creostone");
const ruby = Vars.content.getByName(ContentType.item, "sapphirium-ruby");
const topaz = Vars.content.getByName(ContentType.item, "sapphirium-topaz");

const creotite = Vars.content.getByName(ContentType.liquid, "sapphirium-creotite");
const ledonite = Vars.content.getByName(ContentType.liquid, "sapphirium-ledonite-liquid");
const surge_mass = Vars.content.getByName(ContentType.liquid, "sapphirium-surge-mass");



const hydro = extend(Drill, "hydro-drill", {buildVisibility: BuildVisibility.shown});

const hydro_a = extend(Drill, "hydro-drill-a", {buildVisibility: BuildVisibility.shown});
const hydro_b = extend(Drill, "hydro-drill-b", {buildVisibility: BuildVisibility.shown});
const hydro_c = extend(Drill, "hydro-drill-c", {buildVisibility: BuildVisibility.shown});
const hydro_d = extend(Drill, "hydro-drill-d", {buildVisibility: BuildVisibility.shown});
const hydro_e = extend(Drill, "hydro-drill-e", {buildVisibility: BuildVisibility.shown});

hydro_a.itemCapacity = 120; hydro_a.drillTime = 90;  hydro_a.liquidBoostIntensity = 2.0;  hydro_a.liquidCapacity = 120;
hydro_b.itemCapacity = 140; hydro_b.drillTime = 75;  hydro_b.liquidBoostIntensity = 2.5;  hydro_b.liquidCapacity = 140;
hydro_c.itemCapacity = 160; hydro_c.drillTime = 60;  hydro_c.liquidBoostIntensity = 3.0;  hydro_c.liquidCapacity = 160;
hydro_d.itemCapacity = 180; hydro_d.drillTime = 45;  hydro_d.liquidBoostIntensity = 3.5;  hydro_d.liquidCapacity = 180;
hydro_e.itemCapacity = 200; hydro_e.drillTime = 30;  hydro_e.liquidBoostIntensity = 4.0;  hydro_e.liquidCapacity = 200;

hydro_a.rotateSpeed = 2; hydro_a.consumePower(1);
hydro_a.rotateSpeed = 3; hydro_b.consumePower(1.5);
hydro_a.rotateSpeed = 4; hydro_c.consumePower(2);
hydro_a.rotateSpeed = 5; hydro_d.consumePower(2.5);
hydro_a.rotateSpeed = 6; hydro_e.consumePower(3);



const D_CREOSTONE_A = extend(GenericCrafter, "d-creostone-a", {buildVisibility: BuildVisibility.shown});
const D_CREOSTONE_B = extend(GenericCrafter, "d-creostone-b", {buildVisibility: BuildVisibility.shown});
const D_CREOSTONE_C = extend(GenericCrafter, "d-creostone-c", {buildVisibility: BuildVisibility.shown});
const D_CREOSTONE_D = extend(GenericCrafter, "d-creostone-d", {buildVisibility: BuildVisibility.shown});
const D_CREOSTONE_E = extend(GenericCrafter, "d-creostone-e", {buildVisibility: BuildVisibility.shown});

D_CREOSTONE_A.size = 1;  D_CREOSTONE_A.localizedName = "T1 Creostone Drill";  D_CREOSTONE_A.outputItems = [new ItemStack(creostone, 1)];
D_CREOSTONE_B.size = 2;  D_CREOSTONE_B.localizedName = "T2 Creostone Drill";  D_CREOSTONE_B.outputItems = [new ItemStack(creostone, 1)];
D_CREOSTONE_C.size = 3;  D_CREOSTONE_C.localizedName = "T3 Creostone Drill";  D_CREOSTONE_C.outputItems = [new ItemStack(creostone, 2)];
D_CREOSTONE_D.size = 4;  D_CREOSTONE_D.localizedName = "T4 Creostone Drill";  D_CREOSTONE_D.outputItems = [new ItemStack(creostone, 2)];
D_CREOSTONE_E.size = 5;  D_CREOSTONE_E.localizedName = "T5 Creostone Drill";  D_CREOSTONE_E.outputItems = [new ItemStack(creostone, 3)];

D_CREOSTONE_A.requirements = ItemStack.with(Items.copper, 10,  Items.lead, 10);
D_CREOSTONE_B.requirements = ItemStack.with(Items.copper, 25,  Items.lead, 25,  creostone, 25);
D_CREOSTONE_C.requirements = ItemStack.with(Items.copper, 50,  Items.lead, 50,  creostone, 50);
D_CREOSTONE_D.requirements = ItemStack.with(Items.copper, 100,  Items.lead, 100,  creostone, 100);
D_CREOSTONE_E.requirements = ItemStack.with(Items.copper, 250,  Items.lead, 250,  Items.graphite, 250,  creostone, 250);

D_CREOSTONE_A.hasPower = false;
D_CREOSTONE_B.hasPower = false;
D_CREOSTONE_C.hasPower = true;
D_CREOSTONE_D.hasPower = true;
D_CREOSTONE_E.hasPower = true;

D_CREOSTONE_C.consumePower(1);
D_CREOSTONE_D.consumePower(2);
D_CREOSTONE_E.consumePower(3);

D_CREOSTONE_A.itemCapacity = 20;  D_CREOSTONE_A.craftTime = 60;  D_CREOSTONE_A.category = Category.production;
D_CREOSTONE_B.itemCapacity = 40;  D_CREOSTONE_B.craftTime = 45;  D_CREOSTONE_B.category = Category.production;
D_CREOSTONE_C.itemCapacity = 60;  D_CREOSTONE_C.craftTime = 30;  D_CREOSTONE_C.category = Category.production;
D_CREOSTONE_D.itemCapacity = 80;  D_CREOSTONE_D.craftTime = 20;  D_CREOSTONE_D.category = Category.production;
D_CREOSTONE_E.itemCapacity = 100; D_CREOSTONE_E.craftTime = 10;  D_CREOSTONE_E.category = Category.production;



const D_DIAMOND_A = extend(GenericCrafter, "d-diamond-a", {buildVisibility: BuildVisibility.shown});
const D_DIAMOND_B = extend(GenericCrafter, "d-diamond-b", {buildVisibility: BuildVisibility.shown});
const D_DIAMOND_C = extend(GenericCrafter, "d-diamond-c", {buildVisibility: BuildVisibility.shown});
const D_DIAMOND_D = extend(GenericCrafter, "d-diamond-d", {buildVisibility: BuildVisibility.shown});
const D_DIAMOND_E = extend(GenericCrafter, "d-diamond-e", {buildVisibility: BuildVisibility.shown});

D_DIAMOND_A.size = 1;  D_DIAMOND_A.localizedName = "T1 Diamond Drill";  D_DIAMOND_A.outputItems = [new ItemStack(creostone, 1)];
D_DIAMOND_B.size = 2;  D_DIAMOND_B.localizedName = "T2 Diamond Drill";  D_DIAMOND_B.outputItems = [new ItemStack(creostone, 1)];
D_DIAMOND_C.size = 3;  D_DIAMOND_C.localizedName = "T3 Diamond Drill";  D_DIAMOND_C.outputItems = [new ItemStack(creostone, 2)];
D_DIAMOND_D.size = 4;  D_DIAMOND_D.localizedName = "T4 Diamond Drill";  D_DIAMOND_D.outputItems = [new ItemStack(creostone, 2)];
D_DIAMOND_E.size = 5;  D_DIAMOND_E.localizedName = "T5 Diamond Drill";  D_DIAMOND_E.outputItems = [new ItemStack(creostone, 3)];

D_DIAMOND_A.requirements = ItemStack.with(Items.copper, 10,  Items.lead, 10);
D_DIAMOND_B.requirements = ItemStack.with(Items.copper, 25,  Items.lead, 25,  creostone, 25);
D_DIAMOND_C.requirements = ItemStack.with(Items.copper, 50,  Items.lead, 50,  creostone, 50);
D_DIAMOND_D.requirements = ItemStack.with(Items.copper, 100,  Items.lead, 100,  creostone, 100);
D_DIAMOND_E.requirements = ItemStack.with(Items.copper, 250,  Items.lead, 250,  Items.graphite, 250,  creostone, 250);

D_DIAMOND_A.hasPower = false;
D_DIAMOND_B.hasPower = false;
D_DIAMOND_C.hasPower = true;
D_DIAMOND_D.hasPower = true;
D_DIAMOND_E.hasPower = true;

D_DIAMOND_C.consumePower(1);
D_DIAMOND_D.consumePower(2);
D_DIAMOND_E.consumePower(3);

D_DIAMOND_A.itemCapacity = 20;  D_DIAMOND_A.craftTime = 60;  D_DIAMOND_A.category = Category.production;
D_DIAMOND_B.itemCapacity = 40;  D_DIAMOND_B.craftTime = 45;  D_DIAMOND_B.category = Category.production;
D_DIAMOND_C.itemCapacity = 60;  D_DIAMOND_C.craftTime = 30;  D_DIAMOND_C.category = Category.production;
D_DIAMOND_D.itemCapacity = 80;  D_DIAMOND_D.craftTime = 20;  D_DIAMOND_D.category = Category.production;
D_DIAMOND_E.itemCapacity = 100; D_DIAMOND_E.craftTime = 10;  D_DIAMOND_E.category = Category.production;



const D_EMERALD_A = extend(GenericCrafter, "d-emerald-a", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_B = extend(GenericCrafter, "d-emerald-b", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_C = extend(GenericCrafter, "d-emerald-c", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_D = extend(GenericCrafter, "d-emerald-d", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_E = extend(GenericCrafter, "d-emerald-e", {buildVisibility: BuildVisibility.shown});

D_EMERALD_A.size = 1;  D_EMERALD_A.localizedName = "T1 Emerald Drill";  D_EMERALD_A.outputItems = [new ItemStack(emerald, 1)];
D_EMERALD_B.size = 2;  D_EMERALD_B.localizedName = "T2 Emerald Drill";  D_EMERALD_B.outputItems = [new ItemStack(emerald, 1)];
D_EMERALD_C.size = 3;  D_EMERALD_C.localizedName = "T3 Emerald Drill";  D_EMERALD_C.outputItems = [new ItemStack(emerald, 2)];
D_EMERALD_D.size = 4;  D_EMERALD_D.localizedName = "T4 Emerald Drill";  D_EMERALD_D.outputItems = [new ItemStack(emerald, 2)];
D_EMERALD_E.size = 5;  D_EMERALD_E.localizedName = "T5 Emerald Drill";  D_EMERALD_E.outputItems = [new ItemStack(emerald, 3)];

D_EMERALD_A.requirements = ItemStack.with(Items.copper, 10,  Items.lead, 10);
D_EMERALD_B.requirements = ItemStack.with(Items.copper, 25,  Items.lead, 25,  emerald, 25);
D_EMERALD_C.requirements = ItemStack.with(Items.copper, 50,  Items.lead, 50,  emerald, 50);
D_EMERALD_D.requirements = ItemStack.with(Items.copper, 100,  Items.lead, 100,  emerald, 100);
D_EMERALD_E.requirements = ItemStack.with(Items.copper, 250,  Items.lead, 250,  Items.graphite, 250,  emerald, 250);

D_EMERALD_A.hasPower = false;
D_EMERALD_B.hasPower = false;
D_EMERALD_C.hasPower = true;
D_EMERALD_D.hasPower = true;
D_EMERALD_E.hasPower = true;

D_EMERALD_C.consumePower(1);
D_EMERALD_D.consumePower(2);
D_EMERALD_E.consumePower(3);

D_EMERALD_A.itemCapacity = 20;  D_EMERALD_A.craftTime = 60;  D_EMERALD_A.category = Category.production;
D_EMERALD_B.itemCapacity = 40;  D_EMERALD_B.craftTime = 45;  D_EMERALD_B.category = Category.production;
D_EMERALD_C.itemCapacity = 60;  D_EMERALD_C.craftTime = 30;  D_EMERALD_C.category = Category.production;
D_EMERALD_D.itemCapacity = 80;  D_EMERALD_D.craftTime = 20;  D_EMERALD_D.category = Category.production;
D_EMERALD_E.itemCapacity = 100; D_EMERALD_E.craftTime = 10;  D_EMERALD_E.category = Category.production;



const D_RUBY_A = extend(GenericCrafter, "d-ruby-a", {buildVisibility: BuildVisibility.shown});
const D_RUBY_B = extend(GenericCrafter, "d-ruby-b", {buildVisibility: BuildVisibility.shown});
const D_RUBY_C = extend(GenericCrafter, "d-ruby-c", {buildVisibility: BuildVisibility.shown});
const D_RUBY_D = extend(GenericCrafter, "d-ruby-d", {buildVisibility: BuildVisibility.shown});
const D_RUBY_E = extend(GenericCrafter, "d-ruby-e", {buildVisibility: BuildVisibility.shown});

D_RUBY_A.size = 1;  D_RUBY_A.localizedName = "T1 Ruby Drill";  D_RUBY_A.outputItems = [new ItemStack(ruby, 1)];
D_RUBY_B.size = 2;  D_RUBY_B.localizedName = "T2 Ruby Drill";  D_RUBY_B.outputItems = [new ItemStack(ruby, 1)];
D_RUBY_C.size = 3;  D_RUBY_C.localizedName = "T3 Ruby Drill";  D_RUBY_C.outputItems = [new ItemStack(ruby, 2)];
D_RUBY_D.size = 4;  D_RUBY_D.localizedName = "T4 Ruby Drill";  D_RUBY_D.outputItems = [new ItemStack(ruby, 2)];
D_RUBY_E.size = 5;  D_RUBY_E.localizedName = "T5 Ruby Drill";  D_RUBY_E.outputItems = [new ItemStack(ruby, 3)];

D_RUBY_A.requirements = ItemStack.with(Items.copper, 10,  Items.lead, 10);
D_RUBY_B.requirements = ItemStack.with(Items.copper, 25,  Items.lead, 25,  ruby, 25);
D_RUBY_C.requirements = ItemStack.with(Items.copper, 50,  Items.lead, 50,  ruby, 50);
D_RUBY_D.requirements = ItemStack.with(Items.copper, 100,  Items.lead, 100,  ruby, 100);
D_RUBY_E.requirements = ItemStack.with(Items.copper, 250,  Items.lead, 250,  Items.graphite, 250,  ruby, 250);

D_RUBY_A.hasPower = false;
D_RUBY_B.hasPower = false;
D_RUBY_C.hasPower = true;
D_RUBY_D.hasPower = true;
D_RUBY_E.hasPower = true;

D_RUBY_C.consumePower(1);
D_RUBY_D.consumePower(2);
D_RUBY_E.consumePower(3);

D_RUBY_A.itemCapacity = 20;  D_RUBY_A.craftTime = 60;  D_RUBY_A.category = Category.production;
D_RUBY_B.itemCapacity = 40;  D_RUBY_B.craftTime = 45;  D_RUBY_B.category = Category.production;
D_RUBY_C.itemCapacity = 60;  D_RUBY_C.craftTime = 30;  D_RUBY_C.category = Category.production;
D_RUBY_D.itemCapacity = 80;  D_RUBY_D.craftTime = 20;  D_RUBY_D.category = Category.production;
D_RUBY_E.itemCapacity = 100; D_RUBY_E.craftTime = 10;  D_RUBY_E.category = Category.production;



const D_STONE_A = extend(GenericCrafter, "d-stone-a", {buildVisibility: BuildVisibility.shown});
const D_STONE_B = extend(GenericCrafter, "d-stone-b", {buildVisibility: BuildVisibility.shown});
const D_STONE_C = extend(GenericCrafter, "d-stone-c", {buildVisibility: BuildVisibility.shown});
const D_STONE_D = extend(GenericCrafter, "d-stone-d", {buildVisibility: BuildVisibility.shown});
const D_STONE_E = extend(GenericCrafter, "d-stone-e", {buildVisibility: BuildVisibility.shown});

D_STONE_A.size = 1;  D_STONE_A.localizedName = "T1 Stone Drill";  D_STONE_A.outputItems = [new ItemStack(ruby, 1)];
D_STONE_B.size = 2;  D_STONE_B.localizedName = "T2 Stone Drill";  D_STONE_B.outputItems = [new ItemStack(ruby, 1)];
D_STONE_C.size = 3;  D_STONE_C.localizedName = "T3 Stone Drill";  D_STONE_C.outputItems = [new ItemStack(ruby, 2)];
D_STONE_D.size = 4;  D_STONE_D.localizedName = "T4 Stone Drill";  D_STONE_D.outputItems = [new ItemStack(ruby, 2)];
D_STONE_E.size = 5;  D_STONE_E.localizedName = "T5 Stone Drill";  D_STONE_E.outputItems = [new ItemStack(ruby, 3)];

D_STONE_A.requirements = ItemStack.with(Items.copper, 10,  Items.lead, 10);
D_STONE_B.requirements = ItemStack.with(Items.copper, 25,  Items.lead, 25,  ruby, 25);
D_STONE_C.requirements = ItemStack.with(Items.copper, 50,  Items.lead, 50,  ruby, 50);
D_STONE_D.requirements = ItemStack.with(Items.copper, 100,  Items.lead, 100,  ruby, 100);
D_STONE_E.requirements = ItemStack.with(Items.copper, 250,  Items.lead, 250,  Items.graphite, 250,  ruby, 250);

D_STONE_A.hasPower = false;
D_STONE_B.hasPower = false;
D_STONE_C.hasPower = true;
D_STONE_D.hasPower = true;
D_STONE_E.hasPower = true;

D_STONE_C.consumePower(1);
D_STONE_D.consumePower(2);
D_STONE_E.consumePower(3);

D_STONE_A.itemCapacity = 20;  D_STONE_A.craftTime = 60;  D_STONE_A.category = Category.production;
D_STONE_B.itemCapacity = 40;  D_STONE_B.craftTime = 45;  D_STONE_B.category = Category.production;
D_STONE_C.itemCapacity = 60;  D_STONE_C.craftTime = 30;  D_STONE_C.category = Category.production;
D_STONE_D.itemCapacity = 80;  D_STONE_D.craftTime = 20;  D_STONE_D.category = Category.production;
D_STONE_E.itemCapacity = 100; D_STONE_E.craftTime = 10;  D_STONE_E.category = Category.production;
