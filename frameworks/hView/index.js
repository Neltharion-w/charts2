const prefix = 'h';
import echarts from './components/echarts'
import asider from './components/asider'
import navDropdown from './components/navDropdown'
const iview = {
	echarts,
	asider,
	"nav-dropdown": navDropdown
}
const install = (Vue, opts = {}) => {
	Object.keys(iview).forEach(key => {
		Vue.component((opts.prefix || prefix)+ '-' + key, iview[key]);
	})
}
export default install;