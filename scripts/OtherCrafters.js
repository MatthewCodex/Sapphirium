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

BBM_A.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 12)));
BBM_B.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 12)));
BBM_C.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 12)));
BBM_D.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 12)));
BBM_E.consume(new ConsumeItems(ItemStack.with(creostone, 12, Items.lead, 12)));

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

CMT_A.outputLiquid = new LiquidStack(creotite, 0.1);
CMT_B.outputLiquid = new LiquidStack(creotite, 0.1);
CMT_C.outputLiquid = new LiquidStack(creotite, 0.2);
CMT_D.outputLiquid = new LiquidStack(creotite, 0.2);
CMT_E.outputLiquid = new LiquidStack(creotite, 0.3);

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




