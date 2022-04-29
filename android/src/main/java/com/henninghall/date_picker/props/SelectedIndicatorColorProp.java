package com.henninghall.date_picker.props;

import com.facebook.react.bridge.Dynamic;

public class SelectedIndicatorColorProp extends Prop<String> {
    public static final String name = "selectedIndicatorColor";
    
    @Override
    public String toValue(Dynamic value){
        return value.asString();
    }

}
