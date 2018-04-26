

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
        len: {
            get: function () { return this._len; },
            set: function (v) { this._len = v; },
        }, 
        main: {
            visible: false,
            get: function () { return this._main; },
            set: function (v) { this._main = v; },
        }, 
    },

    ctor: function () {
        this._len = 15;
        this._posX = 0;
        this._posY = 0;
        this._speedX = 0;
        this._speedY = 0;
        this._accX = 0;
        this._accY = 0;
        this._main = null;
    },
    
    onLoad: function () {
    },

    start: function () {
    },

    update: function() {
    },

    // ------------------------------------

    prepare: function() {
    },

    attach: function(x, y) {
        if (Math.abs(this._posX - x) < 100 && this._posY - y < 200) {
            this._speedX += (x - this._posX) / 10;
            this._speedY += (y - this._posY) / 10;
            if (this._speedX < -10) this._speedX = -10;
            if (this._speedX > 10) this._speedX = 10;
            if (this._speedY < -20) this._speedY = -20;
            if (this._speedY > 20) this._speedY = 20;
        }
    },

    die: function() {
        var main = this._main;
        if (main) {
            main.setPoolNode(this.node, Macro.tp_coin);
        }
        else {    
            this.node.destroy();
        }
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
