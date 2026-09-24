const hiddenPowerNode = extend(PowerNode, "hidden-node", {});
const strongPowerNode = extend(PowerNode, "strong-power-node", {});
const creostonePowerNode = extend(PowerNode, "creostone-power-node", {});
const creostonePowerNodeLarge = extend(PowerNode, "creostone-power-node-large", {});
const creostonePowerTower = extend(PowerNode, "creostone-power-tower", {});
const creostoneBattery = extend(Battery, "creostone-battery", {
    envDisabled: Env.scorching,
});
const copperTransformer = extend(ConsumeGenerator, "copper-transformer", {});
const hydrogenerator = extend(ThermalGenerator, "hydrogenerator", {});
const sporeGenerator = extend(ThermalGenerator, "spore-generator", {});
const oilTransformer = extend(ThermalGenerator, "oil-transformer", {});
const solarPanelMedium = extend(SolarGenerator, "solar-panel-medium", {});
var drawSpinSprite = true;
const creostoneSP = extend(SolarGenerator, "creostone-solar-panel", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
        this.sliderRegion1 = Core.atlas.find(this.name + "-slider1");
    },
    icons() {
        return [
            this.region,
            this.sliderRegion1
        ]
    }
});

creostoneSP.buildType = () => extend(SolarGenerator.SolarGeneratorBuild, creostoneSP, {
    draw() {
        var b = creostoneSP;
        var rotatorSpeed = 3;
        Draw.rect(b.region, this.x, this.y);
        if(drawSpinSprite) {
            Drawf.spinSprite(b.sliderRegion1, this.x, this.y, -Time.time * rotatorSpeed);
        }
    }
})
const creostoneReactor = extend(NuclearReactor, "creostone-reactor", {});
const chargeReactor = extend(ImpactReactor, "charge-reactor", {});

// 1. Extend the base Battery block class to add custom destruction behavior
const lightningBattery = extend(Battery, "lightning-battery", {
    // This allows you to modify the behavior of the individual building instances
    // block.buildType handles the internal logic of the placed structure
});

lightningBattery.buildType = () => extend(Battery.BatteryBuild, lightningBattery, {
    // Override the onDestroyed function which triggers when the battery is broken
    onDestroyed: function() {
        // Always call the original parent onDestroyed function first so it handles standard cleanup
        this.super$onDestroyed();

        // 2. Define how many lightning bolts you want to spawn
        const boltCount = 10;
        const damage = 25; // Damage dealt by each lightning bolt
        const lightningLength = 15; // Length of each bolt line
        
        // 3. Spawn the lightning bolts radiating outwards from the battery's position
        for(let i = 0; i < boltCount; i++) {
            // Calculate a random target coordinate nearby
            let targetX = this.x + Mathf.range(80); // 80 units max distance (~10 tiles)
            let targetY = this.y + Mathf.range(80);

            // Trigger the internal Mindustry Lightning class to create a bolt
            // Parameters: team, color, damage, x, y, targetX, targetY, length
            Lightning.create(
                this.team, 
                Pal.lancerLaser, // Beautiful electric-blue vanilla color
                damage, 
                this.x, 
                this.y, 
                Mathf.random(0, 360), 
                lightningLength
            );
        }

        // 4. (Optional) Create a cool visual explosion effect at the blast site
        Fx.lightning.at(this.x, this.y);
        Sounds.spark.at(this.x, this.y);
    }
});
