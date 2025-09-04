// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'CREYPASS',
		aboutText:
			'Transformamos espacios con diseño, funcionalidad y financiamiento flexible. Remodelación residencial y comercial con planes de pago accesibles hasta 60 meses.',
		logo: {
			src: '/logo_creypass.svg',
			alt: 'CREYPASS - Remodelación y Financiamiento',
			text: 'CREYPASS'
		}
	},
	footerColumns: [
		{
			category: 'Servicios',
			subCategories: [
				{
					subCategory: 'Remodelación Residencial',
					subCategoryLink: '/servicios#residencial'
				},
				{
					subCategory: 'Remodelación Comercial',
					subCategoryLink: '/servicios#comercial'
				},
				{
					subCategory: 'Financiamiento',
					subCategoryLink: '/financiamiento'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				}
			]
		},
		{
			category: 'Nosotros',
			subCategories: [
				{
					subCategory: 'Quiénes Somos',
					subCategoryLink: '/nosotros'
				},
				{
					subCategory: 'Nuestros Valores',
					subCategoryLink: '/valores'
				},
				{
					subCategory: 'Misión y Visión',
					subCategoryLink: '/nosotros#mision'
				}
			]
		},
		{
			category: 'Contacto',
			subCategories: [
				{
					subCategory: 'Cotizar Proyecto',
					subCategoryLink: 'https://wa.me/5217671173175?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20remodelaci%C3%B3n'
				},
				{
					subCategory: 'WhatsApp',
					subCategoryLink: 'https://wa.me/5217671173175'
				}
			]
		}
	],
	subFooter: {
		copywriteText: `© CREYPASS ${new Date().getFullYear()}. Todos los derechos reservados.`
	}
}
