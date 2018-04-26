

cc.Class({
    extends: cc.Component,

    properties: {
        x: {
            get: function () { return this._posX; },
        },
        y: {
            get: function () { return this._posY; },
        },
        hp: {
            get: function () { return this._hp; },
            set: function (v) { this._hp = v; },
        }, 
        attack: {
            get: function () { return this._attack; },
            set: function (v) { 
                if (v < 1) { v = 1; }
                if (v > 9) { v = 9; }
                this._attack = v; 
            },
        }, 
        len: {
            get: function () { return this._len; },
            set: function (v) { this._len = v; },
        }, 
        bullets: {
            get: function () { return this._bullets; },
            set: function (v) { 
                if (v < 1) { v = 1; }
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
    },

    ctor: function () {
        this._hp = 1;
        this._attack = 1;
        this._len = 25;
        this._posX = 0;
        this._posY = 0;
        this._bullets = 1;
        this._halfBullets = 0;
        this._offSetBullets = 0;
        this._main = null;
    },

    clear: function() {
        this.hp = 1;
        this.attack = 1;
        this.bullets = 1;
    },
    
    onLoad: function () {
        this._posX = 0;
        this._posY = 0;
        this._curFrame = 0;
        this.clear();
    },

    start: function () {
        this._posX = this.node.x;
        this._posY = this.node.y;
    },

    update: function() {
        ++ this._curFrame;
        if (this._curFrame < 3) {
            return;
        }
        this._curFrame = 0;
        var main = this._main;
        if (main) {
            for (var i = this._bullets - 1; i >= 0; --i) {
                main.addBulletPlayer(this._attack, this._posX, this._posY, i - this._halfBullets + this._offSetBullets);
            }
        }
    },

    // ------------------------------------

    isHpEmpty: function() {
        return this._hp <= 0;
    },

    die: function() {
        this.node.destroy();
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
        
    },

    moveX: function (dx) {
        this._posX += dx;
        var main = this._main;
        if (main) { 
            if (this._posX < main.left) {
                this._posX = main.left;
            }
            else if (this._posX > main.right) {
                this._posX = main.right;
            }
        }
        this.node.x = this._posX;
    },
});
