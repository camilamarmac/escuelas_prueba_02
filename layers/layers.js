var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Establecimientosesducativosescobar_1 = new ol.format.GeoJSON();
var features_Establecimientosesducativosescobar_1 = format_Establecimientosesducativosescobar_1.readFeatures(json_Establecimientosesducativosescobar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Establecimientosesducativosescobar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Establecimientosesducativosescobar_1.addFeatures(features_Establecimientosesducativosescobar_1);
cluster_Establecimientosesducativosescobar_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Establecimientosesducativosescobar_1
});
var lyr_Establecimientosesducativosescobar_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Establecimientosesducativosescobar_1, 
                style: style_Establecimientosesducativosescobar_1,
                popuplayertitle: 'Establecimientos esducativos escobar',
                interactive: true,
    title: 'Establecimientos esducativos escobar<br />\
    <img src="styles/legend/Establecimientosesducativosescobar_1_0.png" /> Secundaria<br />\
    <img src="styles/legend/Establecimientosesducativosescobar_1_1.png" /> Primaria-Secundaria<br />\
    <img src="styles/legend/Establecimientosesducativosescobar_1_2.png" /> Primaria<br />\
    <img src="styles/legend/Establecimientosesducativosescobar_1_3.png" /> Inicial-Primaria<br />\
    <img src="styles/legend/Establecimientosesducativosescobar_1_4.png" /> Inicial<br />' });

lyr_Argenmap_0.setVisible(true);lyr_Establecimientosesducativosescobar_1.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_Establecimientosesducativosescobar_1];
lyr_Establecimientosesducativosescobar_1.set('fieldAliases', {'fid': 'fid', 'fna': 'fna', 'gna': 'Institución', 'nam': 'Nombre', 'fun': 'fun', 'cue': 'cue', 'amg': 'amg', 'ges': 'Gestión', 'mde': 'mde', 'nen': 'nen', 'sag': 'sag', 'pre': 'pre', 'Primaria': 'Primaria', 'Secundaria': 'Secundaria', 'Jardin': 'Jardin', 'Adultos': 'Adultos', 'Profesiona': 'Profesiona', 'Temprana': 'Temprana', 'Especial': 'Especial', 'Comun': 'Comun', 'Niveles ob': 'Niveles dictados', });
lyr_Establecimientosesducativosescobar_1.set('fieldImages', {'fid': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'fun': 'TextEdit', 'cue': 'TextEdit', 'amg': 'TextEdit', 'ges': 'TextEdit', 'mde': 'TextEdit', 'nen': 'TextEdit', 'sag': 'TextEdit', 'pre': 'TextEdit', 'Primaria': 'TextEdit', 'Secundaria': 'TextEdit', 'Jardin': 'TextEdit', 'Adultos': 'TextEdit', 'Profesiona': 'TextEdit', 'Temprana': 'TextEdit', 'Especial': 'TextEdit', 'Comun': 'TextEdit', 'Niveles ob': 'TextEdit', });
lyr_Establecimientosesducativosescobar_1.set('fieldLabels', {'fid': 'hidden field', 'fna': 'hidden field', 'gna': 'header label - visible with data', 'nam': 'inline label - visible with data', 'fun': 'hidden field', 'cue': 'hidden field', 'amg': 'hidden field', 'ges': 'inline label - always visible', 'mde': 'hidden field', 'nen': 'hidden field', 'sag': 'hidden field', 'pre': 'hidden field', 'Primaria': 'hidden field', 'Secundaria': 'hidden field', 'Jardin': 'hidden field', 'Adultos': 'hidden field', 'Profesiona': 'hidden field', 'Temprana': 'hidden field', 'Especial': 'hidden field', 'Comun': 'hidden field', 'Niveles ob': 'inline label - visible with data', });
lyr_Establecimientosesducativosescobar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});