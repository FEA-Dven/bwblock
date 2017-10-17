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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.data = {
      mydata: [],
      hide: true,
      listIndex: '',
      itemIndex: '',
      score: 0,
      timer: '',
      message: '你输了!'
    }, _this.computed = {}, _this.methods = {
      click: function click(event) {
        this.itemIndex = event.currentTarget.dataset.index;
      },
      listClick: function listClick(e) {
        this.listIndex = e.currentTarget.dataset.index;
        if (this.mydata[this.listIndex][this.itemIndex].type == true) {
          this.mydata[this.listIndex][this.itemIndex] = { type: false };
          this.score += 1;
        }
      },
      restart: function restart() {
        this.hide = true;
        this.mydata = [];
        var num = Math.floor(Math.random() * 4);
        var obj = { type: false };
        var data = [];
        for (var i = 0; i < 4; i++) {
          data.push(obj);
        }
        data[num] = { type: true };
        this.mydata.push(data);
        this.addData();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var num = Math.floor(Math.random() * 4);
      var obj = { type: false };
      var data = [];
      for (var i = 0; i < 4; i++) {
        data.push(obj);
      }
      data[num] = { type: true };
      this.mydata.push(data);
      this.addData();
    }
  }, {
    key: 'addData',
    value: function addData() {
      var self = this;
      this.timer = setInterval(function () {
        var num = Math.floor(Math.random() * 4);
        var obj = { type: false };
        var data = [];
        for (var i = 0; i < 4; i++) {
          data.push(obj);
        }
        data[num] = { type: true };
        self.mydata.unshift(data);
        self.$apply();
        self.gameOver();
      }, 400);
    }
  }, {
    key: 'gameOver',
    value: function gameOver() {
      var state = void 0;
      var self = this;
      if (this.mydata.length > 4) {
        this.mydata[this.mydata.length - 1].map(function (item) {
          if (item.type === true) {
            self.continue = false;
            clearInterval(self.timer);
            self.hide = false;
            self.$apply();
          }
        });
        this.mydata.splice(this.mydata.length - 1, 1);
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJteWRhdGEiLCJoaWRlIiwibGlzdEluZGV4IiwiaXRlbUluZGV4Iiwic2NvcmUiLCJ0aW1lciIsIm1lc3NhZ2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImxpc3RDbGljayIsImUiLCJ0eXBlIiwicmVzdGFydCIsIm51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9iaiIsImkiLCJwdXNoIiwiYWRkRGF0YSIsInNlbGYiLCJzZXRJbnRlcnZhbCIsInVuc2hpZnQiLCIkYXBwbHkiLCJnYW1lT3ZlciIsInN0YXRlIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImNvbnRpbnVlIiwiY2xlYXJJbnRlcnZhbCIsInNwbGljZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNOQyxjQUFPLEVBREQ7QUFFTkMsWUFBSyxJQUZDO0FBR05DLGlCQUFVLEVBSEo7QUFJTkMsaUJBQVUsRUFKSjtBQUtOQyxhQUFNLENBTEE7QUFNTkMsYUFBTSxFQU5BO0FBT05DLGVBQVE7QUFQRixLLFFBVVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNGQyxLQURFLEVBQ0k7QUFDVixhQUFLUCxTQUFMLEdBQWlCTyxNQUFNQyxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsS0FBN0M7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUVDLENBSkYsRUFJSTtBQUNWLGFBQUtiLFNBQUwsR0FBaUJhLEVBQUVKLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUF6QztBQUNBLFlBQUcsS0FBS2Is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RUFBd0MsQ0FBeEM7QUFFRDtBQUNGOzs7O0VBckZnQyxlQUFLTSxJOztrQkFBbkIxQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgIG15ZGF0YTpbXSxcclxuICAgICBoaWRlOnRydWUsXHJcbiAgICAgbGlzdEluZGV4OicnLFxyXG4gICAgIGl0ZW1JbmRleDonJyxcclxuICAgICBzY29yZTowLFxyXG4gICAgIHRpbWVyOicnLFxyXG4gICAgIG1lc3NhZ2U6J+S9oOi+k+S6hiEnXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2xpY2soZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICB9LFxyXG4gICAgICBsaXN0Q2xpY2soZSl7XHJcbiAgICAgICAgdGhpcy5saXN0SW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICBpZih0aGlzLm15ZGF0YVt0aGlzLmxpc3RJbmRleF1bdGhpcy5pdGVtSW5kZXhdLnR5cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLm15ZGF0YVt0aGlzLmxpc3RJbmRleF1bdGhpcy5pdGVtSW5kZXhdID0ge3R5cGU6ZmFsc2V9O1xyXG4gICAgICAgICAgdGhpcy5zY29yZSArPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZXN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5oaWRlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubXlkYXRhID0gW11cclxuICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgICBsZXQgb2JqID0ge3R5cGU6ZmFsc2V9XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgIGRhdGEucHVzaChvYmopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGFbbnVtXSA9IHt0eXBlOnRydWV9XHJcbiAgICAgICAgdGhpcy5teWRhdGEucHVzaChkYXRhKVxyXG4gICAgICAgIHRoaXMuYWRkRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxyXG4gICAgICBsZXQgb2JqID0ge3R5cGU6ZmFsc2V9XHJcbiAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgIGZvcih2YXIgaT0wO2k8NDtpKyspe1xyXG4gICAgICAgIGRhdGEucHVzaChvYmopXHJcbiAgICAgIH1cclxuICAgICAgZGF0YVtudW1dID0ge3R5cGU6dHJ1ZX1cclxuICAgICAgdGhpcy5teWRhdGEucHVzaChkYXRhKVxyXG4gICAgICB0aGlzLmFkZERhdGEoKTtcclxuICAgIH1cclxuICAgIGFkZERhdGEoKXtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcclxuICAgICAgICAgIGxldCBvYmogPSB7dHlwZTpmYWxzZX1cclxuICAgICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgICBmb3IodmFyIGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKG9iailcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRhdGFbbnVtXSA9IHt0eXBlOnRydWV9XHJcbiAgICAgICAgICBzZWxmLm15ZGF0YS51bnNoaWZ0KGRhdGEpXHJcbiAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH0sNDAwKVxyXG4gICAgfVxyXG4gICAgZ2FtZU92ZXIoKXtcclxuICAgICAgbGV0IHN0YXRlO1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgaWYodGhpcy5teWRhdGEubGVuZ3RoPjQpe1xyXG4gICAgICAgIHRoaXMubXlkYXRhW3RoaXMubXlkYXRhLmxlbmd0aC0xXS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICBpZihpdGVtLnR5cGU9PT10cnVlKXtcclxuICAgICAgICAgICAgc2VsZi5jb250aW51ZSA9ICBmYWxzZVxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHNlbGYudGltZXIpXHJcbiAgICAgICAgICAgIHNlbGYuaGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm15ZGF0YS5zcGxpY2UodGhpcy5teWRhdGEubGVuZ3RoLTEsMSlcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19