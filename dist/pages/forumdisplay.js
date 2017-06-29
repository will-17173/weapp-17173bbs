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

var Forumdisplay = function (_wepy$page) {
    _inherits(Forumdisplay, _wepy$page);

    function Forumdisplay() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Forumdisplay);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Forumdisplay.__proto__ || Object.getPrototypeOf(Forumdisplay)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '17173有料社区'
        }, _this.data = {
            avatar: 'https://i.17173cdn.com/avatar/YWxqaGBf/85/ed/f3/33608217/small.jpg'
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Forumdisplay, [{
        key: 'onLoad',
        value: function onLoad(params) {
            var that = this;
            var urls = this.data.urls = this.$parent.globalData.urls;
            this.setData({
                title: params.title
            });
            _wepy2.default.request({
                url: urls.forumdisplay + encodeURIComponent('&fid=' + params.fid),
                success: function success(d) {
                    that.setData({
                        list: d.data.data.Variables.forum_threadlist
                    });
                }
            });
        }
    }]);

    return Forumdisplay;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Forumdisplay , 'pages/forumdisplay'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtZGlzcGxheS5qcyJdLCJuYW1lcyI6WyJGb3J1bWRpc3BsYXkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImF2YXRhciIsIm1ldGhvZHMiLCJwYXJhbXMiLCJ0aGF0IiwidXJscyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic2V0RGF0YSIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsImZvcnVtZGlzcGxheSIsImVuY29kZVVSSUNvbXBvbmVudCIsImZpZCIsInN1Y2Nlc3MiLCJsaXN0IiwiZCIsIlZhcmlhYmxlcyIsImZvcnVtX3RocmVhZGxpc3QiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztzTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQU87QUFDSEMsb0JBQVE7QUFETCxTLFFBR1BDLE8sR0FBVSxFOzs7OzsrQkFFSEMsTSxFQUFRO0FBQ1gsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBLGdCQUFJQyxPQUFPLEtBQUtMLElBQUwsQ0FBVUssSUFBVixHQUFpQixLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JGLElBQXBEO0FBQ0EsaUJBQUtHLE9BQUwsQ0FBYTtBQUNUQyx1QkFBT04sT0FBT007QUFETCxhQUFiO0FBR0EsMkJBQUtDLE9BQUwsQ0FBYTtBQUNUQyxxQkFBS04sS0FBS08sWUFBTCxHQUFvQkMsbUJBQW1CLFVBQVVWLE9BQU9XLEdBQXBDLENBRGhCO0FBRVRDLHlCQUFTLG9CQUFLO0FBQ1ZYLHlCQUFLSSxPQUFMLENBQWE7QUFDVFEsOEJBQU1DLEVBQUVqQixJQUFGLENBQU9BLElBQVAsQ0FBWWtCLFNBQVosQ0FBc0JDO0FBRG5CLHFCQUFiO0FBR0g7QUFOUSxhQUFiO0FBUUg7Ozs7RUF2QnFDLGVBQUtDLEk7O2tCQUExQnZCLFkiLCJmaWxlIjoiZm9ydW1kaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J1bWRpc3BsYXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnMTcxNzPmnInmlpnnpL7ljLonXG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vaS4xNzE3M2Nkbi5jb20vYXZhdGFyL1lXeHFhR0JmLzg1L2VkL2YzLzMzNjA4MjE3L3NtYWxsLmpwZydcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgbGV0IHVybHMgPSB0aGlzLmRhdGEudXJscyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybHM7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBwYXJhbXMudGl0bGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogdXJscy5mb3J1bWRpc3BsYXkgKyBlbmNvZGVVUklDb21wb25lbnQoJyZmaWQ9JyArIHBhcmFtcy5maWQpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogZC5kYXRhLmRhdGEuVmFyaWFibGVzLmZvcnVtX3RocmVhZGxpc3RcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19