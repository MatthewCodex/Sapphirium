const _SappItems = require("SappItems");
const ruby = Vars.content.getByName(ContentType.item, "sapphirium-ruby");
const emerald = Vars.content.getByName(ContentType.item, "sapphirium-emerald");
const globium = Vars.content.getByName(ContentType.item, "sapphirium-globium");

const D_RUBY_A = extend(GenericCrafter, "d-ruby-a", {buildVisibility: BuildVisibility.shown});
const D_RUBY_B = extend(GenericCrafter, "d-ruby-b", {buildVisibility: BuildVisibility.shown});
const D_RUBY_C = extend(GenericCrafter, "d-ruby-c", {buildVisibility: BuildVisibility.shown});
const D_RUBY_D = extend(GenericCrafter, "d-ruby-d", {buildVisibility: BuildVisibility.shown});
const D_RUBY_E = extend(GenericCrafter, "d-ruby-e", {buildVisibility: BuildVisibility.shown});

D_RUBY_A.size = 1;
D_RUBY_B.size = 2;
D_RUBY_C.size = 3;
D_RUBY_D.size = 4;
D_RUBY_E.size = 5;

D_RUBY_A.localizedName = "T1 Ruby Drill";
D_RUBY_B.localizedName = "T2 Ruby Drill";
D_RUBY_C.localizedName = "T3 Ruby Drill";
D_RUBY_D.localizedName = "T4 Ruby Drill";
D_RUBY_E.localizedName = "T5 Ruby Drill";

D_RUBY_A.outputItems = [new ItemStack(ruby, 1)];
D_RUBY_B.outputItems = [new ItemStack(ruby, 1)];
D_RUBY_C.outputItems = [new ItemStack(ruby, 2)];
D_RUBY_D.outputItems = [new ItemStack(ruby, 2)];
D_RUBY_E.outputItems = [new ItemStack(ruby, 3)];

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

D_RUBY_A.itemCapacity = 20;
D_RUBY_B.itemCapacity = 40;
D_RUBY_C.itemCapacity = 60;
D_RUBY_D.itemCapacity = 80;
D_RUBY_E.itemCapacity = 100;

D_RUBY_A.craftTime = 60;
D_RUBY_B.craftTime = 45;
D_RUBY_C.craftTime = 30;
D_RUBY_D.craftTime = 20;
D_RUBY_E.craftTime = 10;

D_RUBY_A.category = Category.production;
D_RUBY_B.category = Category.production;
D_RUBY_C.category = Category.production;
D_RUBY_D.category = Category.production;
D_RUBY_E.category = Category.production;



const D_EMERALD_A = extend(GenericCrafter, "d-emerald-a", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_B = extend(GenericCrafter, "d-emerald-b", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_C = extend(GenericCrafter, "d-emerald-c", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_D = extend(GenericCrafter, "d-emerald-d", {buildVisibility: BuildVisibility.shown});
const D_EMERALD_E = extend(GenericCrafter, "d-emerald-e", {buildVisibility: BuildVisibility.shown});

D_EMERALD_A.size = 1;
D_EMERALD_B.size = 2;
D_EMERALD_C.size = 3;
D_EMERALD_D.size = 4;
D_EMERALD_E.size = 5;

D_EMERALD_A.localizedName = "T1 Emerald Drill";
D_EMERALD_B.localizedName = "T2 Emerald Drill";
D_EMERALD_C.localizedName = "T3 Emerald Drill";
D_EMERALD_D.localizedName = "T4 Emerald Drill";
D_EMERALD_E.localizedName = "T5 Emerald Drill";

D_EMERALD_A.outputItems = [new ItemStack(emerald, 1)];
D_EMERALD_B.outputItems = [new ItemStack(emerald, 1)];
D_EMERALD_C.outputItems = [new ItemStack(emerald, 2)];
D_EMERALD_D.outputItems = [new ItemStack(emerald, 2)];
D_EMERALD_E.outputItems = [new ItemStack(emerald, 3)];

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

D_EMERALD_A.itemCapacity = 20;
D_EMERALD_B.itemCapacity = 40;
D_EMERALD_C.itemCapacity = 60;
D_EMERALD_D.itemCapacity = 80;
D_EMERALD_E.itemCapacity = 100;

D_EMERALD_A.craftTime = 60;
D_EMERALD_B.craftTime = 45;
D_EMERALD_C.craftTime = 30;
D_EMERALD_D.craftTime = 20;
D_EMERALD_E.craftTime = 10;

D_EMERALD_A.category = Category.production;
D_EMERALD_B.category = Category.production;
D_EMERALD_C.category = Category.production;
D_EMERALD_D.category = Category.production;
D_EMERALD_E.category = Category.production;

