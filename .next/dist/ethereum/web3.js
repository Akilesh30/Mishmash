'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

	web3 = new _web2.default(window.web3.currentProvider);
} else {
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/cee1aa93745c4d8f8a51b4933f5eced0');

	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFOztBQUV4RUEsUUFBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0EsQ0FIRCxNQUdPO0FBQ04sS0FBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsK0RBQWhDLENBQWY7O0FBRUFMLFFBQU8sa0JBQVNHLFFBQVQsQ0FBUDtBQUNBOztrQkFFY0gsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbnZhciB3ZWIzID0gdm9pZCAwO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xuXG5cdHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcblx0dmFyIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcignaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9jZWUxYWE5Mzc0NWM0ZDhmOGE1MWI0OTMzZjVlY2VkMCcpO1xuXG5cdHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFOztBQUV4RUEsUUFBTyxrQkFBU0MsT0FBT0QsSUFBUCxDQUFZRSxlQUFyQixDQUFQO0FBQ0EsQ0FIRCxNQUdPO0FBQ04sS0FBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsK0RBQWhDLENBQWY7O0FBRUFMLFFBQU8sa0JBQVNHLFFBQVQsQ0FBUDtBQUNBOztrQkFFY0gsSSIsImZpbGUiOiJ1bmtub3duIn0=