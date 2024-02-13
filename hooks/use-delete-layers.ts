import { useSelf, useMutation } from "@/liveblocks.config";

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get("layers");
      const liveLayersIds = storage.get("layerIds");

      for (const id of selection) {
        liveLayers.delete(id);

        const index = liveLayersIds.indexOf(id);

        if (index !== -1) {
          liveLayersIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
};

export const useDeleteLayersWithBackspace = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get("layers");
      const liveLayersIds = storage.get("layerIds");

      if (selection.length === 1) {
        const currentLayer = liveLayers.get(selection[0]);

        if (
          currentLayer?.get("type") === 3 ||
          currentLayer?.get("type") === 4
        ) {
          return;
        }
      }

      for (const id of selection) {
        liveLayers.delete(id);

        const index = liveLayersIds.indexOf(id);

        if (index !== -1) {
          liveLayersIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );
};
