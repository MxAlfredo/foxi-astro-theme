// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo_creypass.svg',
		alt: 'CREYPASS - Remodelación y Financiamiento',
		text: 'CREYPASS'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Servicios', link: '/servicios' },
		{ name: 'Financiamiento', link: '/financiamiento' },
		{
			name: 'Nosotros',
			link: '#',
			submenu: [
				{ name: 'Quiénes Somos', link: '/nosotros' },
				{ name: 'Nuestros Valores', link: '/valores' },
				{ name: 'FAQ', link: '/faq' }
			]
		}
	],
	navActions: [{ name: 'Cotizar Proyecto', link: 'https://wa.me/5217671173175?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20remodelaci%C3%B3n', style: 'primary', size: 'lg' }]
}
