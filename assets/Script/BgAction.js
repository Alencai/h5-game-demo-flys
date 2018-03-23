
cc.Class({
    extends: cc.Component,

    properties: {
        c_bg1: {default: null, type: cc.Node},
        c_bg2: {default: null, type: cc.Node},
    },

    onLoad: function () {
        this._bgHeight = this.c_bg1.height;
        this._bg1Y = this._bgHeight;
        this._bg2Y = 0;
        this.c_bg1.y = this._bg1Y;
        this.c_bg2.y = this._bg2Y;
    },

    start: function () {

    },

    update: function (dt) {
        this._bg1Y -= 5;
        if (this._bg1Y <= -this._bgHeight) {
            this._bg1Y += this._bgHeight + this._bgHeight;
        }
        this._bg2Y -= 5;
        if (this._bg2Y <= -this._bgHeight) {
            this._bg2Y += this._bgHeight + this._bgHeight;
        }
        this.c_bg1.y = this._bg1Y;
        this.c_bg2.y = this._bg2Y;
    },
});
