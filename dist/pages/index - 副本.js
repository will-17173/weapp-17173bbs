'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            this.$parent.getUserInfo(function (userInfo) {
                if (userInfo) {
                    self.userInfo = userInfo;
                }
                self.normalTitle = '标题已被修改';
                self.setTimeoutTitle = '标题三秒后会被修改';
                setTimeout(function () {
                    self.setTimeoutTitle = '到三秒了';
                    self.$apply();
                }, 3000);
                self.$apply();
            });
        }
    }]);

    return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.config = {
        navigationBarTitleText: 'test'
    };
    this.$props = { "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } }, "counter1": { "bindindex-emit": "counterEmit" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
    this.$events = {};
    this.components = {
        panel: _panel2.default,
        counter1: _counter2.default,
        counter2: _counter2.default,
        list: _list2.default,
        group: _group2.default,
        toast: _wepyComToast2.default
    };
    this.mixins = [_test2.default];
    this.data = {
        mynum: 20,
        userInfo: {
            nickName: '加载中...'
        },
        normalTitle: '原始标题',
        setTimeoutTitle: '标题三秒后会被修改',
        count: 0,
        netrst: '',
        groupList: [{
            id: 1,
            name: '点击改变',
            list: [{
                childid: '1.1',
                childname: '子项，点我改变'
            }, {
                childid: '1.2',
                childname: '子项，点我改变'
            }, {
                childid: '1.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 2,
            name: '点击改变',
            list: [{
                childid: '2.1',
                childname: '子项，点我改变'
            }, {
                childid: '2.2',
                childname: '子项，点我改变'
            }, {
                childid: '2.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 3,
            name: '点击改变',
            list: [{
                childid: '3.1',
                childname: '子项，点我改变'
            }]
        }]
    };
    this.computed = {
        now: function now() {
            return +new Date();
        }
    };
    this.methods = {
        plus: function plus() {
            this.mynum++;
        },
        toast: function toast() {
            var promise = this.$invoke('toast', 'show', {
                title: '自定义标题',
                img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            });
            promise.then(function (d) {
                console.log('toast done');
            });
        },
        tap: function tap() {
            console.log('do noting from ' + this.$name);
        },
        communicate: function communicate() {
            console.log(this.$name + ' tap');
            this.$invoke('counter2', 'minus', 45, 6);
            this.$invoke('counter1', 'plus', 45, 6);
            this.$broadcast('index-broadcast', 1, 3, 4);
        },
        request: function request() {
            var self = this;
            var i = 10;
            var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
            while (i--) {
                _wepy2.default.request({
                    url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
                    success: function success(d) {
                        self.netrst += d.data + '.';
                        self.$apply();
                    }
                });
            }
        },
        counterEmit: function counterEmit() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
    this.events = {
        'index-emit': function indexEmit() {
            var _ref3;

            var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
}, _temp2);
exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4IC0g5Ymv5pysLmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBa0hSO0FBQ0wsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBLGlCQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBU0MsUUFBVCxFQUFtQjtBQUN4QyxvQkFBSUEsUUFBSixFQUFjO0FBQ1ZILHlCQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIO0FBQ0RILHFCQUFLSSxXQUFMLEdBQW1CLFFBQW5CO0FBQ0FK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LGlCQUFxQ1MsT0FBTzFCLElBQTVDLGNBQXlEMEIsT0FBT0UsTUFBUCxDQUFjWCxLQUF2RTtBQUNIO0FBSkksSzs7a0JBNUdROUMsSyIsImZpbGUiOiJpbmRleCAtIOWJr+acrC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0J1xuICAgIGltcG9ydCBQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL3BhbmVsJ1xuICAgIGltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY291bnRlcidcbiAgICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcbiAgICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gICAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgICAgICB9XG4gICAgICAgJHByb3BzID0ge1wiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9LFwidi1iaW5kOmluZGV4YS5vbmNlXCI6e1wiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpbmRleFwifX0sXCJjb3VudGVyMVwiOntcImJpbmRpbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgcGFuZWw6IFBhbmVsLFxuICAgICAgICAgICAgY291bnRlcjE6IENvdW50ZXIsXG4gICAgICAgICAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICAgICAgICAgIGxpc3Q6IExpc3QsXG4gICAgICAgICAgICBncm91cDogR3JvdXAsXG4gICAgICAgICAgICB0b2FzdDogVG9hc3RcbiAgICAgICAgfVxuICAgICAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbXludW06IDIwLFxuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICAgICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICBuZXRyc3Q6ICcnLFxuICAgICAgICAgICAgZ3JvdXBMaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBub3coKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHBsdXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teW51bSsrXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9hc3QoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJyxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhcCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tbXVuaWNhdGUoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcbiAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG4gICAgICAgICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcXVlc3QoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICAgICAgICAgIGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19