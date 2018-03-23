

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
        len: {
            get: function () { return this._len; },
            set: function (v) { this._len = v; },
        }, 
        tp: {
            get: function () { return this._tp; },
            set: function (v) { this._tp = v; },
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
        this._len = 23;
        this._posX = 0;
        this._posY = 0;
        this._speedX = 0;
        this._speedY = 0;
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
        this.update();
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

    move: function() {
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
            if (this._posY < 0) {
                this._posY = 0 - this._posY;
                this._speedY = -this._speedY;
            }
            else if (this._posY > main.height) {
                this._posY = main.height + main.height - this._posY;
                this._speedY = -this._speedY;
            }
        }
        this.node.x = this._posX;
        this.node.y = this._posY;
    },

});
