const LycheePrimeVueConfig = {
	semantic: {
		focusRing: {
			width: "1px",
			style: "solid",
			color: "{primary.color}",
			offset: "2px",
			shadow: "none",
		},
		disabledOpacity: "0.6",
		iconSize: "1rem",
		anchorGutter: "2px",
		primary: {
			50: "{sky.50}",
			100: "{sky.100}",
			200: "{sky.200}",
			300: "{sky.300}",
			400: "{sky.400}",
			500: "{sky.500}",
			600: "{sky.600}",
			700: "{sky.700}",
			800: "{sky.800}",
			900: "{sky.900}",
			950: "{sky.950}",
		},
		formField: {
			paddingX: "0.75rem",
			paddingY: "0.5rem",
			borderRadius: "{border.radius.md}",
			focusRing: {
				width: "0",
				style: "none",
				offset: "0",
				shadow: "none",
			},
		},
		navigation: {
			list: { gap: 0 },
		},
	},
	colorScheme: {
		light: {
			surface: {
				0: "#ffffff",
				50: "{slate.50}",
				100: "{slate.100}",
				200: "{slate.200}",
				300: "{slate.300}",
				400: "{slate.400}",
				500: "{slate.500}",
				600: "{slate.600}",
				700: "{slate.700}",
				800: "{slate.800}",
				900: "{slate.900}",
				950: "{slate.950}",
			},
			primary: {
				color: "{primary.500}",
				contrastColor: "#ffffff",
				hoverColor: "{primary.600}",
				activeColor: "{primary.700}",
			},
			highlight: {
				background: "{primary.50}",
				focusBackground: "{primary.100}",
				color: "{primary.700}",
				focusColor: "{primary.800}",
			},
			formField: {
				// background: '{surface.0}',
				disabledBackground: "{surface.200}",
				filledBackground: "{surface.50}",
				filledFocusBackground: "{surface.50}",
				// borderColor: '{surface.300}',
				hoverBorderColor: "{surface.400}",
				focusBorderColor: "{primary.color}",
				invalidBorderColor: "{red.400}",
				color: "{surface.700}",
				disabledColor: "{surface.500}",
				placeholderColor: "{surface.500}",
				floatLabelColor: "{surface.500}",
				floatLabelFocusColor: "{surface.500}",
				floatLabelInvalidColor: "{red.400}",
				iconColor: "{surface.400}",
				shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)",
			},
			text: {
				color: "{surface.700}",
				hoverColor: "{surface.800}",
				mutedColor: "{surface.500}",
				hoverMutedColor: "{surface.600}",
			},
			content: {
				background: "{surface.0}",
				hoverBackground: "{surface.100}",
				borderColor: "{surface.200}",
				color: "{text.color}",
				hoverColor: "{text.hover.color}",
			},
		},
		dark: {
			surface: {
				0: "#ffffff",
				50: "{zinc.50}",
				100: "{zinc.100}",
				200: "{zinc.200}",
				300: "{zinc.300}",
				400: "{zinc.400}",
				500: "{zinc.500}",
				600: "{zinc.600}",
				700: "{zinc.700}",
				800: "{zinc.800}",
				900: "{zinc.900}",
				950: "{zinc.950}",
			},
			primary: {
				color: "{primary.400}",
				contrastColor: "{surface.900}",
				hoverColor: "{primary.300}",
				activeColor: "{primary.200}",
			},
			highlight: {
				background: "color-mix(in srgb, {primary.400}, transparent 84%)",
				focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
				color: "rgba(255,255,255,.87)",
				focusColor: "rgba(255,255,255,.87)",
			},
			formField: {
				background: "{surface.950}",
				disabledBackground: "{surface.700}",
				filledBackground: "{surface.800}",
				filledFocusBackground: "{surface.800}",
				borderColor: "{surface.700}",
				hoverBorderColor: "{surface.600}",
				focusBorderColor: "{primary.color}",
				invalidBorderColor: "{red.300}",
				color: "{surface.0}",
				disabledColor: "{surface.400}",
				placeholderColor: "{surface.300}",
				floatLabelColor: "{surface.300}",
				floatLabelFocusColor: "{surface.300}",
				floatLabelInvalidColor: "{red.300}",
				iconColor: "{surface.400}",
				shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)",
			},
			text: {
				color: "{surface.0}",
				hoverColor: "{surface.0}",
				mutedColor: "{surface.400}",
				hoverMutedColor: "{surface.200}",
			},
			select: {
				color: "{red.400}",
			},
			content: {
				background: "{surface.900}",
				hoverBackground: "{surface.800}",
				borderColor: "{surface.700}",
				color: "{text.color}",
				hoverColor: "{text.hover.color}",
			},
		},
	},
	components: {
		button: {
			padding: {
				x: "0.75rem",
				y: "0.75rem",
			},
			colorScheme: {
				light: {
					contrast: {
						color: "{primary.500}",
						background: "transparent",
						hover: {
							background: "{primary.500}",
							color: "{surface.0}",
						},
					},
					danger: {
						color: "{surface.0}",
						background: "{red.600}",
						hover: {
							background: "{red.700}",
							color: "{surface.0}",
						},
					},
				},
				dark: {
					primary: {
						color: "{surface.0}",
						background: "{primary.500}",
						hover: {
							background: "{primary.600}",
							color: "{surface.0}",
						},
						active: {
							background: "{primary.700}",
							color: "{surface.0}",
						},
					},
					contrast: {
						// Primary with transparent background
						color: "{primary.500}",
						background: "transparent",
						hover: {
							background: "{primary.500}",
							color: "{surface.0}",
						},
						active: {
							background: "{primary.500}",
							color: "{surface.0}",
						},
					},
					secondary: {
						// gray with transparent background
						color: "{text.mutedColor}",
						background: "transparent",
						hover: {
							background: "color-mix(in srgb, {surface.700}, transparent 76%)",
							color: "{red.700}",
						},
						active: {
							background: "color-mix(in srgb, {surface.700}, transparent 76%)",
							color: "{red.700}",
						},
					},
					info: {
						color: "{text.mutedColor}",
						background: "transparent",
						hover: {
							background: "color-mix(in srgb, {surface.700}, transparent 76%)",
							color: "{text.hoverMutedColor}",
						},
						active: {
							background: "color-mix(in srgb, {surface.700}, transparent 76%)",
							color: "{text.hoverMutedColor}",
						},
					},
					danger: {
						color: "{surface.0}",
						background: "{red.800}",
						hover: {
							background: "{red.700}",
							color: "{surface.0}",
						},
					},
				},
			},
		},
		checkbox: {
			colorScheme: {
				light: {},
				dark: {
					background: "{surface.800}",
					border: {
						color: "{surface.700}",
					},
				},
			},
		},
		divider: {
			horizontal: {
				margin: "0.25rem 0",
			},
			colorScheme: {
				light: {
					boderColor: "{surface.300}",
				},
				dark: {
					borderColor: "{surface.900}",
				},
			},
		},
		progressbar: {
			height: "0.25rem",
			colorScheme: {
				light: {
					background: "{surface.300}",
				},
				dark: {
					background: "{surface.700}",
				},
			},
		},
		progressspinner: {
			colorScheme: {
				light: {},
				dark: {
					color: {
						1: "{primary.400}",
						2: "{primary.500}",
						3: "{primary.600}",
						4: "{primary.700}",
					},
				},
			},
		},
		toggleswitch: {
			width: "2rem",
			height: "1rem",
			gap: "0.25rem",
			handle: {
				size: "0.65rem",
			},
			colorScheme: {
				dark: {
					disabled: {
						background: "{surface.800}",
					},
					handle: {
						disabled: {
							background: "{surface.700}",
						},
					},
				},
			},
		},
		toolbar: {
			root: {
				padding: "0 0.5rem",
			},
			colorScheme: {
				light: {
					root: {
						background: "{surface.50}",
					},
				},
				dark: {
					root: {
						// background: "linear-gradient(to bottom, {surface.800}, {surface.900});",
						background: "{surface.800}",
						color: "{surface.0}",
					},
				},
			},
		},
		dialog: {
			colorScheme: {
				light: {
					root: {},
				},
				dark: {
					root: {
						background: "{surface.800}",
						color: "{surface.0}",
					},
				},
			},
		},
		scrollpanel: {
			colorScheme: {
				light: {},
				dark: {
					bar: {
						background: "{surface.700}",
					},
				},
			},
		},
		panel: {
			colorScheme: {
				light: {
					root: {
						border: {
							radius: 0,
						},
					},
					header: {
						color: "{surface.700}",
					},
				},
				dark: {
					root: {
						border: {
							radius: 0,
						},
						background: "{surface.900}",
						color: "{surface.0}",
					},
					header: {
						color: "{surface.300}",
					},
				},
			},
		},
		datatable: {
			header: {
				background: "transparent",
			},
			row: {
				background: "transparent",
			},
			colorScheme: {
				light: {
					header: {
						color: "{surface.700}",
					},
					row: {
						color: "{surface.700}",
					},
					bodyCell: {
						border: {
							color: "{surface.300}",
						},
					},
				},
				dark: {
					header: {
						color: "{surface.200}",
						border: {
							color: "{surface.700}",
						},
					},
					row: {
						color: "{surface.300}",
					},
					bodyCell: {
						border: {
							color: "{surface.700}",
						},
					},
				},
			},
		},
		menu: {
			colorScheme: {
				light: {
					root: {
						border: {
							radius: 0,
						},
					},
					item: {
						// color: "{surface.700}",
					},
				},
				dark: {
					root: {
						border: {
							radius: 0,
						},
						background: "transparent",
						// color: "{surface.0}",
					},
					item: {
						// color: "{surface.400}",
						focus: {
							background: "transparent",
							color: "{primary.500}",
						},
					},
				},
			},
		},
		contextmenu: {
			colorScheme: {
				light: {
					// option: {
					// 	color: "{surface.500}",
					// 	focus: {
					// 		background: "linear-gradient({primary.500}, {primary.600})",
					// 		color: "{surface.0}",
					// 	},
					// },
				},
				dark: {
					root: {
						background: "{surface.800}",
						color: "{surface.200}",
						border: {
							color: "{surface.900}",
						},
					},
					item: {
						color: "{surface.400}",
						padding: "0.1rem 0.75rem",
						focus: {
							background: "linear-gradient({primary.500}, {primary.600})",
							color: "{surface.0}",
						},
					},
					// option: {
					// 	color: "{surface.400}",
					// 	focus: {
					// 		background: "linear-gradient({primary.500}, {primary.600})",
					// 		color: "{surface.0}",
					// 	},
					// },
					// overlay: {
					// 	background: "{surface.900}",
					// 	border: {
					// 		color: "{surface.800}",
					// 	},
					// },
					// color: "{surface.300}",
				},
			},
		},
		fieldset: {
			colorScheme: {
				light: {},
				dark: {
					root: {
						borderColor: "{surface.700}",
						background: "{surface.900}",
						color: "{surface.0}",
					},
					legend: {
						background: "{surface.900}",
						hover: {
							background: "{surface.800}",
							color: "{surface.0}",
						},
					},
					"toggle-icon": {
						hover: {
							color: "{primary.500}",
						},
					},
				},
			},
		},
		card: {
			colorScheme: {
				light: {
					root: {
						border: {
							radius: 0,
						},
						background: "{surface.0}",
						color: "{surface.700}",
						shadow: "none",
					},
				},
				dark: {
					root: {
						border: {
							radius: 0,
						},
						background: "{surface.900}",
						color: "{surface.0}",
					},
					subtitle: {
						color: "{surface.400}",
					},
				},
			},
		},
		tabs: {
			tablist: {
				colorScheme: {
					light: {
						background: "transparent",
						border: {
							color: "{surface.300}",
						},
					},
					dark: {
						background: "transparent",
						border: {
							color: "{surface.700}",
						},
					},
				},
			},
			tab: {
				colorScheme: {
					light: {
						background: "transparent",
						border: {
							color: "{surface.300}",
						},
						hover: {
							color: "{primary.600}",
							border: {
								color: "{primary.600}",
							},
						},
					},
					dark: {
						background: "transparent",
						border: {
							color: "{surface.700}",
						},
						hover: {
							color: "{primary.600}",
							border: {
								color: "{primary.600}",
							},
						},
					},
				},
			},
			tabpanel: {
				colorScheme: {
					light: {
						background: "transparent",
					},
					dark: {
						background: "transparent",
					},
				},
			},
		},
		inputtext: {
			background: "transparent",
			border: {
				radius: 0,
			},
			transition: {
				duration: 0,
			},
			shadow: "none",
			colorScheme: {
				light: {
					color: "{surface.700}",
				},
				dark: {
					color: "{surface.300}",
				},
			},
		},
		inputchips: {
			background: "transparent",
			border: {
				radius: 0,
				color: "transparent",
			},
			transition: {
				duration: 0,
			},
			shadow: "none",
			colorScheme: {
				light: {
					color: "{surface.700}",
				},
				dark: {
					color: "{surface.300}",
				},
			},
		},
		select: {
			background: "transparent",
			border: {
				radius: 0,
			},
			option: {
				padding: "0 1rem",
				border: {
					radius: 0,
				},
			},
			transition: {
				duration: 0,
			},
			shadow: "none",
			colorScheme: {
				light: {
					option: {
						color: "{surface.500}",
						focus: {
							background: "linear-gradient({primary.500}, {primary.600})",
							color: "{surface.0}",
						},
					},
				},
				dark: {
					option: {
						color: "{surface.400}",
						focus: {
							background: "linear-gradient({primary.500}, {primary.600})",
							color: "{surface.0}",
						},
					},
					overlay: {
						background: "{surface.900}",
						border: {
							color: "{surface.800}",
						},
					},
					color: "{surface.300}",
				},
			},
		},
		textarea: {
			background: "transparent",
			border: {
				radius: 0,
			},
			transition: {
				duration: 0,
			},
			shadow: "none",
			colorScheme: {
				light: {
					color: "{surface.700}",
				},
				dark: {
					color: "{surface.300}",
				},
			},
		},
	},
};

export default LycheePrimeVueConfig;
