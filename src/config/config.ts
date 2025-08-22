// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'CREYPASS - Remodelación y Financiamiento de Interiores',
	siteDescription:
		'CREYPASS ofrece servicios de remodelación residencial y comercial con financiamiento directo. Transformamos espacios con diseño, calidad y planes de pago flexibles hasta 60 meses.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'CREYPASS logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
