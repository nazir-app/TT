// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label13")
                .setDock("top")
                .setLeft("9.904761904761905em")
                .setTop("2.2857142857142856em")
                .setWidth("32.91428571428571em")
                .setHeight("2.742857142857143em")
                .setCaption("Timing & Consumption")
                .setHAlign("center")
                .setFontColor("#000000")
                .setFontSize("18px")
                .setFontFamily("arial")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#A0C3DF",
                        "background-position" : "center center",
                        "font-family" : "arial black,avant garde",
                        "font-size" : "16px"
                    },
                    "VALIGN" : {
                        "text-align" : "center"
                    },
                    "CAPTION" : {
                        "font-weight" : "bold",
                        "font-style" : "normal",
                        "text-align" : "center"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label23")
                .setDock("left")
                .setLeft("2.2857142857142856em")
                .setTop("3.0476190476190474em")
                .setWidth("3.123809523809524em")
                .setCaption("Date:")
                .setFontColor("#000000")
                .setFontSize("14px")
                .setFontFamily("arial")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput750")
                .setLeft("3.0476190476190474em")
                .setTop("3.0476190476190474em")
                .setWidth("8.076190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Date ")
                .setType("date")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});