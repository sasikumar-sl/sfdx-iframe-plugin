#!/usr/bin/env bash

BUILD_TOOL=${BUILD_TOOL:-docker}

# Run '$ PUSH=true ./docker-build.sh' to push image after building
PUSH=${PUSH:-false}
TAG=iframe-develop
PROJECT=${PROJECT:-kansas-150323}

BASE_NAME=gcr.io/$PROJECT/ui
IMAGE_NAME=$BASE_NAME:$TAG
# GITHUB_SHA is provided to us under GitHub Actions environment. It
# will contain the full hash of the latest commit. If it doesn't
# exist then webpack build will fall back to the git hash module.
# Note: doing this because under GitHub Actions environment, there
# doesn't seem to exist a .git folder we can copy into the container
# in order for the webpack git hash module to grab the hash from.
$BUILD_TOOL build . -t $IMAGE_NAME --build-arg GITHUB_SHA="$GITHUB_SHA" --build-arg NPM_TOKEN="$NPM_TOKEN"
BUILD_RESULT=$?
if [ $BUILD_RESULT -ne 0 ]; then
    echo
    echo '*** Error: Failed to build. ***'
    echo
    exit $BUILD_RESULT
fi

IMAGES_TO_PUSH=($IMAGE_NAME)

if [ ! -z "$GITHUB_SHA" ]; then
    SHA_NAME=$BASE_NAME:"$GITHUB_SHA"
    $BUILD_TOOL image tag $IMAGE_NAME $SHA_NAME
    TAG_RESULT=$?
    if [ $TAG_RESULT -ne 0 ]; then
        echo
        echo '*** Error: Failed to tag with github sha. ***'
        echo
        exit $TAG_RESULT
    fi

    IMAGES_TO_PUSH+=($SHA_NAME)
fi

if [ $PUSH == true ]; then
    for image in ${IMAGES_TO_PUSH[@]}; do
        $BUILD_TOOL push $image
        PUSH_RESULT=$?
        if [ $PUSH_RESULT -ne 0 ]; then
            echo
            echo "*** Error: Failed to push image: $image. ***"
            echo
            exit $PUSH_RESULT
        fi
    done
fi
