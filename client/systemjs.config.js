/**
 * Created by vincebloise on 1/18/17.
 */
// This file is used by samples that are loaded from the local Node server

System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true,
        target: "ES5",
        module: "commonjs"},
    map: {
        '@angular': 'node_modules/@angular',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        'rxjs'    : 'node_modules/rxjs',
        '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser':'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

        '@angular/cdk/a11y':    'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js',
        '@angular/cdk/bidi':    'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js',
        '@angular/cdk/observers':    'node_modules/@angular/cdk/bundles/cdk-observers.umd.js',
        '@angular/cdk/overlay':    'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js',
        '@angular/cdk/portal':    'node_modules/@angular/cdk/bundles/cdk-portal.umd.js',
        '@angular/cdk/scrolling':    'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js',
        '@angular/cdk/platform':    'node_modules/@angular/cdk/bundles/cdk-platform.umd.js',
        '@angular/cdk/keycodes':    'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js',
        '@angular/cdk/coercion':    'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js',
        '@angular/cdk/collections':    'node_modules/@angular/cdk/bundles/cdk-collections.umd.js',
        /*'@angular/cdk/rxjs':    'node_modules/@angular/cdk/bundles/cdk-rxjs.umd.js',*/
        '@angular/cdk/table':    'node_modules/@angular/cdk/bundles/cdk-table.umd.js',
        '@angular/cdk/stepper': 'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js',
        '@angular/cdk/accordion': 'node_modules/@angular/cdk/bundles/cdk-accordion.umd.js',
        '@angular/cdk/layout': 'node_modules/@angular/cdk/bundles/cdk-layout.umd.js',
        'tslib': 'node_modules/tslib/tslib.js'
    },
    paths: {
        //'node_modules/@angular/material/*': 'node_modules/@angular/material/bundles/material.umd.js',
        //'node_modules/@angular/platform-browser/animations/*': 'node_modules/@angular/platform-browser/animations/bundles/platform-browser-animations.umd.js',
        //'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
        /*added these next three lines
         '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
         '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
         '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js'*/
    },
    meta: {
        '@angular/*': {'format': 'cjs'},
        'app/mediator/stock.ts': {
            format: 'es6'
        }
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'Rx'},
        '@angular/cdk'                      : {main: 'bundles/cdk.umd.js'}
        //'@angular/core'                    : {main: 'core.umd.min.js'},
        //'@angular/common'                  : {main: 'common.umd.min.js'},
        //'@angular/compiler'                : {main: 'compiler.umd.min.js'},
        //'@angular/router'                  : {main: 'router.umd.min.js'}
        //'@angular/forms'                  : {main: 'forms.umd.min.js'}
        //'@angular/http'                    : {main: 'http.umd.min.js'}
        //'@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        //'@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'},
        /* added this */
        //'@angular/platform-browser': {main: 'platform-browser-animations.umd.js'}
    }
});

/*
 System.config({
 transpiler: 'typescript',
 typescriptOptions: {emitDecoratorMetadata: true},
 map: {
 '@angular': 'node_modules/@angular'
 },
 paths: {
 'node_modules/@angular/!*': 'node_modules/@angular/!*!/bundles'
 },
 meta: {
 '@angular/!*': {'format': 'cjs'}
 },
 packages: {
 'app'                              : {main: './bids/bid-component', defaultExtension: 'ts'},
 '@angular/core'                    : {main: 'core.umd.min.js'},
 '@angular/common'                  : {main: 'common.umd.min.js'},
 '@angular/compiler'                : {main: 'compiler.umd.min.js'},
 '@angular/forms'                   : {main: 'forms.umd.min.js'},
 '@angular/http'                    : {main: 'http.umd.min.js'},
 '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
 '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
 }
 });*/