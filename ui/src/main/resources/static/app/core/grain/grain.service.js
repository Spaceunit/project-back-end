/**
 * Created by oleksiypolshchak on 6/3/16.
 */
'use strict';

angular.
module('core.grain').
factory('Grain', ['$resource',
    function($resource) {
        return $resource('data/:jsonId.json', {}, {
            query: {
                method: 'GET',
                params: {jsonId: 'resources'},
                isArray: true
            }
        });
    }
]);