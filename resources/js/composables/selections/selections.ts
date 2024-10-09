import { modKey, shiftKeyState } from "@/utils/keybindings-utils";
import { computed, ComputedRef, Ref, ref } from "vue";

export function useSelection(
	photos: Ref<{ [key: number]: App.Http.Resources.Models.PhotoResource }>,
	albums:
		| ComputedRef<{ [key: number]: App.Http.Resources.Models.ThumbAlbumResource }>
		| Ref<{ [key: number]: App.Http.Resources.Models.ThumbAlbumResource }>,
) {
	const selectedPhotosIdx = ref([] as number[]);
	const selectedAlbumsIdx = ref([] as number[]);
	const selectedPhoto = computed(() => (selectedPhotosIdx.value.length === 1 ? photos.value[selectedPhotosIdx.value[0]] : undefined));
	const selectedAlbum = computed(() => (selectedAlbumsIdx.value.length === 1 ? albums.value[selectedAlbumsIdx.value[0]] : undefined));
	const selectedPhotos = computed(() =>
		(photos.value as App.Http.Resources.Models.PhotoResource[]).filter((_, idx) => selectedPhotosIdx.value.includes(idx)),
	);
	const selectedAlbums = computed(() =>
		(albums.value as App.Http.Resources.Models.ThumbAlbumResource[]).filter((_, idx) => selectedAlbumsIdx.value.includes(idx)),
	);
	const selectedPhotosIds = computed(() => selectedPhotos.value.map((p) => p.id));
	const selectedAlbumsIds = computed(() => selectedAlbums.value.map((a) => a.id));

	// We save the last clicked index so we can do selections with shift.
	const lastPhotoClicked = ref(undefined as number | undefined);
	const lastAlbumClicked = ref(undefined as number | undefined);

	const isPhotoSelected = (idx: number) => selectedPhotosIdx.value.includes(idx);
	const isAlbumSelected = (idx: number) => selectedAlbumsIdx.value.includes(idx);

	function unselect() {
		selectedAlbumsIdx.value = [];
		selectedPhotosIdx.value = [];
	}

	function addToPhotoSelection(idx: number) {
		selectedPhotosIdx.value.push(idx);
	}
	function removeFromPhotoSelection(idx: number) {
		selectedPhotosIdx.value = selectedPhotosIdx.value.filter((i) => i !== idx);
	}

	function addToAlbumSelection(idx: number) {
		selectedAlbumsIdx.value.push(idx);
	}
	function removeFromAlbumSelection(idx: number) {
		selectedAlbumsIdx.value = selectedAlbumsIdx.value.filter((i) => i !== idx);
	}

	function photoClick(idx: number, e: Event) {
		// clear the Album selection.
		selectedAlbumsIdx.value = [];

		// we do not support CTRL + SHIFT
		if (!modKey().value && !shiftKeyState.value) {
			return;
		}

		// We are able to edit.
		e.preventDefault();
		e.stopPropagation();

		if (modKey().value) {
			handlePhotoCtrl(idx, e);
			return;
		}

		if (shiftKeyState.value) {
			handlePhotoShift(idx, e);
			return;
		}
	}

	function handlePhotoCtrl(idx: number, e: Event) {
		if (isPhotoSelected(idx)) {
			removeFromPhotoSelection(idx);
		} else {
			addToPhotoSelection(idx);
		}
		lastPhotoClicked.value = idx;
	}

	function handlePhotoShift(idx: number, e: Event) {
		if (selectedPhotos.value.length === 0) {
			addToPhotoSelection(idx);
			return;
		}

		// Picture is selected.
		// We remove all pictures from latest click till current idx
		if (isPhotoSelected(idx)) {
			// @ts-expect-error lastPhotoClicked is always defined here
			const idx_min = Math.min(lastPhotoClicked.value, idx);
			// @ts-expect-error lastPhotoClicked is always defined here
			const idx_max = Math.max(lastPhotoClicked.value, idx);
			for (let i = idx_min; i <= idx_max; i++) {
				removeFromPhotoSelection(i);
			}
		} else if (lastPhotoClicked.value === undefined) {
			addToPhotoSelection(idx);
		} else {
			const idx_min = Math.min(lastPhotoClicked.value, idx);
			const idx_max = Math.max(lastPhotoClicked.value, idx);
			for (let i = idx_min; i <= idx_max; i++) {
				addToPhotoSelection(i);
			}
		}
		lastPhotoClicked.value = idx;
	}

	function albumClick(idx: number, e: Event) {
		// clear the Photo selection.
		selectedPhotosIdx.value = [];

		// we do not support CTRL + SHIFT
		if (!modKey().value && !shiftKeyState.value) {
			return;
		}

		// We are able to edit.
		e.preventDefault();
		e.stopPropagation();

		if (modKey().value) {
			handleAlbumCtrl(idx, e);
			return;
		}

		if (shiftKeyState.value) {
			handleAlbumShift(idx, e);
			return;
		}
	}

	function handleAlbumCtrl(idx: number, e: Event) {
		if (isAlbumSelected(idx)) {
			removeFromAlbumSelection(idx);
		} else {
			addToAlbumSelection(idx);
		}
		lastAlbumClicked.value = idx;
	}

	function handleAlbumShift(idx: number, e: Event) {
		if (selectedAlbums.value.length === 0) {
			addToAlbumSelection(idx);
			return;
		}

		// Picture is selected.
		// We remove all pictures from latest click till current idx
		if (isAlbumSelected(idx)) {
			// @ts-expect-error lastAlbumClicked is always defined here
			const idx_min = Math.min(lastAlbumClicked.value, idx);
			// @ts-expect-error lastAlbumClicked is always defined here
			const idx_max = Math.max(lastAlbumClicked.value, idx);
			for (let i = idx_min; i <= idx_max; i++) {
				removeFromAlbumSelection(i);
			}
		} else if (lastAlbumClicked.value === undefined) {
			addToAlbumSelection(idx);
		} else {
			const idx_min = Math.min(lastAlbumClicked.value, idx);
			const idx_max = Math.max(lastAlbumClicked.value, idx);
			for (let i = idx_min; i <= idx_max; i++) {
				addToAlbumSelection(i);
			}
		}
		lastAlbumClicked.value = idx;
	}

	function selectEverything() {
		// @ts-expect-error
		if (selectedPhotosIdx.value.length === photos.value.length) {
			// Flip and select albums
			selectedPhotosIdx.value = [];
			// @ts-expect-error
			selectedAlbumsIdx.value = Array.from(Array(albums.value.length).keys());
			return;
		}
		// @ts-expect-error
		if (selectedAlbumsIdx.value.length === albums.value.length) {
			selectedAlbumsIdx.value = [];
			// @ts-expect-error
			selectedPhotosIdx.value = Array.from(Array(photos.value.length).keys());
			// Flip and select photos
			return;
		}
		if (selectedAlbumsIdx.value.length > 0) {
			// @ts-expect-error
			selectedAlbumsIdx.value = Array.from(Array(albums.value.length).keys());
			return;
		}
		// @ts-expect-error
		if (photos.value.length > 0) {
			// @ts-expect-error
			selectedPhotosIdx.value = Array.from(Array(photos.value.length).keys());
			return;
		}
		// @ts-expect-error
		selectedAlbumsIdx.value = Array.from(Array(albums.value.length).keys());
	}

	return {
		selectedPhoto,
		selectedAlbum,
		selectedPhotosIdx,
		selectedAlbumsIdx,
		selectedPhotos,
		selectedAlbums,
		selectedPhotosIds,
		selectedAlbumsIds,
		photoClick,
		albumClick,
		selectEverything,
		unselect,
	};
}
