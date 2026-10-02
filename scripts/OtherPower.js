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



const HG_A = extend(ThermalGenerator, "hg-a", {buildVisibility: BuildVisibility.shown});
const HG_B = extend(ThermalGenerator, "hg-b", {buildVisibility: BuildVisibility.shown});
const HG_C = extend(ThermalGenerator, "hg-c", {buildVisibility: BuildVisibility.shown});
const HG_D = extend(ThermalGenerator, "hg-d", {buildVisibility: BuildVisibility.shown});
const HG_E = extend(ThermalGenerator, "hg-e", {buildVisibility: BuildVisibility.shown});

HG_A.requirements = ItemStack.with(dense_alloy, 10,  Items.metaglass, 10,  Items.titanium, 10,  Items.silicon, 10);
HG_B.requirements = ItemStack.with(dense_alloy, 25,  Items.metaglass, 25,  Items.titanium, 25,  Items.silicon, 25);
HG_C.requirements = ItemStack.with(dense_alloy, 50,  Items.metaglass, 50,  Items.titanium, 50,  Items.silicon, 50);
HG_D.requirements = ItemStack.with(dense_alloy, 75,  Items.metaglass, 75,  Items.titanium, 75,  Items.silicon, 75);
HG_E.requirements = ItemStack.with(dense_alloy, 100, Items.metaglass, 100, Items.titanium, 100, Items.silicon, 100);

HG_A.powerProduction = 0.8;
HG_B.powerProduction = 1.6;
HG_C.powerProduction = 2.4;
HG_D.powerProduction = 3.2;
HG_E.powerProduction = 4;
