package com.mynewproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactApplication;
import com.facebook.soloader.SoLoader;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "MyNewProject"; // This should match the name in your JavaScript code
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SoLoader.init(this, /* native exopackage */ false);
    }
}
