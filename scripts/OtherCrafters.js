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

const BBM_A = extend(GenericCrafter, "bbm-a", {buildVisibility: BuildVisibility.shown});
const BBM_B = extend(GenericCrafter, "bbm-b", {buildVisibility: BuildVisibility.shown});
const BBM_C = extend(GenericCrafter, "bbm-c", {buildVisibility: BuildVisibility.shown});
const BBM_D = extend(GenericCrafter, "bbm-d", {buildVisibility: BuildVisibility.shown});
const BBM_E = extend(GenericCrafter, "bbm-e", {buildVisibility: BuildVisibility.shown});

BBM_A.size = 4; BBM_B.size = 4; BBM_C.size = 4; BBM_D.size = 4; BBM_E.size = 4;

BBM_A.localizedName = "T1 Big Blast Mixer";
BBM_B.localizedName = "T2 Big Blast Mixer";
BBM_C.localizedName = "T3 Big Blast Mixer";
BBM_D.localizedName = "T4 Big Blast Mixer";
BBM_E.localizedName = "T5 Big Blast Mixer";

BBM_A.outputItems = [new ItemStack(Items.blastCompound, 18)];
BBM_B.outputItems = [new ItemStack(Items.blastCompound, 18)];
BBM_C.outputItems = [new ItemStack(Items.blastCompound, 18)];
BBM_D.outputItems = [new ItemStack(Items.blastCompound, 18)];
BBM_E.outputItems = [new ItemStack(Items.blastCompound, 18)];

BBM_A.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 4)));
BBM_B.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 4)));
BBM_C.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 4)));
BBM_D.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 4)));
BBM_E.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 4)));

BBM_A.requirements = ItemStack.with(creostone, 10,  Items.thorium, 10, Items.silicon, 10, Items.plastanium, 10);
BBM_B.requirements = ItemStack.with(creostone, 25,  Items.thorium, 25, Items.silicon, 25, Items.plastanium, 25);
BBM_C.requirements = ItemStack.with(creostone, 50,  Items.thorium, 50, Items.silicon, 50, Items.plastanium, 50);
BBM_D.requirements = ItemStack.with(creostone, 75,  Items.thorium, 75, Items.silicon, 75, Items.plastanium, 75);
BBM_E.requirements = ItemStack.with(creostone, 100,  Items.thorium, 100, Items.silicon, 100, Items.plastanium, 100);

BBM_A.consumePower(60);  BBM_A.itemCapacity = 20;  BBM_A.craftTime = 200;
BBM_B.consumePower(70);  BBM_B.itemCapacity = 40;  BBM_B.craftTime = 180;
BBM_C.consumePower(80);  BBM_C.itemCapacity = 60;  BBM_C.craftTime = 160;
BBM_D.consumePower(90);  BBM_D.itemCapacity = 80;  BBM_D.craftTime = 140;
BBM_E.consumePower(100); BBM_E.itemCapacity = 100; BBM_E.craftTime = 120;

BBM_A.category = Category.crafting; BBM_B.category = Category.crafting; BBM_C.category = Category.crafting; BBM_D.category = Category.crafting; BBM_E.category = Category.crafting;



const CMT_A = extend(GenericCrafter, "cmt-a", {buildVisibility: BuildVisibility.shown});
const CMT_B = extend(GenericCrafter, "cmt-b", {buildVisibility: BuildVisibility.shown});
const CMT_C = extend(GenericCrafter, "cmt-c", {buildVisibility: BuildVisibility.shown});
const CMT_D = extend(GenericCrafter, "cmt-d", {buildVisibility: BuildVisibility.shown});
const CMT_E = extend(GenericCrafter, "cmt-e", {buildVisibility: BuildVisibility.shown});

CMT_A.size = 4; CMT_B.size = 4; CMT_C.size = 4; CMT_D.size = 4; CMT_E.size = 4; 

CMT_A.localizedName = "T1 Creostone Melter";
CMT_B.localizedName = "T2 Creostone Melter";
CMT_C.localizedName = "T3 Creostone Melter";
CMT_D.localizedName = "T4 Creostone Melter";
CMT_E.localizedName = "T5 Creostone Melter";

CMT_A.outputLiquid = new LiquidStack(creotite, 0.5);
CMT_B.outputLiquid = new LiquidStack(creotite, 0.75);
CMT_C.outputLiquid = new LiquidStack(creotite, 1.0);
CMT_D.outputLiquid = new LiquidStack(creotite, 1.25);
CMT_E.outputLiquid = new LiquidStack(creotite, 1.5);

CMT_A.itemCapacity = 20;  CMT_A.liquidCapacity = 120;
CMT_B.itemCapacity = 40;  CMT_A.liquidCapacity = 140;
CMT_C.itemCapacity = 60;  CMT_A.liquidCapacity = 160;
CMT_D.itemCapacity = 80;  CMT_A.liquidCapacity = 180;
CMT_E.itemCapacity = 100; CMT_A.liquidCapacity = 200;

CMT_A.requirements = ItemStack.with(Items.silicon, 10,  dense_alloy, 10, creostone, 10, Items.surgeAlloy, 10);
CMT_B.requirements = ItemStack.with(Items.silicon, 25,  dense_alloy, 25, creostone, 25, Items.surgeAlloy, 25);
CMT_C.requirements = ItemStack.with(Items.silicon, 50,  dense_alloy, 50, creostone, 50, Items.surgeAlloy, 50);
CMT_D.requirements = ItemStack.with(Items.silicon, 100,  dense_alloy, 100, creostone, 100, Items.surgeAlloy, 100);
CMT_E.requirements = ItemStack.with(Items.silicon, 200,  dense_alloy, 200, creostone, 200, Items.surgeAlloy, 200);

CMT_A.consume(new ConsumeItems(ItemStack.with(creostone, 5, tinorium, 1)));
CMT_B.consume(new ConsumeItems(ItemStack.with(creostone, 5, tinorium, 1)));
CMT_C.consume(new ConsumeItems(ItemStack.with(creostone, 5, tinorium, 1)));
CMT_D.consume(new ConsumeItems(ItemStack.with(creostone, 5, tinorium, 1)));
CMT_E.consume(new ConsumeItems(ItemStack.with(creostone, 5, tinorium, 1)));

CMT_A.category = Category.crafting; CMT_B.category = Category.crafting; CMT_C.category = Category.crafting; CMT_D.category = Category.crafting; CMT_E.category = Category.crafting;

CMT_A.consumePower(3);  CMT_A.itemCapacity = 20;  CMT_A.craftTime = 45; CMT_A.liquidCapacity = 100;
CMT_B.consumePower(6);  CMT_B.itemCapacity = 40;  CMT_B.craftTime = 40; CMT_B.liquidCapacity = 150;
CMT_C.consumePower(9);  CMT_C.itemCapacity = 60;  CMT_C.craftTime = 35; CMT_C.liquidCapacity = 200;
CMT_D.consumePower(12); CMT_D.itemCapacity = 80;  CMT_D.craftTime = 30; CMT_D.liquidCapacity = 250;
CMT_E.consumePower(15); CMT_E.itemCapacity = 100; CMT_E.craftTime = 25; CMT_E.liquidCapacity = 300;



const CST_A = extend(GenericCrafter, "cst-a", {buildVisibility: BuildVisibility.shown});
const CST_B = extend(GenericCrafter, "cst-b", {buildVisibility: BuildVisibility.shown});
const CST_C = extend(GenericCrafter, "cst-c", {buildVisibility: BuildVisibility.shown});
const CST_D = extend(GenericCrafter, "cst-d", {buildVisibility: BuildVisibility.shown});
const CST_E = extend(GenericCrafter, "cst-e", {buildVisibility: BuildVisibility.shown});

CST_A.size = 2; CST_B.size = 2; CST_C.size = 2; CST_D.size = 2; CST_E.size = 2;

CST_A.category = Category.crafting; CST_B.category = Category.crafting; CST_C.category = Category.crafting; CST_D.category = Category.crafting; CST_E.category = Category.crafting;

CST_A.requirements = ItemStack.with(dense_alloy, 10,  Items.silicon, 10,  Items.thorium, 10);
CST_B.requirements = ItemStack.with(dense_alloy, 25,  Items.silicon, 25,  Items.thorium, 25);
CST_C.requirements = ItemStack.with(dense_alloy, 50,  Items.silicon, 50,  Items.thorium, 50);
CST_D.requirements = ItemStack.with(dense_alloy, 100, Items.silicon, 100, Items.thorium, 100);
CST_E.requirements = ItemStack.with(dense_alloy, 200, Items.silicon, 200, Items.thorium, 200);

CST_A.outputItems = [new ItemStack(creostone, 1)];
CST_B.outputItems = [new ItemStack(creostone, 1)];
CST_C.outputItems = [new ItemStack(creostone, 2)];
CST_D.outputItems = [new ItemStack(creostone, 2)];
CST_E.outputItems = [new ItemStack(creostone, 2)];

CST_A.craftTime = 25; CST_A.itemCapacity = 20;  CST_A.liquidCapacity = 100;  CST_A.consumePower(4);
CST_B.craftTime = 20; CST_B.itemCapacity = 40;  CST_B.liquidCapacity = 150;  CST_B.consumePower(6);
CST_C.craftTime = 15; CST_C.itemCapacity = 60;  CST_C.liquidCapacity = 200;  CST_C.consumePower(8);
CST_D.craftTime = 10; CST_D.itemCapacity = 80;  CST_D.liquidCapacity = 250;  CST_D.consumePower(10);
CST_E.craftTime = 5;  CST_E.itemCapacity = 100; CST_E.liquidCapacity = 300;  CST_E.consumePower(12);

CST_A.consume(new ConsumeItems(ItemStack(Items.silicon, 2))); CST_A.consume(new ConsumeLiquids(new LiquidStack(creotite, 0.1)));
