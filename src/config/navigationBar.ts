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
		src: '/logo.svg',
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
		},
		{ name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: 'Cotizar Proyecto', link: '/contact', style: 'primary', size: 'lg' }]
}
