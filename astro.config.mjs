// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

//Aqui hay que meterle los estilos de toda la app



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Axotl Xires - Ayuda',
			social: {
				linkedin: 'https://github.com/withastro/starlight',
				facebook: 'https://facebook.com/withastro',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
