

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
        attack: {
            get: function () { return this._attack; },
            set: function (v) { this._attack = v; },
        }, 
        len: {
            get: function () { return this._len; },
            set: function (v) { this._len = v; },
        }, 
        tp: {
            get: function () { return this._tp; },
            set: function (v) { this._tp = v; },
        }, 
        scale: {
            get: function () { return this._scale; },
            set: function (v) { this._scale = v; },
        }, 
        main: {
            visible: false,
            get: function () { return this._main; },
            set: function (v) { this._main = v; },
        }, 
    },

    ctor: function () {
        this._tp = 0;
        this._hp = 1;
        this._attack = 1;
        this._len = 10;
        this._posX = 0;
        this._posY = 0;
        this._speedX = 0;
        this._speedY = 0;
        this._accX = 0;
        this._accY = 0;
        this._scale = 1;
        this._main = null;
        this._curFrame = 0;
    },
    
    onLoad: function () {
    },

    start: function () {
    },

    update: function() {
        ++ this._curFrame;
        if (this._curFrame < Macro.bullet_change_frame) {
            this.node.scale = this._scale * (this._curFrame + 1) / Macro.bullet_change_frame;
        }
    },

    // ------------------------------------

    prepare: function() {
        this._curFrame = 0;
        this.update();
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

    collision: function(target) {
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
        this.node.x = this._posX;
        this.node.y = this._posY;
    },

});
