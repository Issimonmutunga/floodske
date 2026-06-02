var wms_layers = [];


        var lyr_WorldHillshade_0 = new ol.layer.Tile({
            'title': 'World Hillshade',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_FloodSusceptibilityZones_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Flood Susceptibility Zones<br />\
    <img src="styles/legend/FloodSusceptibilityZones_1_0.png" /> Very Low <br />\
    <img src="styles/legend/FloodSusceptibilityZones_1_1.png" /> Low <br />\
    <img src="styles/legend/FloodSusceptibilityZones_1_2.png" /> Moderate<br />\
    <img src="styles/legend/FloodSusceptibilityZones_1_3.png" /> High<br />\
    <img src="styles/legend/FloodSusceptibilityZones_1_4.png" /> Very High<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FloodSusceptibilityZones_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3774870.000000, -521229.192545, 4664970.000000, 603629.084479]
        })
    });

lyr_WorldHillshade_0.setVisible(true);lyr_FloodSusceptibilityZones_1.setVisible(true);
var layersList = [lyr_WorldHillshade_0,lyr_FloodSusceptibilityZones_1];
