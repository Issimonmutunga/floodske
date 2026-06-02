# QGIS Workflow Log

## Raster QA/QC

The exported flood factor rasters were loaded into QGIS to visually inspect CRS alignment, raster extent, masking behaviour, and modelling artefacts.

The classified susceptibility raster was first checked in grayscale, confirming that the raster surface filled Kenya correctly. Paletted symbology was then applied for class-based flood susceptibility mapping.

A circular/bullseye artefact pattern was observed in the first susceptibility output, likely caused by the distance-to-water factor. To diagnose this, normalized factor rasters were exported and loaded individually into QGIS for comparison.