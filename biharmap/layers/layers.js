var wms_layers = [];

var format_PopulationData_0 = new ol.format.GeoJSON();
var features_PopulationData_0 = format_PopulationData_0.readFeatures(json_PopulationData_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationData_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationData_0.addFeatures(features_PopulationData_0);
var lyr_PopulationData_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationData_0, 
                style: style_PopulationData_0,
                popuplayertitle: 'Population Data',
                interactive: true,
    title: 'Population Data<br />\
    <img src="styles/legend/PopulationData_0_0.png" /> 814497 - 2533388<br />\
    <img src="styles/legend/PopulationData_0_1.png" /> 2533388 - 3895285<br />\
    <img src="styles/legend/PopulationData_0_2.png" /> 3895285 - 7676681<br />' });
var format_districts_1 = new ol.format.GeoJSON();
var features_districts_1 = format_districts_1.readFeatures(json_districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districts_1.addFeatures(features_districts_1);
var lyr_districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_districts_1, 
                style: style_districts_1,
                popuplayertitle: 'districts',
                interactive: true,
    title: 'districts<br />\
    <img src="styles/legend/districts_1_0.png" /> 1.6 - 8.3<br />\
    <img src="styles/legend/districts_1_1.png" /> 8.3 - 25.7<br />\
    <img src="styles/legend/districts_1_2.png" /> 25.7 - 69.6<br />' });
var format_AnnualMeanPotentialSoilLoss_2 = new ol.format.GeoJSON();
var features_AnnualMeanPotentialSoilLoss_2 = format_AnnualMeanPotentialSoilLoss_2.readFeatures(json_AnnualMeanPotentialSoilLoss_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnnualMeanPotentialSoilLoss_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualMeanPotentialSoilLoss_2.addFeatures(features_AnnualMeanPotentialSoilLoss_2);
var lyr_AnnualMeanPotentialSoilLoss_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualMeanPotentialSoilLoss_2, 
                style: style_AnnualMeanPotentialSoilLoss_2,
                popuplayertitle: 'Annual Mean Potential Soil Loss',
                interactive: true,
    title: 'Annual Mean Potential Soil Loss<br />\
    <img src="styles/legend/AnnualMeanPotentialSoilLoss_2_0.png" /> 11 - 24<br />\
    <img src="styles/legend/AnnualMeanPotentialSoilLoss_2_1.png" /> 24 - 35<br />\
    <img src="styles/legend/AnnualMeanPotentialSoilLoss_2_2.png" /> 35 - 75<br />' });

lyr_PopulationData_0.setVisible(true);lyr_districts_1.setVisible(true);lyr_AnnualMeanPotentialSoilLoss_2.setVisible(true);
var layersList = [lyr_PopulationData_0,lyr_districts_1,lyr_AnnualMeanPotentialSoilLoss_2];
lyr_PopulationData_0.set('fieldAliases', {'dt_code': 'dt_code', 'district': 'district', 'st_code': 'st_code', 'year': 'year', 'st_nm': 'st_nm', 'RF(MM)': 'RF(MM)', 'dontforgettofloss2_uid': 'dontforgettofloss2_uid', 'dontforgettofloss2_name': 'dontforgettofloss2_name', 'dontforgettofloss2_state': 'dontforgettofloss2_state', 'dontforgettofloss2_country': 'dontforgettofloss2_country', 'dontforgettofloss2_censusname': 'dontforgettofloss2_censusname', 'dontforgettofloss2_dist_locallang': 'dontforgettofloss2_dist_locallang', 'dontforgettofloss2_lgd_districtname': 'dontforgettofloss2_lgd_districtname', 'dontforgettofloss2_lgd_districtcode': 'dontforgettofloss2_lgd_districtcode', 'dontforgettofloss2_lgd_statecode': 'dontforgettofloss2_lgd_statecode', 'dontforgettofloss2_censuscode2011': 'dontforgettofloss2_censuscode2011', 'dontforgettofloss2_tot_p_2026': 'dontforgettofloss2_tot_p_2026', });
lyr_districts_1.set('fieldAliases', {'dt_code': 'dt_code', 'district': 'district', 'st_code': 'st_code', 'year': 'year', 'st_nm': 'st_nm', 'RF(MM)': 'RF(MM)', 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_District': 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_District', 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_Rainfall (mm)': 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_Rainfall (mm)', });
lyr_AnnualMeanPotentialSoilLoss_2.set('fieldAliases', {'dt_code': 'dt_code', 'district': 'district', 'RF(MM)': 'RF(MM)', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_District Name': 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_District Name', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Mean PSL (t/ha/yr)': 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Mean PSL (t/ha/yr)', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Cummulative PSL (t/ha/yr)': 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Cummulative PSL (t/ha/yr)', });
lyr_PopulationData_0.set('fieldImages', {'dt_code': 'TextEdit', 'district': 'TextEdit', 'st_code': 'TextEdit', 'year': 'TextEdit', 'st_nm': 'TextEdit', 'RF(MM)': 'TextEdit', 'dontforgettofloss2_uid': 'Range', 'dontforgettofloss2_name': 'TextEdit', 'dontforgettofloss2_state': 'TextEdit', 'dontforgettofloss2_country': 'TextEdit', 'dontforgettofloss2_censusname': 'DateTime', 'dontforgettofloss2_dist_locallang': 'TextEdit', 'dontforgettofloss2_lgd_districtname': 'TextEdit', 'dontforgettofloss2_lgd_districtcode': 'Range', 'dontforgettofloss2_lgd_statecode': 'Range', 'dontforgettofloss2_censuscode2011': 'Range', 'dontforgettofloss2_tot_p_2026': 'Range', });
lyr_districts_1.set('fieldImages', {'dt_code': 'TextEdit', 'district': 'TextEdit', 'st_code': 'TextEdit', 'year': 'TextEdit', 'st_nm': 'TextEdit', 'RF(MM)': 'TextEdit', 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_District': 'TextEdit', 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_Rainfall (mm)': 'TextEdit', });
lyr_AnnualMeanPotentialSoilLoss_2.set('fieldImages', {'dt_code': 'TextEdit', 'district': 'TextEdit', 'RF(MM)': 'TextEdit', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_District Name': 'TextEdit', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Mean PSL (t/ha/yr)': 'TextEdit', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Cummulative PSL (t/ha/yr)': 'TextEdit', });
lyr_PopulationData_0.set('fieldLabels', {'dt_code': 'no label', 'district': 'no label', 'st_code': 'no label', 'year': 'no label', 'st_nm': 'no label', 'RF(MM)': 'no label', 'dontforgettofloss2_uid': 'no label', 'dontforgettofloss2_name': 'no label', 'dontforgettofloss2_state': 'no label', 'dontforgettofloss2_country': 'no label', 'dontforgettofloss2_censusname': 'no label', 'dontforgettofloss2_dist_locallang': 'no label', 'dontforgettofloss2_lgd_districtname': 'no label', 'dontforgettofloss2_lgd_districtcode': 'no label', 'dontforgettofloss2_lgd_statecode': 'no label', 'dontforgettofloss2_censuscode2011': 'no label', 'dontforgettofloss2_tot_p_2026': 'no label', });
lyr_districts_1.set('fieldLabels', {'dt_code': 'no label', 'district': 'no label', 'st_code': 'no label', 'year': 'no label', 'st_nm': 'no label', 'RF(MM)': 'no label', 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_District': 'no label', 'REMEMBERTOSAVEYOURFILESSOON - Sheet1 (1)_Rainfall (mm)': 'no label', });
lyr_AnnualMeanPotentialSoilLoss_2.set('fieldLabels', {'dt_code': 'no label', 'district': 'no label', 'RF(MM)': 'no label', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_District Name': 'no label', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Mean PSL (t/ha/yr)': 'no label', 'LONGTERMANNUALMEANPOTENTIALSOILLOSSBYDISTRICTINBIHAR - Sheet1 (1)_Cummulative PSL (t/ha/yr)': 'no label', });
lyr_AnnualMeanPotentialSoilLoss_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});