function loadMap(){
    require(["esri/config",    
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/Locate",
            "esri/widgets/Search",
            "esri/layers/FeatureLayer"
          ], 
            
    function(esriConfig, 
            Map, 
            MapView,
            Locate,
            Search,
            FeatureLayer
            ) {   
        
      esriConfig.apiKey = "AAPKdd7c255c653b4b2789e0123c1107c197dv1Ropz0dQZOy89fge9jPPo3WaNTVC2kYIVE-3jKjxEPlZIYYXI7-zrRXkKGPB-z"

      const map = new Map({
        basemap: "satellite"
      });

      const view = new MapView({
        container: "viewDiv",
        center: [-83.366917,43.909035],
        zoom: 19,
        map: map
      });

      //add locate button
      const locateButton = new Locate({
        view: view
      });

      view.ui.add(locateButton, {
        position: "bottom-left"
      });

      //add search
      const searchTool = new Search({
          view: view,
      });

      view.ui.add(searchTool, {
          position: "top-left",
          index: 0
      });

      //create new feature layer
      const surveyLayer = new FeatureLayer({
        url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/survey123_9b7e5a2a198a4bcc80906414913f8b52_results/FeatureServer"
      });

      map.add(surveyLayer);

    //   const map = new Map({
    //       basemap: "arcgis-imagery-standard" //basemap layer service   
    //   });

    //   const view = new MapView({
    //       map: map,
    //       center: [-83.366917,43.909035],
    //       zoom: 19,
    //       container:"viewDiv"
    //   });


    //   //add basemap gallery
    //   const basemapGallery = new BasemapGallery({
    //       view: view,
    //   });

    //   const bgExpand = new Expand({
    //       view,
    //       content: basemapGallery,
    //       expandIcon: "basemap"
    //     });

    //   view.ui.add(bgExpand, "top-right");

    //   //add locate button
    //   const locateButton = new Locate({
    //       view: view,
    //   });

    //   view.ui.add(locateButton, "top-left");

    //   //add search
    //   const searchTool = new Search({
    //       view: view,
    //   });

    //   view.ui.add(searchTool, {
    //       position: "top-left",
    //       index: 0
    //   });

    //   //add graphics layer
    //   const graphicsLayer = new GraphicsLayer();
    //   map.add(graphicsLayer);

    //   const point = { 
    //       type: "point",  
    //       longitude: -83.367005,    //long lat of family RV
    //       latitude: 43.908610
    //     };

    //   const cabinRings = [
    //     [-83.366955, 43.908686],
    //     [-83.366953, 43.908696],
    //     [-83.366794, 43.908644],
    //     [-83.366810, 43.908562],
    //     [-83.366955, 43.908686]
    //   ];

    //   const bridgePath = [
    //     [-83.367215, 43.909438],
    //     [-83.367220, 43.909604]
    //   ];

    //   const bridgeLine = ({
    //     type: "polyline",
    //     hasZ: false,
    //     hasM: false,
    //     paths: bridgePath
    //   });

    //   const cabinPoly = ({
    //     type: "polygon",
    //     hasM: false,
    //     hasZ: false,
    //     rings: cabinRings
    //   })

    //   const simpleMarkerSymbol = {  
    //     type: "simple-marker",  
    //     style: "triangle",
    //     color: [168, 111, 50],  
    //     outline: {  
    //       color: [255, 255, 255], // White  
    //       width: 1
    //     }  
    //   };

    //   const simpleLineSymbol = {
    //     type: "simple-line",  // autocasts as new SimpleLineSymbol()
    //     color: [168, 111, 50],
    //     width: "10px",
    //     style: "short-dot"
    //   };

    //   const simpleFillSymbol = {
    //     type: "simple-fill",
    //     color: [227, 139, 79, 0.8],  // Orange, opacity 80%
    //     outline: {
    //         color: [255, 255, 255],
    //         width: 1
    //     }
    //  };
      
    //   const popupTemplate = {
    //     title: "{Name}",
    //     content: "{Description}"
    //   };

    //   const pointAttributes = {
    //     Name: "Family RV",
    //     Description: "The RV was needed since the cabin didn't have enough rooms to sleep everyone."
    //   };

    //   const lineAttributes = {
    //     Name: "Canal Bridge",
    //     Description: "So it turns out that someone in the 70s just randomly built this bridge over the canal. It was recently removed."
    //   };

    //   const polyAttributes = {
    //     Name: "Caseville cabin",
    //     Description: "Our family cabin in the thumb of MI. My favorite place in the world."
    //   }


    //   const pointGraphic = new Graphic({  
    //     geometry: point,  
    //     symbol: simpleMarkerSymbol,
    //     attributes: pointAttributes,
    //     popupTemplate: popupTemplate
    //   });

    //   const lineGraphic = new Graphic({
    //     geometry: bridgeLine,
    //     symbol: simpleLineSymbol,
    //     attributes: lineAttributes,
    //     popupTemplate: popupTemplate
    //   })

    //   const polyGraphic = new Graphic({
    //     geometry: cabinPoly,
    //     symbol: simpleFillSymbol,
    //     attributes: polyAttributes,
    //     popupTemplate: popupTemplate
    //   });

    //   graphicsLayer.add(pointGraphic);
    //   graphicsLayer.add(lineGraphic);
    //   graphicsLayer.add(polyGraphic);

    //   //Define pop-up for wildfire layer
    //   const popupWildfire = {
    //     "title": "Active Wildfires",
    //     "content": "<b>Name:</b> {IncidentName}<br><b>Fatalities:</b> {Fatalities}"
    //   };

    //   const wildfireLayer = new FeatureLayer({
    //     url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer",
    //     outFields:["IncidentName", "Fatalities"],
    //     popupTemplate: popupWildfire
    //   });   

    //   map.add(wildfireLayer);

    //   const airportRenderer = {
    //     "type": "simple",
    //     "symbol": {
    //       "type": "picture-marker",
    //       "url": "https://jlloydcsapo.github.io/Lab-2-AGOL/outline_local_airport_black_24dp.png",
    //       "width": "18px",
    //       "height": "18px"
    //     }
    //   };

    //   const heliportRenderer = {
    //     "type": "simple",
    //     "symbol": {
    //       "type": "picture-marker",
    //       "url": "https://jlloydcsapo.github.io/Lab-2-AGOL/helicopter.png",
    //       "width": "18px",
    //       "height": "18px"
    //     }
    //   };

    //   const myAirportRenderer = {
    //     "type": "simple",
    //     "symbol": {
    //       "type": "picture-marker",
    //       "url": "https://jlloydcsapo.github.io/Lab-3-Write-AGOL/red_plane.png",
    //       "width": "18px",
    //       "height": "18px"
    //     }
    //   };

    //   //const to make the airport labels
    //   const airportLabels = {
    //     symbol: {
    //       type: "text",
    //       color: "#FFFFFF",
    //       haloColor: "#5E8D74",
    //       haloSize: "2px",
    //       font: {
    //         size: "12px",
    //         family: "Noto Sans",
    //         style: "italic",
    //         weight: "normal"
    //       }
    //     },
    //     labelPlacement: "above-center",
    //     labelExpressionInfo: {
    //       expression: "$feature.Fac_Name"
    //     }
    //   };

    //   const myAirportLabels = {
    //     symbol: {
    //       type: "text",
    //       color: "#FFFFFF",
    //       haloColor: "#5E8D74",
    //       haloSize: "2px",
    //       font: {
    //         size: "12px",
    //         family: "Noto Sans",
    //         style: "italic",
    //         weight: "normal"
    //       }
    //     },
    //     labelPlacement: "above-center",
    //     labelExpressionInfo: {
    //       expression: "$feature.AirportCode"
    //     }
    //   };


    //   const airportLayer = new FeatureLayer({
    //     url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/US_Airports_Lab2_AGOL/FeatureServer",
    //     renderer: airportRenderer,
    //     definitionExpression: "Fac_Type = 'AIRPORT'", //adding sql to filter for airports
    //     labelingInfo: [airportLabels] //adding the labels
    //   }); 
      
    //   airportLayer.title = "Airports";

    //   const helicopterLayer = new FeatureLayer({
    //     url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/US_Airports_Lab2_AGOL/FeatureServer",
    //     renderer: heliportRenderer,
    //     definitionExpression: "Fac_Type = 'HELIPORT'", //adding sql to filter for airports
    //     labelingInfo: [airportLabels] //adding the labels
    //   });
      
    //   helicopterLayer.title = "Helicopters";

    //   const myAirports = new FeatureLayer({
    //     url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/MyAirports_jcsapo/FeatureServer",
    //     renderer: myAirportRenderer,
    //     labelingInfo: [myAirportLabels] 
    //   });

    //   myAirports.title = "My Airports";


    //   map.add(airportLayer);
    //   map.add(helicopterLayer);
    //   map.add(myAirports);

    //   const pointInfos = {
    //     layer: myAirports
    //   };

    //   const editor = new Editor({
    //     view: view,
    //     layerInfos: [pointInfos]
    //   });

    //   const editExpand = new Expand({
    //     view,
    //     content: editor,
    //     expandIcon: "annotate-tool"
    //   });

    //   view.ui.add(editExpand, "top-right");

    //   let legend = new Legend({
    //     view: view
    //   });

    //   legend.style = {
    //     type: "card",
    //     layout: "auto"
    //   }

    //   view.ui.add(legend, "bottom-right");
    }); 

};

document.addEventListener('DOMContentLoaded', loadMap);