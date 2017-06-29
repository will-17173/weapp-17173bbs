'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
    _inherits(Home, _wepy$page);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '17173有料社区'
        }, _this.data = {
            icon: 'http://images.17173cdn.com/2016/newbbs/2016/11/17/quwei.png'
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            var urls = this.data.urls = this.$parent.globalData.urls;
            _wepy2.default.request({
                url: urls.index,
                success: function success(d) {
                    if (d.statusCode == 200) {
                        that.setData({
                            forumlist: d.data.data.Variables.forumlist
                        });
                    }
                }
            });
        }
    }]);

    return Home;
}(_wepy2.default.page);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4IC0g5Ymv5pysICgyKS5qcyJdLCJuYW1lcyI6WyJIb21lIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpY29uIiwibWV0aG9kcyIsInRoYXQiLCJ1cmxzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJyZXF1ZXN0IiwidXJsIiwiaW5kZXgiLCJzdWNjZXNzIiwiZCIsInN0YXR1c0NvZGUiLCJzZXREYXRhIiwiZm9ydW1saXN0IiwiVmFyaWFibGVzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUdQQyxPLEdBQVUsRTs7Ozs7aUNBR0Q7QUFDTCxnQkFBSUMsT0FBTyxJQUFYO0FBQ0EsZ0JBQUlDLE9BQU8sS0FBS0osSUFBTCxDQUFVSSxJQUFWLEdBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkYsSUFBcEQ7QUFDQSwyQkFBS0csT0FBTCxDQUFhO0FBQ1RDLHFCQUFLSixLQUFLSyxLQUREO0FBRVRDLHlCQUFTLGlCQUFTQyxDQUFULEVBQVk7QUFDakIsd0JBQUdBLEVBQUVDLFVBQUYsSUFBZ0IsR0FBbkIsRUFBdUI7QUFDbkJULDZCQUFLVSxPQUFMLENBQWE7QUFDVEMsdUNBQVdILEVBQUVYLElBQUYsQ0FBT0EsSUFBUCxDQUFZZSxTQUFaLENBQXNCRDtBQUR4Qix5QkFBYjtBQUdIO0FBQ0o7QUFSUSxhQUFiO0FBV0g7Ozs7RUF4QjZCLGVBQUtFLEk7O2tCQUFsQm5CLEkiLCJmaWxlIjoiaW5kZXggLSDlia/mnKwgKDIpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcxNzE3M+acieaWmeekvuWMuidcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWNvbjogJ2h0dHA6Ly9pbWFnZXMuMTcxNzNjZG4uY29tLzIwMTYvbmV3YmJzLzIwMTYvMTEvMTcvcXV3ZWkucG5nJ1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG5cbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIGxldCB1cmxzID0gdGhpcy5kYXRhLnVybHMgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxzO1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHVybHMuaW5kZXgsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICBpZihkLnN0YXR1c0NvZGUgPT0gMjAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ydW1saXN0OiBkLmRhdGEuZGF0YS5WYXJpYWJsZXMuZm9ydW1saXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuIl19