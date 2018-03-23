
cc.Class({
    extends: cc.Component,

    properties: {
        c_score: {default: null, type: cc.Label},
        c_coin: {default: null, type: cc.Label},
        c_content: {default: null, type: cc.Node},
        c_player: {default: null, type: cc.Node},
        c_fail: {default: null, type: cc.Node},
        c_prefabBullet: {default: null, type: cc.Prefab},
        c_prefabfood1: {default: null, type: cc.Prefab},
        c_prefabfood2: {default: null, type: cc.Prefab},
        c_prefabfood3: {default: null, type: cc.Prefab},
        c_prefabfood4: {default: null, type: cc.Prefab},
        c_prefabEnemy1: {default: null, type: cc.Prefab},
        c_prefabEnemy2: {default: null, type: cc.Prefab},
        c_prefabEnemy3: {default: null, type: cc.Prefab},
        c_prefabEnemy4: {default: null, type: cc.Prefab},
        c_prefabEnemy5: {default: null, type: cc.Prefab},
        c_prefabCoin: {default: null, type: cc.Prefab},
        left: {
            get: function () { return this._left; },
        },
        right: {
            get: function () { return this._right; },
        },
        height: {
            get: function () { return this._height; },
        },
    },

    ctor: function() {
        this._pause = false;
        this._score = 0;
        this._coin = 0;
        this._right = 0;
        this._left = 0;
        this._height = 0;
        this._setIndex = 0;
        this._setFrame = 0;
        this._setTimes = 1;
        this._setEnemys = [
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 240, tp: 3, attack: 3, hp:  50, road: Macro.road_zhi_xian_yun_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 240, tp: 3, attack: 3, hp:  50, road: Macro.road_zhi_xian_yun_su },
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 240, tp: 3, attack: 3, hp:  50, road: Macro.road_zhi_xian_yun_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 240, tp: 3, attack: 3, hp:  50, road: Macro.road_zhi_xian_yun_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 120, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 360, tp: 2, attack: 4, hp: 100, road: Macro.road_luo_xuan_xia_jiang },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  15, road: Macro.road_zhi_xian_jia_su_5 },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 120, tp: 4, attack: 2, hp:  30, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  30, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  30, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  30, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  30, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 480, tp: 1, attack: 5, hp: 500, road: Macro.road_shui_ping_pan_xuan },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 170, tp: 4, attack: 1, hp:  50, road: Macro.road_zhi_xian_chao_su },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame: 120, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  10, road: Macro.road_zhi_xian_jia_su_5 },
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame:  60, tp: 5, attack: 1, hp:  10, road: Macro.road_luo_xuan_xia_jiang},
            {frame: 120, tp: 4, attack: 2, hp:  20, road: Macro.road_zhi_xian_jia_su_1 },
            {frame:   1, tp: 4, attack: 2, hp:  20, road: Macro.road_zhi_xian_jia_su_2 },
            {frame:   1, tp: 4, attack: 2, hp:  20, road: Macro.road_zhi_xian_jia_su_3 },
            {frame:   1, tp: 4, attack: 2, hp:  20, road: Macro.road_zhi_xian_jia_su_4 },
            {frame:   1, tp: 4, attack: 2, hp:  20, road: Macro.road_zhi_xian_jia_su_5 },
        ];
    },

    onLoad: function () {
        this._dictPool = {};
        this._arrEnemy = [];
        this._arrBulletEnemy = [];
        this._arrBulletPlayer = [];
        this._arrCoin = [];
        this._arrFood = [];
        this._Player = this.c_player.getComponent(Macro.script_player);
        if (this._Player) {
            this._Player.main = this;
        }
    },

    start: function () {
        this._right = this.node.width / 2;
        this._left = -this._right;
        this._height = this.node.height;
        this._score = 0;
        this._coin = 0;
        this._pause = false;
    },

    pause: function() {
        this._pause = true;
    },

    resume: function() {
        this._pause = false;
    },

    clear: function() {
        this._pause = false;
        this._setIndex = 0;
        this._setFrame = 0;
        this._setTimes = 1;
        this._score = 0;
        this._coin = 0;
        var arrBulletEnemy = this._arrBulletEnemy;
        for (var idx = 0; idx < arrBulletEnemy.length; ) {
            var enemy = arrBulletEnemy[idx];
            enemy.die();
            arrBulletEnemy.splice(idx, 1);
        }
        var arrEnemy = this._arrEnemy;
        for (var idx = 0; idx < arrEnemy.length; ) {
            var enemy = arrEnemy[idx];
            enemy.die();
            arrEnemy.splice(idx, 1);
        }
        var arrBulletPlayer = this._arrBulletPlayer;
        for (var idxBullet = 0; idxBullet < arrBulletPlayer.length; ) {
            var bullet = arrBulletPlayer[idxBullet];
            bullet.die();
            arrBulletPlayer.splice(idxBullet, 1);
        }
        var arrCoin = this._arrCoin;
        for (var idxCoin = 0; idxCoin < arrCoin.length; ) {
            var coin = arrCoin[idxCoin];
            coin.die();
            arrCoin.splice(idxCoin, 1);
        }
        var arrFood = this._arrFood;
        for (var idxFood = 0; idxFood < arrFood.length; ) {
            var food = arrFood[idxFood];
            food.die();
            arrFood.splice(idxFood, 1);
        }
        if (this._Player) {
            this._Player.clear();
        }
    },

    update: function (dt) {
        if (this._pause) {
            return;
        }
        this.c_score.string = this._score + "";
        this.c_coin.string = this._coin + "";
        // 死亡结算
        var player = this._Player;
        if (!player || player.isHpEmpty()) {
            this._pause = true;
            this.c_fail.active = true;
            return;
        }
        // 敌方子弹 
        var arrBulletEnemy = this._arrBulletEnemy;
        for (var idx = 0; idx < arrBulletEnemy.length; ) {
            var enemy = arrBulletEnemy[idx];
            // 出界
            var posX = enemy.x;
            var posY = enemy.y;
            if (posX < this._left || posX > this._right || posY < 0 || posY > this._height) {
                enemy.die();
                arrBulletEnemy.splice(idx, 1);
                continue;
            }
            // 碰撞 我方飞机
            if (player.isCollision(enemy)) {
                player.hp = player.hp - enemy.attack;
                enemy.die();
                arrBulletEnemy.splice(idx, 1);
                continue;
            }
            // 移动
            enemy.move();
            ++ idx;
        }
        // 敌军 
        var arrEnemy = this._arrEnemy;
        for (var idx = 0; idx < arrEnemy.length; ) {
            var enemy = arrEnemy[idx];
            // 出界
            var posY = enemy.y;
            if (posY < 0 || posY > this._height) {
                enemy.die();
                arrEnemy.splice(idx, 1);
                continue;
            } 
            // 碰撞 我方飞机
            if (player.isCollision(enemy)) {
                player.hp = player.hp - enemy.attack;
                enemy.die();
                arrEnemy.splice(idx, 1);
                continue;
            }
            // 移动
            enemy.move();
            ++ idx;
        }
        // 金币
        var arrCoin = this._arrCoin;
        for (var idx = 0; idx < arrCoin.length; ) {
            var coin = arrCoin[idx];
            // 出界
            var posY = coin.y;
            if (posY < 0 || posY > this._height + this._height) {
                coin.die();
                arrCoin.splice(idx, 1);
                continue;
            } 
            // 碰撞 我方飞机
            if (player.isCollision(coin)) {
                this._coin ++;
                coin.die();
                arrCoin.splice(idx, 1);
                continue;
            }
            // 移动
            coin.attach(player.x, player.y);
            coin.move();
            ++ idx;
        }
        // 本方子弹
        var arrBulletPlayer = this._arrBulletPlayer;
        for (var idxBullet = 0; idxBullet < arrBulletPlayer.length; ) {
            var bullet = arrBulletPlayer[idxBullet];
            // 出界
            var posX = bullet.x;
            var posY = bullet.y;
            if (posX < this._left || posX > this._right || posY < 0 || posY > this._height){
                bullet.die();
                arrBulletPlayer.splice(idxBullet, 1);
                continue;
            }
            // 碰撞 敌军
            var bIsCollision = false;
            for (var idxEnemy in arrEnemy) {
                var enemy = arrEnemy[idxEnemy];
                if (enemy.isCollision(bullet)) {
                    enemy.hp = enemy.hp - bullet.attack;
                    if (enemy.isHpEmpty()) {
                        this.addFoods(enemy.x, enemy.y, enemy.powers);
                        this.addCoins(enemy.x, enemy.y, enemy.attack * 2 + 1);
                        this._score += enemy.fullHP;
                        enemy.die();
                        arrEnemy.splice(idxEnemy, 1);
                    }
                    bIsCollision = true;
                    break;
                }
            }
            if (bIsCollision) {
                bullet.die();
                arrBulletPlayer.splice(idxBullet, 1);
                continue;
            }
            // 移动
            bullet.move();
            ++ idxBullet;
        }
        // 食物
        var arrFood = this._arrFood;
        for (var idxFood = 0; idxFood < arrFood.length; ) {
            var food = arrFood[idxFood];
            // 本方吃
            if (player.isCollision(food)) {
                switch(food.tp) {
                    case 201: player.attack = player.attack + 1; break;
                    case 202: player.attack = player.attack - 1; break;
                    case 203: player.bullets = player.bullets + 1; break;
                    case 204: player.bullets = player.bullets - 1; break;
                }
                food.die();
                arrFood.splice(idxFood, 1);
                continue;
            }
            // 敌军吃
            var bIsCollision = false;
            for (var idxEnemy in arrEnemy) {
                var enemy = arrEnemy[idxEnemy];
                if (enemy.isCollision(food)) {
                    enemy.hp = enemy.hp + parseInt(Math.min(enemy.fullHP * 0.1, 20));
                    enemy.powers = enemy.powers + 1;
                    bIsCollision = true;
                    break;
                }
            }
            if (bIsCollision) {
                food.die();
                arrFood.splice(idxFood, 1);
                continue;
            }
            // 移动
            food.move();
            ++ idxFood;
        }
        // 产生敌军
        ++ this._setFrame;
        var setEnemys = this._setEnemys;
        var setIdx = this._setIndex;
        while(setIdx < setEnemys.length) {
            var setEnemy = setEnemys[setIdx];
            if (this._setFrame < setEnemy.frame ){
                break;
            }
            this.addEnemy(setEnemy.tp, setEnemy.road, setEnemy.attack, setEnemy.hp * this._setTimes);
            this._setFrame = 0;
            ++ setIdx;
        }
        if (setIdx < setEnemys.length) {
            this._setIndex = setIdx;
        }
        else {
            ++ this._setTimes;
            this._setIndex = 0;
        }
    },

    addEnemy: function(tp, road, attack, hp) {
        if (this._pause) {
            return;
        }
        var enemy = this.getPoolNode(tp);
        if (!enemy) {
            return;
        }
        var script = enemy.getComponent(Macro.script_enemy);
        if (!script) {
            return;
        }
        script.tp = tp;
        script.road = road;
        script.attack = attack;
        script.fullHP = hp;
        script.powers = 1;
        script.main = this;
        script.prepare();
        switch(tp) {
            case 1: script.len = 150; script.bullets = 4; break;
            case 2: script.len =  55; script.bullets = 3; break;
            case 3: script.len =  40; script.bullets = 2; break;
            case 4: script.len =  35; script.bullets = 0; break;
            case 5: script.len =  30; script.bullets = 1; break;
        }
        switch (road) {
            case Macro.road_zhi_xian_yun_su:      script.x = this.getRandSpeed(0.1) * this._right; script.y = this._height - 20; script.speedX = 0;                          script.speedY = -2; script.accX = 0; script.accY = 0; break;
            case Macro.road_zhi_xian_chao_su:     script.x = this.getRandSpeed(0.1) * this._right; script.y = this._height / 2;  script.speedX = 0;                          script.speedY = 13; script.accX = 0; script.accY = -0.2; break;
            case Macro.road_shui_ping_pan_xuan:   script.x = this.getRandSpeed(0.1) * this._right; script.y = this._height - 70; script.speedX = this.getRandSpeed(3);       script.speedY =  0; script.accX = 0; script.accY = 0; break;
            case Macro.road_luo_xuan_xia_jiang:   script.x = this.getRandSpeed(0.1) * this._right; script.y = this._height - 20; script.speedX = this.getRandSpeed(0.1) * 3; script.speedY = -1; script.accX = 0; script.accY = 0; break;
            case Macro.road_zhi_xian_jia_su_1:    script.x = 0;                                    script.y = this._height - 30; script.speedX = 0;                          script.speedY = -2; script.accX = 0; script.accY = -0.15; break;
            case Macro.road_zhi_xian_jia_su_2:    script.x = (this._right + script.len / 2) / 3;   script.y = this._height - 30; script.speedX = 0;                          script.speedY = -2; script.accX = 0; script.accY = -0.15; break;
            case Macro.road_zhi_xian_jia_su_3:    script.x = (this._left - script.len / 2) / 3;    script.y = this._height - 30; script.speedX = 0;                          script.speedY = -2; script.accX = 0; script.accY = -0.15; break;
            case Macro.road_zhi_xian_jia_su_4:    script.x = (this._right * 2 + script.len) / 3;   script.y = this._height - 30; script.speedX = 0;                          script.speedY = -2; script.accX = 0; script.accY = -0.15; break;
            case Macro.road_zhi_xian_jia_su_5:    script.x = (this._left * 2 - script.len) / 3;    script.y = this._height - 30; script.speedX = 0;                          script.speedY = -2; script.accX = 0; script.accY = -0.15; break;
        }
        this.c_content.addChild(enemy);
        this._arrEnemy.push(script);
    },

    // 返回 -0.5 ~ 0.5
    getRandSpeed: function(rate) {
        var rand = Math.random() - 0.5;
        if (-rate < rand && rand < rate) {
            rand = rand < 0 ? -rate : rate;
        }
        return rand;
    },

    addFoods: function(x, y, count) {
        while(count > 0) {
            -- count;
            this.addFoodEach(x, y);
        }
    },

    addCoins: function(x, y, count) {
        while(count > 0) {
            -- count;
            this.addCoinEach(x, y);
        }
    },

    addFoodEach: function(x, y) {
        if (this._pause) {
            return;
        }
        var tp = Macro.tp_bullet_food + parseInt(4 * Math.random()) + 1;
        var target = this.getPoolNode(tp);
        if (!target) {
            return;
        }
        var script = target.getComponent(Macro.script_food);
        if (!script) {
            return;
        }
        script.tp = tp;
        script.x = x;
        script.y = y;
        script.speedX = this.getRandSpeed(0.15) * 6;
        script.speedY = this.getRandSpeed(0.15) * 6;
        script.main = this;
        script.prepare();
        this.c_content.addChild(target);
        this._arrFood.push(script);
    },

    addCoinEach: function(x, y) {
        if (this._pause) {
            return;
        }
        var tp = Macro.tp_coin;
        var target = this.getPoolNode(tp);
        if (!target) {
            return;
        }
        var script = target.getComponent(Macro.script_coin);
        if (!script) {
            return;
        }
        script.tp = tp;
        script.x = x;
        script.y = y;
        script.speedX = this.getRandSpeed(0.15) * 3;
        script.speedY = (this.getRandSpeed() + 0.51) * 4;
        script.accX = 0;
        script.accY = -0.3;
        script.main = this;
        script.prepare();
        this.c_content.addChild(target);
        this._arrCoin.push(script);
    },

    addBulletPlayer: function(attack, x, y, index) {
        if (attack < 1) { attack = 1; }
        if (attack > 9) { attack = 9; }
        this.addBulletEach(
            Macro.tp_bullet_player + attack,
            'Num1/' + attack,
            1 + 0.05 * attack,
            x, y + 40, index, 20, 5,
            this._arrBulletPlayer
        );
    },


    addBulletEnemy: function(attack, x, y, index) {
        if (attack < 1) { attack = 1; }
        if (attack > 9) { attack = 9; }
        this.addBulletEach(
            Macro.tp_bullet_enemy + attack,
            'Num2/' + attack,
            1.2 + 0.5 * attack,
            x, y - 20, index, -8, 20,
            this._arrBulletEnemy
        );
    },

    addBulletEach: function(tp, path, scale, x, y, index, speedY, offsetInv, arrList) {
        if (this._pause) {
            return;
        }
        var target = this.getPoolNode(tp);
        if (!target) {
            return;
        }
        var script = target.getComponent(Macro.script_bullet);
        if (!script) {
            return;
        }
        script.tp = tp;
        script.speedY = speedY;
        script.len = 5 * scale;
        script.main = this;
        script.prepare();
        arrList.push(script);
        this.c_content.addChild(target);  
        var sp = target.getComponent(cc.Sprite);
        if (sp) {
            script.x = x + index * (offsetInv + target.width) * scale,
            script.y = y;
            script.scale = scale;
            return;
        }
        sp = target.addComponent(cc.Sprite);
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
            sp.spriteFrame = spriteFrame;
            script.x = x + index * (offsetInv + target.width) * scale,
            script.y = y;
            script.scale = scale;
        });
    },

    //---------------------------------------

    getPoolNode: function(tp) {
        var pool = this.getPoolDict(tp);
        if (pool && pool.size() > 0) {
            return pool.get();
        }
        var prefab = null;
        var node = null;
        switch (tp){
            case 1: prefab = this.c_prefabEnemy1; break;
            case 2: prefab = this.c_prefabEnemy2; break;
            case 3: prefab = this.c_prefabEnemy3; break;
            case 4: prefab = this.c_prefabEnemy4; break;
            case 5: prefab = this.c_prefabEnemy5; break;
            case 101: 
            case 102: 
            case 103: 
            case 104: 
            case 105: 
            case 106: 
            case 107: 
            case 108: 
            case 109: prefab = this.c_prefabBullet; break;
            case 201: prefab = this.c_prefabfood1; break;
            case 202: prefab = this.c_prefabfood2; break;
            case 203: prefab = this.c_prefabfood3; break;
            case 204: prefab = this.c_prefabfood4; break;
            case 301: 
            case 302: 
            case 303: 
            case 304: 
            case 305: 
            case 306: 
            case 307: 
            case 308:
            case 309: prefab = this.c_prefabBullet; break;
            case Macro.tp_coin: prefab = this.c_prefabCoin; break;
        }
        if (prefab) {
            node = cc.instantiate(prefab);
        }
        return node;
    },

    setPoolNode: function(node, tp) {
        var pool = this.getPoolDict(tp);
        if (pool) {
            pool.put(node);
        }
    },
    
    getPoolDict: function(tp) {
        if (!tp) {
            return null;
        }
        var pool = this._dictPool[tp];
        if (!pool) {
            pool = new cc.NodePool();
            this._dictPool[tp] = pool;
        }
        return pool;
    },

    evtRestart: function() {
        this.c_fail.active = false;
        this.clear();
    },
});
