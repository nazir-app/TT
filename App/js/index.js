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
                .setHeight("2.125em")
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
                .setLeft("0em")
                .setTop("3.8095238095238093em")
                .setWidth("3.8857142857142857em")
                .setHeight("2.057142857142857em")
                .setCaption("Date:")
                .setHAlign("center")
                .setFontColor("#000000")
                .setFontSize("14px")
                .setFontFamily("arial")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput750")
                .setLeft("3.8095238095238093em")
                .setTop("3.8095238095238093em")
                .setWidth("8.076190476190476em")
                .setHeight("1.6761904761904762em")
                .setLabelSize("8em")
                .setType("date")
                .setValue("1656784800000")
                .setCustomStyle({
                    "KEY" : {
                    },
                    "BORDER" : {
                        "border-top" : "solid 1px #000000",
                        "border-right" : "solid 1px #000000",
                        "border-bottom" : "solid 1px #000000",
                        "border-left" : "solid 1px #000000",
                        "text-align" : "center"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label20")
                .setLeft("0.7619047619047619em")
                .setTop("6.857142857142857em")
                .setCaption("Buyer:")
                .setHAlign("left")
                .setFontSize("14px")
                .setFontWeight("bold")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox3")
                .setClassName("xui-css-aja")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox4")
                .setClassName("xui-css-ajs")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox5")
                .setClassName("xui-css-akk")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        events:{
        },
        _page_onready:function(e,i){

        },
        /**
         * Fired when the control was rendered
         * @method onRender [xui.Module event]
         * @param {xui.UIProfile.} profile  The current control's profile object
        */
        _page_onrender:function(profile){

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