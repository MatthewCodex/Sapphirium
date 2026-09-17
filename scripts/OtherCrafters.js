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

const BBM_A = extend(GenericCrafter, "bbm-a", {buildVisibility: BuildVisibility.shown});

BBM_A.size = 4;

BBM_A.localizedName = "T1 Big Blast Mixer";

BBM_A.outputItems = [new ItemStack(Items.blastCompound, 18)];

BBM_A.requirements = ItemStack.with(creostone, 10,  Items.thorium, 10, Items.silicon, 10, Items.plastanium, 10);

BBM_A.consumePower(60);

BBM_A.itemCapacity = 20;
//D_RUBY_B.itemCapacity = 40;
//D_RUBY_C.itemCapacity = 60;
//D_RUBY_D.itemCapacity = 80;
//D_RUBY_E.itemCapacity = 100;

BBM_A.craftTime = 200;
//D_RUBY_B.craftTime = 180;
//D_RUBY_C.craftTime = 160;
//D_RUBY_D.craftTime = 140;
//D_RUBY_E.craftTime = 120;

BBM_A.category = Category.crafting;
//D_RUBY_B.category = Category.crafting;
//D_RUBY_C.category = Category.crafting;
//D_RUBY_D.category = Category.crafting;
//D_RUBY_E.category = Category.crafting;

