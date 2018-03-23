
cc.Class({
    extends: cc.Component,

    properties: {
        c_player: {default: null, type: cc.Node},
    },

    ctor: function() {
        this._pauseTime = 0;
    },

    onLoad: function () {
        this._Player = this.c_player.getComponent(Macro.script_player);
        this.node.on(cc.Node.EventType.TOUCH_START, this.evtKeyTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.evtKeyTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.evtKeyTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.evtKeyTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.evtKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.evtKeyDown, this);
        this._arrKeyCode = [];
    },

    update: function () {
        ++ this._pauseTime;
        if (this.pause()) {
            return;
        }
        var arrKeyCode = this._arrKeyCode;
        if (arrKeyCode.length > 0) {
            var code = arrKeyCode[arrKeyCode.length - 1];
            switch(code) {    
                case cc.KEY.a: this._Player.moveX(-10); break;
                case cc.KEY.d: this._Player.moveX( 10); break;
            }
        }
    },

    pause: function() {
        if (this._pauseTime > 60) {
            if (this._Player) {
                var main = this._Player.main;
                if (main) {
                    main.pause();
                }
            }
            return true;
        }
        return false;
    },

    resume: function() {
        if (this._pauseTime > 60) {
            if (this._Player) {
                var main = this._Player.main;
                if (main) {
                    main.resume();
                }
            }
        }
        this._pauseTime = -600;
    },

    evtKeyUp: function(evt) {
        this.resume();
        var code = evt.keyCode;
        var arrKeyCode = this._arrKeyCode;
        for (var idx in arrKeyCode) {
            if (arrKeyCode[idx] == code) {
                arrKeyCode.splice(idx, 1);
                break;
            }
        }
    },

    evtKeyDown: function(evt) {
        this.resume();
        var code = evt.keyCode;
        var arrKeyCode = this._arrKeyCode;
        for (var idx in arrKeyCode) {
            if (arrKeyCode[idx] == code) {
                return;
            }
        }
        this._arrKeyCode.push(code);
    },

    evtKeyTouchStart: function(evt) {
        this.resume();
        this._prePos = evt.getStartLocation();
    },
    
    evtKeyTouchMove: function(evt) {
        this.resume();
        var endPos = evt.getLocation();
        if (this._prePos && this._Player) {
            this._Player.moveX(endPos.x - this._prePos.x);
        }
        this._prePos = endPos;
    },

    evtKeyTouchEnd: function(evt) {
        this._pauseTime = 0;
    },

});
