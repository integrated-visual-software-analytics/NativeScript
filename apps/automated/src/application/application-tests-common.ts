﻿import { isAndroid, isIOS, Device, Application, platformNames } from '@nativescript/core';

import * as TKUnit from '../tk-unit';

if (isAndroid) {
	console.log('We are running on an Android device!');
} else if (isIOS) {
	console.log('We are running on an iOS device!');
}

export function testInitialized() {
	if (Device.os === platformNames.android) {
		TKUnit.assert(Application.android, 'Application module not properly intialized');
	} else if (Device.os === platformNames.ios) {
		TKUnit.assert(Application.ios, 'Application module not properly intialized');
	}
}

export function testDisplayedEvent() {
	// global.isDisplayedEventFired flag is set in app.ts application.displayedEvent handler
	TKUnit.assert(global.isDisplayedEventFired, 'application.displayedEvent not fired');
}

export function testOrientation() {
	TKUnit.assert(Application.orientation, 'Orientation not initialized.');
}
