'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaWNvbiIsIm1ldGhvZHMiLCJ0aGF0IiwidXJscyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicmVxdWVzdCIsInVybCIsImluZGV4Iiwic3VjY2VzcyIsImQiLCJzdGF0dXNDb2RlIiwic2V0RGF0YSIsImZvcnVtbGlzdCIsIlZhcmlhYmxlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIQyxrQkFBTTtBQURILFMsUUFHUEMsTyxHQUFVLEU7Ozs7O2lDQUdEO0FBQ0wsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBLGdCQUFJQyxPQUFPLEtBQUtKLElBQUwsQ0FBVUksSUFBVixHQUFpQixLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JGLElBQXBEO0FBQ0EsMkJBQUtHLE9BQUwsQ0FBYTtBQUNUQyxxQkFBS0osS0FBS0ssS0FERDtBQUVUQyx5QkFBUyxpQkFBU0MsQ0FBVCxFQUFZO0FBQ2pCLHdCQUFHQSxFQUFFQyxVQUFGLElBQWdCLEdBQW5CLEVBQXVCO0FBQ25CVCw2QkFBS1UsT0FBTCxDQUFhO0FBQ1RDLHVDQUFXSCxFQUFFWCxJQUFGLENBQU9BLElBQVAsQ0FBWWUsU0FBWixDQUFzQkQ7QUFEeEIseUJBQWI7QUFHSDtBQUNKO0FBUlEsYUFBYjtBQVdIOzs7O0VBeEI2QixlQUFLRSxJOztrQkFBbEJuQixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJzE3MTcz5pyJ5paZ56S+5Yy6J1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpY29uOiAnaHR0cDovL2ltYWdlcy4xNzE3M2Nkbi5jb20vMjAxNi9uZXdiYnMvMjAxNi8xMS8xNy9xdXdlaS5wbmcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICBsZXQgdXJscyA9IHRoaXMuZGF0YS51cmxzID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJscztcclxuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJscy5pbmRleCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkLnN0YXR1c0NvZGUgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcnVtbGlzdDogZC5kYXRhLmRhdGEuVmFyaWFibGVzLmZvcnVtbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=