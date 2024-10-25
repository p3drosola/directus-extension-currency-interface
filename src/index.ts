import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'currency',
	name: 'Currency',
	icon: 'paid',
	description: 'Interface for currency',
	component: InterfaceComponent,
	options: [
		{
			field: 'percent',
			name: 'Percent',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				display: 'boolean',
				special: ['cast-boolean'],
			},
			schema: {
				data_type: 'boolean',
				default_value: false,
			},
		},
		{
			field: 'cents',
			name: 'Cents',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				display: 'boolean',
				special: ['cast-boolean'],
			},
			schema: {
				data_type: 'boolean',
				default_value: false,
			},
		},
		{
			field: 'prefix',
			name: 'Prefix',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'system-input-translated-string',
				options: {
					trim: false,
				},
				conditions: [
					{
						name: 'Check',
						rule: {
							_and: [
								{
									percent: {
										_eq: true,
									},
								},
							],
						},
						readonly: true,
						hidden: true,
						options: {
							refreshInterval: 10,
							sortDirection: 'asc',
						},
					},
				],
			},
		},
		{
			field: 'suffix',
			name: 'Suffix',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'system-input-translated-string',
				options: {
					trim: false,
				},
				conditions: [
					{
						name: 'Check',
						rule: {
							_and: [
								{
									percent: {
										_eq: true,
									},
								},
							],
						},
						readonly: true,
						hidden: true,
						options: {
							refreshInterval: 10,
							sortDirection: 'asc',
						},
					},
				],
			},
		},
	],
	types: ['integer', 'bigInteger', 'float', 'decimal', 'string'],
});
