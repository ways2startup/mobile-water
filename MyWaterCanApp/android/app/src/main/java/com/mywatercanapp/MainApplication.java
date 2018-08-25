package com.mywatercanapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

import com.airbnb.android.react.maps.MapsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication  {

public boolean isDebug() {
      // Make sure you are using BuildConfig from your own application
      return BuildConfig.DEBUG;
}


public boolean getUseDeveloperSupport() {
  return BuildConfig.DEBUG;
}

protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
      /* new MainReactPackage(),
        new VectorIconsPackage() */
        new RNFusedLocationPackage(),
        new MapsPackage()
  );
}    

@Override
public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
}


@Override
public String getJSMainModuleName() {
  return "index";
}


@Override
public void onCreate() {
  super.onCreate();
  SoLoader.init(this, /* native exopackage */ false);
}


}
