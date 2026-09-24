import React from "react";

import L from "leaflet";
import { GeoJSON } from "react-leaflet";

import { type GeospatialLayer, LAYER_COLORS } from "../../types";
import { getLayerKey } from "../../utils/layer-utils";

interface MapLayersProps {
  layers: GeospatialLayer[];
  allLayers: GeospatialLayer[];
  labelPropertyKey?: string;
  layerColors?: Record<string, string>;
}

/**
 * Determines the display color for a geospatial layer
 *
 * Color priority:
 * 1. Custom color from layerColors prop (if provided)
 * 2. Default color from palette based on layer index
 *
 * @param layer - The layer to get color for
 * @param allLayers - All available layers (used to determine index)
 * @param layerColors - Optional custom color mapping by layer ID
 * @returns Hex color string (e.g., "#FF6B6B")
 */
export function getLayerColor(
  layer: GeospatialLayer,
  allLayers: GeospatialLayer[],
  layerColors: Record<string, string> = {},
): string {
  const layerId = getLayerKey(layer);
  if (layerColors[layerId]) {
    return layerColors[layerId];
  }
  const layerIndex = allLayers.findIndex((l) => getLayerKey(l) === layerId);
  return LAYER_COLORS[layerIndex % LAYER_COLORS.length];
}

/**
 * Creates Leaflet style options for a GeoJSON layer
 *
 * Unit layers are styled differently from regular layers:
 * - Unit boundaries: borders only, no fill (for better visibility of underlying data)
 * - Regular layers: borders with semi-transparent fill
 *
 * @param layer - The layer to style
 * @param color - Hex color string to use for the layer
 * @returns Leaflet PathOptions for styling the layer
 */
export function createGeoJsonStyle(
  layer: GeospatialLayer,
  color: string,
): L.PathOptions {
  // Unit boundaries should only show borders, no fill
  if (layer.isUnitLayer) {
    return {
      color,
      fillColor: color,
      weight: 2.5,
      opacity: 1,
      fillOpacity: 0, // No fill for unit boundaries
    };
  }

  // Regular layers show both border and fill
  return {
    color,
    fillColor: color,
    weight: 2,
    opacity: 0.8,
    fillOpacity: 0.3,
  };
}

/**
 * Builds popup content as DOM nodes. Feature properties are user-uploaded, so
 * they must only ever reach the DOM via textContent (never as an HTML string).
 */
export function createFeaturePopupContent(
  properties: GeoJSON.GeoJsonProperties,
): HTMLElement | null {
  const entries = Object.entries(properties ?? {}).filter(
    ([, value]) => value !== null && value !== undefined,
  );
  if (entries.length === 0) {
    return null;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "max-w-[200px]";
  entries.forEach(([key, value], index) => {
    if (index > 0) {
      wrapper.appendChild(document.createElement("br"));
    }
    const label = document.createElement("strong");
    label.textContent = `${key}:`;
    wrapper.appendChild(label);
    wrapper.appendChild(document.createTextNode(` ${String(value)}`));
  });
  return wrapper;
}

/**
 * Builds tooltip content as a text-only node so user-supplied labels are
 * never interpreted as HTML by Leaflet.
 */
export function createFeatureLabelContent(label: unknown): HTMLElement {
  const element = document.createElement("span");
  element.textContent = String(label);
  return element;
}

// GeoJSON onEachFeature function factory - creates function per layer
export function createOnEachFeature(
  layer: GeospatialLayer,
  labelPropertyKey?: string,
) {
  return (feature: GeoJSON.Feature, leafletLayer: L.Layer) => {
    if (!feature.properties) {
      return;
    }

    // Create popup with all properties
    const popupContent = createFeaturePopupContent(feature.properties);
    if (popupContent) {
      leafletLayer.bindPopup(popupContent);
    }

    // For unit boundaries, always show name (feature_name from DB) as label if available
    if (layer.isUnitLayer) {
      // Try both 'name' and 'feature_name' properties
      const labelValue =
        feature.properties.name || feature.properties.feature_name;
      if (labelValue) {
        leafletLayer.bindTooltip(createFeatureLabelContent(labelValue), {
          permanent: true,
          direction: "center",
          className: "map-feature-label",
        });
      }
    }
    // For other layers, use labelPropertyKey if provided
    else if (labelPropertyKey && feature.properties[labelPropertyKey]) {
      leafletLayer.bindTooltip(
        createFeatureLabelContent(feature.properties[labelPropertyKey]),
        {
          permanent: true,
          direction: "center",
          className: "map-feature-label",
        },
      );
    }
  };
}

export function MapLayers({
  layers,
  allLayers,
  labelPropertyKey,
  layerColors = {},
}: MapLayersProps) {
  return (
    <>
      {layers.map((layer) => {
        const color = getLayerColor(layer, allLayers, layerColors);
        return (
          <GeoJSON
            key={`${getLayerKey(layer)}-${labelPropertyKey || "default"}`}
            data={layer.data!}
            style={createGeoJsonStyle(layer, color)}
            onEachFeature={createOnEachFeature(layer, labelPropertyKey)}
          />
        );
      })}
    </>
  );
}
