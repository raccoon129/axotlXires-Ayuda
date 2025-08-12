// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

//Aqui hay que meterle los estilos de toda la app



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: './src/assets/iconCabezaAjoloteDark.png',
			title: 'Ayuda para Axotl Xires',
			customCss: [
				// Ruta relativa al archivo de estilos personalizados
				'./src/styles/custom.css',
			],
			logo: {
				src: './src/assets/logoMorado2.png',
			  },
			social: {
				
				linkedin: 'https://www.linkedin.com/company/axotl-xires/',
				facebook: 'https://www.facebook.com/profile.php?id=61569988029422',
				instagram: 'https://instagram.com/axotlxires'
			},
			sidebar: [
				{
					label: 'Introducción',
					items: [
						{ label: '¿Qué es Axotl Xires?', slug: 'que-es-axotl-xires' },
						{ label: 'Propósito y Visión', slug: 'proposito-vision' },
					],
				},
				{
					label: 'Guías de Usuario',
					items: [
						{ label: 'Registro e Inicio de Sesión', slug: 'registro-inicio-sesion' },
						{ label: 'Navegación', slug: 'navegacion' },
					],
				},
				{
					label: 'Publicación de Artículos',
					items: [
						{ label: 'Creación de Artículos', slug: 'crear-articulos' },
						{ label: 'Proceso de Revisión', slug: 'proceso-revision' },
					],
				},
				{
					label: 'Comunidad y Normativas',
					items: [
						{ label: 'Interacción con la Comunidad', slug: 'interaccion-comunidad' },
						{ label: 'Normas de Contenido', slug: 'normas-contenido' },
					],
				},
				{
					label: 'Políticas y Soporte',
					items: [
						{ label: 'Política de Privacidad', slug: 'politica-privacidad' },
						{ label: 'Términos y Condiciones', slug: 'terminos' },
						{ label: 'Copyright', slug: 'copyright' },
						{ label: 'Preguntas Frecuentes', slug: 'preguntas-frecuentes' },
					],
				},
			],
		}),
	],
});
