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

CST_A.consume(new ConsumeItems(ItemStack.with(Items.silicon, 2))); CST_A.consume(new ConsumeLiquid(creotite, 0.1));
CST_B.consume(new ConsumeItems(ItemStack.with(Items.silicon, 2))); CST_B.consume(new ConsumeLiquid(creotite, 0.1));
CST_C.consume(new ConsumeItems(ItemStack.with(Items.silicon, 2))); CST_C.consume(new ConsumeLiquid(creotite, 0.1));
CST_D.consume(new ConsumeItems(ItemStack.with(Items.silicon, 2))); CST_D.consume(new ConsumeLiquid(creotite, 0.1));
CST_E.consume(new ConsumeItems(ItemStack.with(Items.silicon, 2))); CST_E.consume(new ConsumeLiquid(creotite, 0.1));



const CCV_A = extend(AttributeCrafter, "ccv-a", {buildVisibility: BuildVisibility.shown});
const CCV_B = extend(AttributeCrafter, "ccv-b", {buildVisibility: BuildVisibility.shown});
const CCV_C = extend(AttributeCrafter, "ccv-c", {buildVisibility: BuildVisibility.shown});
const CCV_D = extend(AttributeCrafter, "ccv-d", {buildVisibility: BuildVisibility.shown});
const CCV_E = extend(AttributeCrafter, "ccv-e", {buildVisibility: BuildVisibility.shown});

CCV_A.craftTime = 135; CCV_B.craftTime = 120; CCV_C.craftTime = 105; CCV_D.craftTime = 90; CCV_E.craftTime = 75;

CCV_A.outputItems = [new ItemStack(creostone, 8)];  CCV_A.outputLiquid = new LiquidStack(Liquids.slag, 0.15);
CCV_B.outputItems = [new ItemStack(creostone, 8)];  CCV_B.outputLiquid = new LiquidStack(Liquids.slag, 0.3);
CCV_C.outputItems = [new ItemStack(creostone, 10)]; CCV_C.outputLiquid = new LiquidStack(Liquids.slag, 0.45);
CCV_D.outputItems = [new ItemStack(creostone, 10)]; CCV_D.outputLiquid = new LiquidStack(Liquids.slag, 0.6);
CCV_E.outputItems = [new ItemStack(creostone, 12)]; CCV_E.outputLiquid = new LiquidStack(Liquids.slag, 0.75);

CCV_A.itemCapacity = 20;  CCV_A.liquidCapacity = 30;
CCV_B.itemCapacity = 40;  CCV_B.liquidCapacity = 60;
CCV_C.itemCapacity = 60;  CCV_C.liquidCapacity = 90;
CCV_D.itemCapacity = 80;  CCV_D.liquidCapacity = 120;
CCV_E.itemCapacity = 100; CCV_E.liquidCapacity = 150;

CCV_A.consumePower(20); CCV_B.consumePower(30); CCV_C.consumePower(40); CCV_D.consumePower(50); CCV_E.consumePower(60);

CCV_A.consume(new ConsumeItems(ItemStack.with(Items.silicon, 6, Items.blastCompound, 2))); CCV_A.consume(new ConsumeLiquid(creotite, 0.4));
CCV_B.consume(new ConsumeItems(ItemStack.with(Items.silicon, 6, Items.blastCompound, 2))); CCV_B.consume(new ConsumeLiquid(creotite, 0.4));
CCV_C.consume(new ConsumeItems(ItemStack.with(Items.silicon, 6, Items.blastCompound, 2))); CCV_C.consume(new ConsumeLiquid(creotite, 0.4));
CCV_D.consume(new ConsumeItems(ItemStack.with(Items.silicon, 6, Items.blastCompound, 2))); CCV_D.consume(new ConsumeLiquid(creotite, 0.4));
CCV_E.consume(new ConsumeItems(ItemStack.with(Items.silicon, 6, Items.blastCompound, 2))); CCV_E.consume(new ConsumeLiquid(creotite, 0.4));

CCV_A.requirements = ItemStack.with(dense_alloy, 10,  Items.thorium, 10,  Items.silicon, 10,  creostone, 10);
CCV_B.requirements = ItemStack.with(dense_alloy, 25,  Items.thorium, 25,  Items.silicon, 25,  creostone, 25);
CCV_C.requirements = ItemStack.with(dense_alloy, 50,  Items.thorium, 50,  Items.silicon, 50,  creostone, 50);
CCV_D.requirements = ItemStack.with(dense_alloy, 100, Items.thorium, 100, Items.silicon, 100, creostone, 100);
CCV_E.requirements = ItemStack.with(dense_alloy, 200, Items.thorium, 200, Items.silicon, 200, creostone, 200);



const CMM_A = extend(GenericCrafter, "cmm-a", {buildVisibility: BuildVisibility.shown});
const CMM_B = extend(GenericCrafter, "cmm-b", {buildVisibility: BuildVisibility.shown});
const CMM_C = extend(GenericCrafter, "cmm-c", {buildVisibility: BuildVisibility.shown});
const CMM_D = extend(GenericCrafter, "cmm-d", {buildVisibility: BuildVisibility.shown});
const CMM_E = extend(GenericCrafter, "cmm-e", {buildVisibility: BuildVisibility.shown});

CMM_A.requirements = ItemStack.with(dense_alloy, 50,  globium, 50,  Items.thorium, 50,  Items.silicon, 50,  creostone, 50,  Items.surgeAlloy, 50);
CMM_B.requirements = ItemStack.with(dense_alloy, 75,  globium, 75,  Items.thorium, 75,  Items.silicon, 75,  creostone, 75,  Items.surgeAlloy, 75);
CMM_C.requirements = ItemStack.with(dense_alloy, 150, globium, 150, Items.thorium, 150, Items.silicon, 150, creostone, 150, Items.surgeAlloy, 150);
CMM_D.requirements = ItemStack.with(dense_alloy, 300, globium, 300, Items.thorium, 300, Items.silicon, 300, creostone, 300, Items.surgeAlloy, 300);
CMM_E.requirements = ItemStack.with(dense_alloy, 600, globium, 600, Items.thorium, 600, Items.silicon, 600, creostone, 600, Items.surgeAlloy, 600);

CMM_A.outputLiquid = new LiquidStack(creotite, 2);   CMM_A.craftTime = 300; CMM_A.consumePower(100);
CMM_B.outputLiquid = new LiquidStack(creotite, 2.5); CMM_B.craftTime = 270; CMM_B.consumePower(125);
CMM_C.outputLiquid = new LiquidStack(creotite, 3);   CMM_C.craftTime = 240; CMM_C.consumePower(150);
CMM_D.outputLiquid = new LiquidStack(creotite, 3.5); CMM_D.craftTime = 210; CMM_D.consumePower(175);
CMM_E.outputLiquid = new LiquidStack(creotite, 4);   CMM_E.craftTime = 180; CMM_E.consumePower(200);

CMM_A.itemCapacity = 30;  CMM_A.liquidCapacity = 210;
CMM_B.itemCapacity = 60;  CMM_B.liquidCapacity = 240;
CMM_C.itemCapacity = 90;  CMM_C.liquidCapacity = 270;
CMM_D.itemCapacity = 120; CMM_D.liquidCapacity = 300;
CMM_E.itemCapacity = 150; CMM_E.liquidCapacity = 330;



const CMX_A = extend(GenericCrafter, "cmx-a", {buildVisibility: BuildVisibility.shown});
const CMX_B = extend(GenericCrafter, "cmx-b", {buildVisibility: BuildVisibility.shown});
const CMX_C = extend(GenericCrafter, "cmx-c", {buildVisibility: BuildVisibility.shown});
const CMX_D = extend(GenericCrafter, "cmx-d", {buildVisibility: BuildVisibility.shown});
const CMX_E = extend(GenericCrafter, "cmx-e", {buildVisibility: BuildVisibility.shown});

CMX_A.requirements = ItemStack.with(dense_alloy, 10,  Items.titanium, 10,  Items.thorium, 10,  Items.silicon, 10);
CMX_B.requirements = ItemStack.with(dense_alloy, 25,  Items.titanium, 25,  Items.thorium, 25,  Items.silicon, 25);
CMX_C.requirements = ItemStack.with(dense_alloy, 50,  Items.titanium, 50,  Items.thorium, 50,  Items.silicon, 50);
CMX_D.requirements = ItemStack.with(dense_alloy, 100, Items.titanium, 100, Items.thorium, 100, Items.silicon, 100);
CMX_E.requirements = ItemStack.with(dense_alloy, 200, Items.titanium, 200, Items.thorium, 200, Items.silicon, 200);

CMX_A.outputLiquid = new LiquidStack(creotite, 0.4); CMX_A.craftTime = 100; CMX_A.consumePower(5.5);
CMX_B.outputLiquid = new LiquidStack(creotite, 0.5); CMX_B.craftTime = 90;  CMX_B.consumePower(6);
CMX_C.outputLiquid = new LiquidStack(creotite, 0.6); CMX_C.craftTime = 80;  CMX_C.consumePower(6.5);
CMX_D.outputLiquid = new LiquidStack(creotite, 0.7); CMX_D.craftTime = 70;  CMX_D.consumePower(7);
CMX_E.outputLiquid = new LiquidStack(creotite, 0.8); CMX_E.craftTime = 60;  CMX_E.consumePower(7.5);

CMX_A.itemCapacity = 20;  CMX_A.liquidCapacity = 36;
CMX_B.itemCapacity = 30;  CMX_B.liquidCapacity = 40;
CMX_B.itemCapacity = 40;  CMX_B.liquidCapacity = 44;
CMX_B.itemCapacity = 50;  CMX_B.liquidCapacity = 48;
CMX_B.itemCapacity = 80;  CMX_B.liquidCapacity = 60;



const DS_A = extend(GenericCrafter, "ds-a", {buildVisibility: BuildVisibility.shown});
const DS_B = extend(GenericCrafter, "ds-b", {buildVisibility: BuildVisibility.shown});
const DS_C = extend(GenericCrafter, "ds-c", {buildVisibility: BuildVisibility.shown});
const DS_D = extend(GenericCrafter, "ds-d", {buildVisibility: BuildVisibility.shown});
const DS_E = extend(GenericCrafter, "ds-e", {buildVisibility: BuildVisibility.shown});

DS_A.requirements = ItemStack.with(Items.copper, 10,  Items.lead, 10);
DS_B.requirements = ItemStack.with(Items.copper, 25,  Items.lead, 25);
DS_C.requirements = ItemStack.with(Items.copper, 50,  Items.lead, 50);
DS_D.requirements = ItemStack.with(Items.copper, 75,  Items.lead, 75);
DS_E.requirements = ItemStack.with(Items.copper, 100, Items.lead, 100);

DS_A.outputItems = [new ItemStack(dense_alloy, 2)]; DS_A.hasPower = false; DS_A.craftTime = 35;
DS_B.outputItems = [new ItemStack(dense_alloy, 3)]; DS_B.hasPower = false; DS_B.craftTime = 30;
DS_C.outputItems = [new ItemStack(dense_alloy, 4)]; DS_C.hasPower = true;  DS_C.craftTime = 25;
DS_D.outputItems = [new ItemStack(dense_alloy, 5)]; DS_D.hasPower = true;  DS_D.craftTime = 20;
DS_E.outputItems = [new ItemStack(dense_alloy, 6)]; DS_E.hasPower = true;  DS_E.craftTime = 15;

DS_A.itemCapacity = 20; DS_B.itemCapacity = 30; DS_C.itemCapacity = 40; DS_D.itemCapacity = 50; DS_E.itemCapacity = 60;

DS_C.consumePower(0.8)
DS_D.consumePower(0.9)
DS_E.consumePower(1.0)



const DS_F = extend(GenericCrafter, "ds-f", {buildVisibility: BuildVisibility.shown});
const DS_G = extend(GenericCrafter, "ds-g", {buildVisibility: BuildVisibility.shown});
const DS_H = extend(GenericCrafter, "ds-h", {buildVisibility: BuildVisibility.shown});
const DS_I = extend(GenericCrafter, "ds-i", {buildVisibility: BuildVisibility.shown});
const DS_J = extend(GenericCrafter, "ds-j", {buildVisibility: BuildVisibility.shown});

DS_F.requirements = ItemStack.with(dense_alloy, 25,  Items.metaglass, 25,  Items.titanium, 25,  Items.silicon, 25);
DS_G.requirements = ItemStack.with(dense_alloy, 50,  Items.metaglass, 50,  Items.titanium, 50,  Items.silicon, 50);
DS_H.requirements = ItemStack.with(dense_alloy, 100, Items.metaglass, 100, Items.titanium, 100, Items.silicon, 100);
DS_I.requirements = ItemStack.with(dense_alloy, 150, Items.metaglass, 150, Items.titanium, 150, Items.silicon, 150);
DS_J.requirements = ItemStack.with(dense_alloy, 300, Items.metaglass, 300, Items.titanium, 300, Items.silicon, 300);

DS_F.outputItems = [new ItemStack(dense_alloy, 10)]; DS_F.outputLiquid = new LiquidStack(Liquids.slag, 0.4); DS_F.craftTime = 80;
DS_G.outputItems = [new ItemStack(dense_alloy, 12)]; DS_G.outputLiquid = new LiquidStack(Liquids.slag, 0.5); DS_G.craftTime = 70; 
DS_H.outputItems = [new ItemStack(dense_alloy, 14)]; DS_H.outputLiquid = new LiquidStack(Liquids.slag, 0.6); DS_H.craftTime = 60; 
DS_I.outputItems = [new ItemStack(dense_alloy, 16)]; DS_I.outputLiquid = new LiquidStack(Liquids.slag, 0.7); DS_I.craftTime = 50; 
DS_J.outputItems = [new ItemStack(dense_alloy, 18)]; DS_J.outputLiquid = new LiquidStack(Liquids.slag, 0.8); DS_J.craftTime = 40; 

DS_F.itemCapacity = 40;  DS_F.liquidCapacity = 50;  DS_F.consumePower(16);
DS_G.itemCapacity = 60;  DS_G.liquidCapacity = 75;  DS_G.consumePower(18);
DS_H.itemCapacity = 80;  DS_H.liquidCapacity = 100; DS_H.consumePower(20);
DS_I.itemCapacity = 100; DS_I.liquidCapacity = 125; DS_I.consumePower(22);
DS_J.itemCapacity = 120; DS_J.liquidCapacity = 150; DS_J.consumePower(24);



const DP_A = extend(AttributeCrafter, "dp-a", {buildVisibility: BuildVisibility.shown});
const DP_B = extend(AttributeCrafter, "dp-b", {buildVisibility: BuildVisibility.shown});
const DP_C = extend(AttributeCrafter, "dp-c", {buildVisibility: BuildVisibility.shown});
const DP_D = extend(AttributeCrafter, "dp-d", {buildVisibility: BuildVisibility.shown});
const DP_E = extend(AttributeCrafter, "dp-e", {buildVisibility: BuildVisibility.shown});

DP_A.outputItems = [new ItemStack(diamond, 4)]; DP_A.craftTime = 160;
DP_B.outputItems = [new ItemStack(diamond, 4)]; DP_B.craftTime = 150;
DP_C.outputItems = [new ItemStack(diamond, 6)]; DP_C.craftTime = 140;
DP_D.outputItems = [new ItemStack(diamond, 6)]; DP_D.craftTime = 130;
DP_E.outputItems = [new ItemStack(diamond, 8)]; DP_E.craftTime = 120;

DP_A.consumePower(6);  DP_A.itemCapacity = 40;  DP_A.liquidCapacity = 40;
DP_B.consumePower(8);  DP_A.itemCapacity = 60;  DP_A.liquidCapacity = 60;
DP_C.consumePower(10); DP_A.itemCapacity = 80;  DP_A.liquidCapacity = 80;
DP_D.consumePower(12); DP_A.itemCapacity = 100; DP_A.liquidCapacity = 100;
DP_E.consumePower(14); DP_A.itemCapacity = 120; DP_A.liquidCapacity = 120;

DP_A.requirements = ItemStack.with(dense_alloy, 25,  Items.thorium, 25,  Items.plastanium, 25,  Items.silicon, 25);
DP_B.requirements = ItemStack.with(dense_alloy, 50,  Items.thorium, 50,  Items.plastanium, 50,  Items.silicon, 50);
DP_C.requirements = ItemStack.with(dense_alloy, 100, Items.thorium, 100, Items.plastanium, 100, Items.silicon, 100);
DP_D.requirements = ItemStack.with(dense_alloy, 150, Items.thorium, 150, Items.plastanium, 150, Items.silicon, 150);
DP_E.requirements = ItemStack.with(dense_alloy, 200, Items.thorium, 200, Items.plastanium, 200, Items.silicon, 200);



const EMX_A = extend(GenericCrafter, "emx-a", {buildVisibility: BuildVisibility.shown});
const EMX_B = extend(GenericCrafter, "emx-b", {buildVisibility: BuildVisibility.shown});
const EMX_C = extend(GenericCrafter, "emx-c", {buildVisibility: BuildVisibility.shown});
const EMX_D = extend(GenericCrafter, "emx-d", {buildVisibility: BuildVisibility.shown});
const EMX_E = extend(GenericCrafter, "emx-e", {buildVisibility: BuildVisibility.shown});

EMX_A.outputLiquids = [new LiquidStack(surge_mass, 0.4)]; EMX_A.consumePower(4); EMX_A.consumePower(4); EMX_A.craftTime = 60;

EMX_A.liquidCapacity = 40; EMX_A.requirements = ItemStack.with(dense_alloy, 25,  Items.titanium, 25,  Items.surgeAlloy, 25);




