require("SappItems")

const D_RUBY_A = extend(GenericCrafter, "d-ruby-a", {envDisabled: Env.scorching});
const D_RUBY_B = extend(GenericCrafter, "d-ruby-b", {envDisabled: Env.scorching});
const D_RUBY_C = extend(GenericCrafter, "d-ruby-c", {envDisabled: Env.scorching});
const D_RUBY_D = extend(GenericCrafter, "d-ruby-d", {envDisabled: Env.scorching});
const D_RUBY_E = extend(GenericCrafter, "d-ruby-e", {envDisabled: Env.scorching});

D_RUBY_A.size = 1;
D_RUBY_B.size = 2;
D_RUBY_C.size = 3;
D_RUBY_D.size = 4;
D_RUBY_E.size = 5;

D_RUBY_A.outputItem = [
	new ItemStack(ruby, 1)
];
D_RUBY_B.outputItem = [
	new ItemStack(ruby, 1)
];
D_RUBY_C.outputItem = [
	new ItemStack(ruby, 2)
];
D_RUBY_D.outputItem = [
	new ItemStack(ruby, 2)
];
D_RUBY_E.outputItem = [
	new ItemStack(ruby, 3)
];

D_RUBY_A.requirements = ItemStack.with(
    Items.copper, 10,
    Items.lead, 10
);

D_RUBY_B.requirements = ItemStack.with(
    Items.copper, 25,
    Items.lead, 25,
	ruby, 25
);

D_RUBY_C.requirements = ItemStack.with(
    Items.copper, 50,
    Items.lead, 50,
	ruby, 50
);

D_RUBY_D.requirements = ItemStack.with(
    Items.copper, 100,
    Items.lead, 100,
	ruby, 100
);

D_RUBY_E.requirements = ItemStack.with(
    Items.copper, 250,
    Items.lead, 250,
	Items.graphite, 250,
	ruby, 250
);

D_RUBY_A.hasPower = false
D_RUBY_B.hasPower = false
D_RUBY_C.hasPower = true
D_RUBY_D.hasPower = true
D_RUBY_E.hasPower = true

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

D_RUBY_A.research = "ruby-drill";
D_RUBY_B.research = "d-ruby-a";
D_RUBY_C.research = "d-ruby-b";
D_RUBY_D.research = "d-ruby-c";
D_RUBY_E.research = "d-ruby-d";

D_RUBY_A.category = "production";
D_RUBY_B.category = "production";
D_RUBY_C.category = "production";
D_RUBY_D.category = "production";
D_RUBY_E.category = "production";
