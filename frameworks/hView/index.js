const prefix = 'h';
import echarts from './components/echarts'
import asider from './components/asider'
import navDropdown from './components/navDropdown'
import scrollListen from './components/scrollListen'
const iview = {
	echarts,
	asider,
	"nav-dropdown": navDropdown,
	"scroll-listen": scrollListen,
}
const install = (Vue, opts = {}) => {
	Object.keys(iview).forEach(key => {
		Vue.component((opts.prefix || prefix)+ '-' + key, iview[key]);
	})
}
export default install;