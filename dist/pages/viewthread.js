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

var Viewthread = function (_wepy$page) {
    _inherits(Viewthread, _wepy$page);

    function Viewthread() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Viewthread);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Viewthread.__proto__ || Object.getPrototypeOf(Viewthread)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '17173有料社区'
        }, _this.data = {
            avatar: 'https://i.17173cdn.com/avatar/YWxqaGBf/85/ed/f3/33608217/small.jpg',
            floorMap: ['楼主', '沙发', '板凳', '地板']
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Viewthread, [{
        key: 'onLoad',
        value: function onLoad(params) {
            var that = this;
            var urls = this.data.urls = this.$parent.globalData.urls;
            _wepy2.default.request({
                url: urls.viewthread + encodeURIComponent('&tid=' + params.tid),
                success: function success(d) {
                    // console.log(d)
                    var varibles = d.data.data.Variables;
                    that.setData({
                        thread: varibles.thread,
                        title: varibles.thread.subject,
                        list: varibles.postlist,
                        views: varibles.thread.views,
                        replies: varibles.thread.replies,
                        forum: params.forum,
                        fid: varibles.fid
                    });
                }
            });
        }
    }]);

    return Viewthread;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Viewthread , 'pages/viewthread'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXd0aHJlYWQuanMiXSwibmFtZXMiOlsiVmlld3RocmVhZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXZhdGFyIiwiZmxvb3JNYXAiLCJtZXRob2RzIiwicGFyYW1zIiwidGhhdCIsInVybHMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJ2aWV3dGhyZWFkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidGlkIiwic3VjY2VzcyIsInZhcmlibGVzIiwiZCIsIlZhcmlhYmxlcyIsInNldERhdGEiLCJ0aHJlYWQiLCJ0aXRsZSIsInN1YmplY3QiLCJsaXN0IiwicG9zdGxpc3QiLCJ2aWV3cyIsInJlcGxpZXMiLCJmb3J1bSIsImZpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIQyxvQkFBUSxvRUFETDtBQUVIQyxzQkFBVSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUZQLFMsUUFJUEMsTyxHQUFVLEU7Ozs7OytCQUVIQyxNLEVBQVE7QUFDWCxnQkFBSUMsT0FBTyxJQUFYO0FBQ0EsZ0JBQUlDLE9BQU8sS0FBS04sSUFBTCxDQUFVTSxJQUFWLEdBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkYsSUFBcEQ7QUFDQSwyQkFBS0csT0FBTCxDQUFhO0FBQ1RDLHFCQUFLSixLQUFLSyxVQUFMLEdBQWtCQyxtQkFBbUIsVUFBVVIsT0FBT1MsR0FBcEMsQ0FEZDtBQUVUQyx5QkFBUyxvQkFBSztBQUNWO0FBQ0Esd0JBQUlDLFdBQVdDLEVBQUVoQixJQUFGLENBQU9BLElBQVAsQ0FBWWlCLFNBQTNCO0FBQ0FaLHlCQUFLYSxPQUFMLENBQWE7QUFDVEMsZ0NBQVFKLFNBQVNJLE1BRFI7QUFFVEMsK0JBQU9MLFNBQVNJLE1BQVQsQ0FBZ0JFLE9BRmQ7QUFHVEMsOEJBQU1QLFNBQVNRLFFBSE47QUFJVEMsK0JBQU9ULFNBQVNJLE1BQVQsQ0FBZ0JLLEtBSmQ7QUFLVEMsaUNBQVNWLFNBQVNJLE1BQVQsQ0FBZ0JNLE9BTGhCO0FBTVRDLCtCQUFPdEIsT0FBT3NCLEtBTkw7QUFPVEMsNkJBQUtaLFNBQVNZO0FBUEwscUJBQWI7QUFTSDtBQWRRLGFBQWI7QUFnQkg7Ozs7RUE3Qm1DLGVBQUtDLEk7O2tCQUF4Qi9CLFUiLCJmaWxlIjoidmlld3RocmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3dGhyZWFkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJzE3MTcz5pyJ5paZ56S+5Yy6J1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBhdmF0YXI6ICdodHRwczovL2kuMTcxNzNjZG4uY29tL2F2YXRhci9ZV3hxYUdCZi84NS9lZC9mMy8zMzYwODIxNy9zbWFsbC5qcGcnLFxuICAgICAgICAgICAgZmxvb3JNYXA6IFsn5qW85Li7JywgJ+aymeWPkScsICfmnb/lh7MnLCAn5Zyw5p2/J11cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGxldCB1cmxzID0gdGhpcy5kYXRhLnVybHMgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxzO1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHVybHMudmlld3RocmVhZCArIGVuY29kZVVSSUNvbXBvbmVudCgnJnRpZD0nICsgcGFyYW1zLnRpZCksXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YXJpYmxlcyA9IGQuZGF0YS5kYXRhLlZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZDogdmFyaWJsZXMudGhyZWFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHZhcmlibGVzLnRocmVhZC5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogdmFyaWJsZXMucG9zdGxpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3czogdmFyaWJsZXMudGhyZWFkLnZpZXdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGllczogdmFyaWJsZXMudGhyZWFkLnJlcGxpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3J1bTogcGFyYW1zLmZvcnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlkOiB2YXJpYmxlcy5maWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19