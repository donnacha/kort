#!/bin/bash
if [ -z $BUILD_DIR -a -z $CI_HOME ] ; then
   echo "You need to specify the BUILD_DIR and CI_HOME environment variable."
   exit 1
fi

mkdir $BUILD_DIR
mkdir $BUILD_DIR/lib

cp $CI_HOME/index.* $BUILD_DIR
cp $CI_HOME/app.* $BUILD_DIR/
cp -r $CI_HOME/app $BUILD_DIR/
cp -r $CI_HOME/resources $BUILD_DIR/
cp -r $CI_HOME/touch $BUILD_DIR/
cp -r $CI_HOME/ux $BUILD_DIR/
cp -r $CI_HOME/i18n $BUILD_DIR

cp -r $CI_HOME/lib/Leaflet-0.4.4/ $BUILD_DIR/lib/

mv $BUILD_DIR ../
cd ../$BUILD_DIR