import { ref } from "vue";

type Callbacks = {
	toggleUpload: () => void;
};

export function useContextMenuAlbumAdd(callbacks: Callbacks) {
	const isCreateAlbumOpen = ref(false);
	const isImportLinkOpen = ref(false);

	const addmenu = ref(); // ! Reference to the context menu
	const addMenu = ref([
		{
			label: "lychee.UPLOAD_PHOTO",
			icon: "pi pi-upload",
			callback: callbacks.toggleUpload,
		},
		{
			label: "lychee.IMPORT_LINK",
			icon: "pi pi-link",
			callback: () => (isImportLinkOpen.value = true),
		},
		// {
		// 	label: "lychee.IMPORT_DROPBOX",
		// 	icon: "pi pi-box",
		// 	callback: () => {},
		// },
		{
			label: "lychee.NEW_ALBUM",
			icon: "pi pi-folder",
			callback: () => (isCreateAlbumOpen.value = true),
		},
	]);

	function openAddMenu(event: Event) {
		addmenu.value.show(event);
	}

	return {
		addmenu,
		addMenu,
		isCreateAlbumOpen,
		isImportLinkOpen,
		openAddMenu,
	};
}
