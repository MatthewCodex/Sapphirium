const smallDrill = extend(Drill, "smalldrill", {
	setStats() {
		this.super$setStats();
		this.stats.remove(Stat.boostEffect);
		this.stats.remove(Stat.liquidCapacity);
	},
	setBars() {
		this.super$setBars();
		this.removeBar("liquid");
	},
	liquidCapacity: 0
});

const creostoneDrill = extend(Drill, "creostone-drill", {
    envDisabled: Env.scorching
});
const lightningDrill = extend(Drill, "lightning-drill", {
    envDisabled: Env.scorching
});
const lightDrillingRig = extend(Drill, "light-drilling-rig", {
    envDisabled: Env.scorching
});

const sandMine = extend(GenericCrafter, "sand-mine", {});
const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
const emeraldDrill = extend(AttributeCrafter, "emerald-drill", {});
const oilPump = extend(AttributeCrafter, "oil-pump", {});
const sporeExtractor = extend(AttributeCrafter, "spore-extractor", {});
const thoriumMine = extend(AttributeCrafter, "thorium-mine", {});
const rubyDrill = extend(GenericCrafter, "ruby-drill", {
    envDisabled: Env.scorching
});

const D_RUBY_A = extend(GenericCrafter, "d-ruby-a", {envDisabled: Env.scorching});
const D_RUBY_B = extend(GenericCrafter, "d-ruby-b", {envDisabled: Env.scorching});
const D_RUBY_C = extend(GenericCrafter, "d-ruby-c", {envDisabled: Env.scorching});
const D_RUBY_D = extend(GenericCrafter, "d-ruby-d", {envDisabled: Env.scorching});
const D_RUBY_E = extend(GenericCrafter, "d-ruby-e", {envDisabled: Env.scorching});