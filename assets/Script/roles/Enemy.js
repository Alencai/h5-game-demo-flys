

cc.Class({
    extends: cc.Component,

    properties: {
        x: {
            get: function () { return this._posX; },
            set: function (v) { this._posX = v; this.node.x = v; },
        },
        y: {
            get: function () { return this._posY; },
            set: function (v) { this._posY = v; this.node.y = v; },
        },
        speedX: {
            get: function () { return this._speedX; },
            set: function (v) { this._speedX = v; },
        }, 
        speedY: {
            get: function () { return this._speedY; },
            set: function (v) { this._speedY = v; },
        }, 
        accX: {
            get: function () { return this._accX; },
            set: function (v) { this._accX = v; },
        }, 
        accY: {
            get: function () { return this._accY; },
            set: function (v) { this._accY = v; },
        }, 
        fullHP: {
            get: function () { return this._fullHP; },
            set: function (v) { 
                if (v < 1) { v = 1; }
                this._fullHP = v;
                this._hp = v; 
            },
        }, 
        hp: {
            get: function () { return this._hp; },
            set: function (v) { 
                if (v > this._fullHP) { this._fullHP = v; }
                this._hp = v; 
            },
        }, 
        attack: {
            get: function () { return this._attack; },
            set: function (v) { 
                if (v < 1) { v = 1; }
                this._attack = v; 
            },
        }, 
        road: {
            get: function () { return this._road; },
            set: function (v) { this._road = v; },
        }, 
        powers: {
            get: function () { return this._powers; },
            set: function (v) { this._powers = v; },
        }, 
        len: {
            get: function () { return this._len; },
            set: function (v) { this._len = v; },
        }, 
        tp: {
            get: function () { return this._tp; },
            set: function (v) { this._tp = v; },
        },  
        bullets: {
            get: function () { return this._bullets; },
            set: function (v) { 
                if (v < 0) { v = 0; }
                if (v > 9) { v = 9; }
                this._bullets = v; 
                this._halfBullets = parseInt(this._bullets / 2);
                this._offSetBullets = (this._bullets & 1) ? 0 : 0.5;
            },
        }, 
        main: {
            visible: false,
            get: function () { return this._main; },
            set: function (v) { this._main = v; },
        }, 
        c_progress: {default: null, type: cc.ProgressBar},
    },

    ctor: function () {
        this._tp = 0;
        this._hp = 1;
        this._fullHP = 1;
        this._attack = 1;
        this._len = 1;
        this._road = 1;
        this._posX = 0;
        this._posY = 0;
        this._speedX = 0;
        this._speedY = 0;
        this._accX = 0;
        this._accY = 0;
        this._powers = 0;
        this._bullets = 0;
        this._main = null;
    },
    
    onLoad: function () {
        this._curFrame = 0;
    },

    start: function () {
        this._posX = this.node.x;
        this._posY = this.node.y;
    },

    update: function() {
        if (this.c_progress) {
            this.c_progress.progress = this._hp > this._fullHP ? 1 : this._hp / this._fullHP;
        }

        ++ this._curFrame;
        if (this._curFrame < 60) {
            return;
        }
        this._curFrame = 0;
        
        var main = this._main;
        if (main) { 
            for (var i = this._bullets - 1; i >= 0; --i) {
                main.addBulletEnemy(this._attack, this._posX, this._posY, i - this._halfBullets + this._offSetBullets);
            }
        }
    },

    // ------------------------------------

    prepare: function() {
    },

    isHpEmpty: function() {
        return this._hp <= 0;
    },

    die: function() {
        var main = this._main;
        if (main) {
            main.setPoolNode(this.node, this._tp);
        }
        else {    
            this.node.removeFromParent();
        }
    },

    isCollision: function(target) {
        if (target) {
            var disX = this._posX - target.x;
            var disY = this._posY - target.y;
            var disLen = this._len + target.len;
            if (disX * disX + disY * disY <= disLen * disLen) {
                return true;
            }
        }
        return false;
    },

    move: function() {
        this._speedX += this._accX;
        this._speedY += this._accY;
        this._posX += this._speedX;
        this._posY += this._speedY;
        var main = this._main;
        if (main) { 
            if (this._posX < main.left) {
                this._posX = main.left + main.left - this._posX;
                this._speedX = -this._speedX;
            }
            else if (this._posX > main.right) {
                this._posX = main.right + main.right - this._posX;
                this._speedX = -this._speedX;
            }
        }
        this.node.x = this._posX;
        this.node.y = this._posY;
    },
});
